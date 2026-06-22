import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router, RouterLink } from "@angular/router";
import { EmployeeService } from "../../core/services/employee.service";
import { Employee } from "../../core/models/employee.model";
import { CommonModule } from "@angular/common";
import { FormsModule, NgModel } from "@angular/forms";

@Component({
  selector: "app-employee-details",
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: "./employee-details.component.html",
  styleUrl: "./employee-details.component.css",
})
export class EmployeeDetailsComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private employeeService: EmployeeService
  ) {}

  empid: number = 0;
  employeeDetails?: Employee;

  ngOnInit() {
    const idParam = Number(this.route.snapshot.paramMap.get("id"));
    this.empid = idParam ? Number(idParam) : 0;
    this.employeeDetails = this.employeeService.getEmployeeById(this.empid);
  }

  goBack() {
    this.router.navigate(["/employees"]);
  }

  editEmployee() {
    this.router.navigate(["/edit", this.empid]);
  }
}
