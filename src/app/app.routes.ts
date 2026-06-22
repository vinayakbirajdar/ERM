import { Routes } from "@angular/router";
import { EmployeeList } from "./features/employee-list/employee-list";
import { EmployeeDetailsComponent } from "./features/employee-details/employee-details.component";
import { EmoployeeEditComponent } from "./features/emoployee-edit/emoployee-edit.component";
import { EmoployeeAddComponent } from "./features/emoployee-add/emoployee-add.component";
import { DashboardComponent } from "./features/dashboard/dashboard.component";

export const routes: Routes = [
  { path: "", redirectTo: "dashboard", pathMatch: "full" },
  { path: "dashboard", component: DashboardComponent },
  { path: "employees", component: EmployeeList },
  { path: "deatils/:id", component: EmployeeDetailsComponent },
  { path: "edit/:id", component: EmoployeeEditComponent },
  { path: "employees/add", component: EmoployeeAddComponent },
];
