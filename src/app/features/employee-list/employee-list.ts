// src/app/features/employee-list/employee-list.ts

import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterLink } from "@angular/router";
import { Employee } from "../../core/models/employee.model";
import { EmployeeService } from "../../core/services/employee.service";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-employee-list",
  imports: [CommonModule, RouterLink, FormsModule], // 👈 standalone — imports what it needs directly
  templateUrl: "./employee-list.html",
  styleUrl: "./employee-list.css",
})
export class EmployeeList implements OnInit {
  employees: Employee[] = [];
  searchText = "";
  selectedStatus = "";

  filteredEmployees: Employee[] = [];

  // Inject the service via constructor
  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.employees = this.employeeService.getEmployees();
    this.filteredEmployees = [...this.employees];
  }

  filterEmployees(): void {
    this.filteredEmployees = this.employees.filter((emp: any) => {
      const search = this.searchText.toLowerCase();

      const matchesSearch =
        emp.name?.toLowerCase().includes(search) ||
        emp.department?.toLowerCase().includes(search) ||
        emp.designation?.toLowerCase().includes(search);

      const matchesStatus =
        this.selectedStatus === "" ||
        (this.selectedStatus === "active" && emp.isActive) ||
        (this.selectedStatus === "inactive" && !emp.isActive);

      return matchesSearch && matchesStatus;
    });
  }

  onDelete(id: number): void {
    const confirmDelete = confirm(
      "Are you sure you want to delete this employee?"
    );
    if (confirmDelete) {
      this.employeeService.deleteEmployee(id);
      this.employees = this.employeeService.getEmployees();
      this.filterEmployees();
    }
  }
}
