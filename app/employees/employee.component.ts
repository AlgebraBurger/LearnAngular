import{ Component } from '@angular/core';
import{ EmployeeService } from './employee.service';
@Component({
   selector: 'employees',
   template: `<div class="div"><h1>{{title}}</h1>
   <ul>
    <li *ngFor="let employee of employees">
      {{employee.FullName}} | {{employee.Position}} 
    </li>
   </ul>
   </div>`,
   styles: [`
    h1{
      background-color:black; 
      padding:10px;
    }
   `],
   providers: [EmployeeService]
})
export class EmployeeComponent{
    title = "Employees";
    employees;
    constructor(employeeService:EmployeeService){
        this.employees = employeeService.getAll();
    }
}

