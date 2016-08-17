import{ Employee } from "./Employee";
export class EmployeeService{
    getAll() : Employee[] {

        

        return  [
            { id:1, FullName: "Julius Bacosa", Position: "FullStack .Net"},
            { id:2, FullName: "Elvira bacosa", Position: "CEO"},
            { id:2, FullName: "Roberto bacosa", Position: "President"}            
        ];
    }
}