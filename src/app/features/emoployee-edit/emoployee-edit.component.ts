import { Component, OnInit } from "@angular/core";
import { EmployeeService } from "../../core/services/employee.service";
import { ActivatedRoute, Router } from "@angular/router";
import { Employee } from "../../core/models/employee.model";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-emoployee-edit",
  imports: [CommonModule, FormsModule],
  templateUrl: "./emoployee-edit.component.html",
  styleUrl: "./emoployee-edit.component.css",
})
export class EmoployeeEditComponent implements OnInit {
  constructor(
    private employeeService: EmployeeService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  empId: number = 0;
  employeeDetails!: Employee;

  ngOnInit(): void {
    this.empId = Number(this.route.snapshot.paramMap.get("id"));
    const employee = this.employeeService.getEmployeeById(this.empId);

    if (!employee) {
      alert("Employee not found");
      this.router.navigate(["/employees"]);
      return;
    }
    this.employeeDetails = { ...employee }; //spread operator creates a COPY
    this.employeeDetails.joiningDate = new Date(
      this.employeeDetails.joiningDate
    )
      .toISOString()
      .split("T")[0] as any;
  }

  saveEmployee() {
    const confirmDelete = confirm(
      "Are you sure you want to update the details"
    );
    if (confirmDelete) {
      this.employeeService.updateEmployee(this.employeeDetails);
      this.router.navigate(["/employees"]);
    }
  }

  goBack() {
    this.router.navigate(["/employees"]);
  }
}
