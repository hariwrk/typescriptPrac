class Emp {
    empid: string;
    empName: string;
    isMarried: boolean;
    age: number;
    salary: number;
    department: string;

    constructor(empid: string, empName: string, isMarried: boolean, age: number, salary: number, department: string) {
        this.empid = empid;
        this.empName = empName;
        this.isMarried = isMarried;
        this.age = age;
        this.salary = salary;
        this.department = department;
    }

}


const Emps: Emp[] = [
    new Emp("E001", "abc", false, 30, 50000, "HR"),
    new Emp("E002", "Bcd", false, 25, 70000, "Engineering"),
    new Emp("E003", "Ccd", true, 28, 55000, "HR"),
    new Emp("E004", "Ddc", true, 35, 80000, "Engineering"),
    new Emp("E005", "Ecd", false, 22, 60000, "Sales dept"),
];


function getEmpsByDepartment(department: string): Emp[] {
    const val = Emps.filter(emp => emp.department.toLowerCase() === department.toLowerCase());
    return val;
}


const hrEmps = getEmpsByDepartment("HR");
hrEmps.forEach(emp => console.log(`${emp.empName} Salary: ${emp.salary}`));