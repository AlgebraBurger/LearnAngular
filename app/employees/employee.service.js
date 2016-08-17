"use strict";
var EmployeeService = (function () {
    function EmployeeService() {
    }
    EmployeeService.prototype.getAll = function () {
        return [
            { id: 1, FullName: "Julius Bacosa", Position: "FullStack .Net" },
            { id: 2, FullName: "Elvira bacosa", Position: "CEO" },
            { id: 2, FullName: "Roberto bacosa", Position: "President" }
        ];
    };
    return EmployeeService;
}());
exports.EmployeeService = EmployeeService;
//# sourceMappingURL=employee.service.js.map