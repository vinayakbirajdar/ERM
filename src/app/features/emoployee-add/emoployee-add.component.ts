import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { Employee } from "../../core/models/employee.model";
import { EmployeeService } from "../../core/services/employee.service";
import { Router } from "@angular/router";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: "app-emoployee-add",
  imports: [CommonModule, FormsModule],
  templateUrl: "./emoployee-add.component.html",
  styleUrl: "./emoployee-add.component.css",
})
export class EmoployeeAddComponent {
  constructor(
    private employeeService: EmployeeService,
    private router: Router,
    private matSnackBar: MatSnackBar
  ) {}

  employee: Employee = {
    id: 0,
    name: "",
    email: "",
    department: "",
    designation: "",
    salary: 0,
    joiningDate: new Date(),
    isActive: true,
  };

  addEmployee() {
    if (
      !this.employee.name ||
      !this.employee.email ||
      !this.employee.department ||
      !this.employee.designation ||
      !this.employee.salary ||
      !this.employee.joiningDate
    ) {
      this.matSnackBar.open("All Fields are requried", "Close", {
        duration: 3000,
        horizontalPosition: "right",
        verticalPosition: "top",
      });
      return;
    }
    const confrimed = confirm("Are you sure you want to add This Employee");
    if (confrimed) {
      this.employeeService.addEmployee(this.employee);
      this.matSnackBar.open("Employee added sucessfully", "close", {
        horizontalPosition: "right",
        verticalPosition: "top",
      });
      this.router.navigate(["/employees"]);
    }
  }
  goBack() {
    this.router.navigate(["/employees"]);
  }
}
