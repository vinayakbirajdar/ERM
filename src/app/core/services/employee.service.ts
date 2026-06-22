// src/app/core/services/employee-service.ts

import { Injectable } from "@angular/core";
import { Employee } from "../models/employee.model";

@Injectable({
  providedIn: "root", // 👈 singleton, available app-wide
})
export class EmployeeService {
  // ─── Dummy Data ───────────────────────────────
  private employees: Employee[] = [
    {
      id: 1,
      name: "Vinayak Sharma",
      email: "vinayak.sharma@company.com",
      department: "Engineering",
      designation: "Frontend Developer",
      salary: 650000,
      joiningDate: new Date("2023-03-15"),
      isActive: true,
    },
    {
      id: 2,
      name: "Priya Mehta",
      email: "priya.mehta@company.com",
      department: "HR",
      designation: "HR Manager",
      salary: 850000,
      joiningDate: new Date("2021-07-01"),
      isActive: true,
    },
    {
      id: 3,
      name: "Rahul Verma",
      email: "rahul.verma@company.com",
      department: "Sales",
      designation: "Sales Executive",
      salary: 450000,
      joiningDate: new Date("2022-11-20"),
      isActive: false,
    },
    {
      id: 4,
      name: "Ananya Iyer",
      email: "ananya.iyer@company.com",
      department: "Engineering",
      designation: "Backend Developer",
      salary: 720000,
      joiningDate: new Date("2020-01-10"),
      isActive: true,
    },
    {
      id: 5,
      name: "Karan Singh",
      email: "karan.singh@company.com",
      department: "Finance",
      designation: "Financial Analyst",
      salary: 580000,
      joiningDate: new Date("2024-02-05"),
      isActive: true,
    },
  ];

  // ─── CRUD Methods ─────────────────────────────

  // READ — Get all employees
  getEmployees(): Employee[] {
    return this.employees;
  }

  // READ — Get single employee by ID
  getEmployeeById(id: number): Employee | undefined {
    return this.employees.find((emp) => emp.id === id);
  }

  // CREATE — Add new employee
  addEmployee(employee: Employee): void {
    // Auto-generate next ID
    const newId =
      this.employees.length > 0
        ? Math.max(...this.employees.map((e) => e.id)) + 1
        : 1;

    employee.id = newId;
    this.employees.push(employee);
  }

  // UPDATE — Edit existing employee
  updateEmployee(updatedEmployee: Employee): void {
    const index = this.employees.findIndex(
      (emp) => emp.id === updatedEmployee.id
    );
    if (index !== -1) {
      this.employees[index] = updatedEmployee;
    }
  }

  // DELETE — Remove employee
  deleteEmployee(id: number): void {
    this.employees = this.employees.filter((emp) => emp.id !== id);
  }
}
