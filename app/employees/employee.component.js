"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var employee_service_1 = require('./employee.service');
var EmployeeComponent = (function () {
    function EmployeeComponent(employeeService) {
        this.title = "Employees";
        this.employees = employeeService.getAll();
    }
    EmployeeComponent = __decorate([
        core_1.Component({
            selector: 'employees',
            template: "<div class=\"div\"><h1>{{title}}</h1>\n   <ul>\n    <li *ngFor=\"let employee of employees\">\n      {{employee.FullName}} | {{employee.Position}} \n    </li>\n   </ul>\n   </div>",
            styles: ["\n    h1{\n      background-color:black; \n      padding:10px;\n    }\n   "],
            providers: [employee_service_1.EmployeeService]
        }), 
        __metadata('design:paramtypes', [employee_service_1.EmployeeService])
    ], EmployeeComponent);
    return EmployeeComponent;
}());
exports.EmployeeComponent = EmployeeComponent;
//# sourceMappingURL=employee.component.js.map