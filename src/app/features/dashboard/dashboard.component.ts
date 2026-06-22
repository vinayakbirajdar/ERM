import { Component, OnInit } from "@angular/core";
import { EmployeeService } from "../../core/services/employee.service";
import { Employee } from "../../core/models/employee.model";
import { Router } from "@angular/router";

@Component({
  selector: "app-dashboard",
  imports: [],
  templateUrl: "./dashboard.component.html",
  styleUrl: "./dashboard.component.css",
})
export class DashboardComponent implements OnInit {
  constructor(
    private employeeService: EmployeeService,
    private router: Router
  ) {}

  allEmployee!: Employee[];

  ngOnInit(): void {
    this.allEmployee = this.employeeService.getEmployees();
  }

  get activeEmployeesCount(): number {
    return this.allEmployee.filter((emp) => emp.isActive).length;
  }

  get inActiveEmployeesCount(): number {
    return this.allEmployee.filter((emp) => !emp.isActive).length;
  }

  get averageSalary(): number {
    if (this.allEmployee.length === 0) return 0;

    const totalSalary = this.allEmployee.reduce(
      (sum, emp) => sum + emp.salary,
      0
    );

    return totalSalary / this.allEmployee.length;
  }
}
