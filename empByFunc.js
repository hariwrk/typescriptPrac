var Emp = /** @class */ (function () {
    function Emp(empid, empName, isMarried, age, salary, department) {
        this.empid = empid;
        this.empName = empName;
        this.isMarried = isMarried;
        this.age = age;
        this.salary = salary;
        this.department = department;
    }
    return Emp;
}());
var Emps = [
    new Emp("E001", "abc", false, 30, 50000, "HR"),
    new Emp("E002", "Bcd", false, 25, 70000, "Engineering"),
    new Emp("E003", "Ccd", true, 28, 55000, "HR"),
    new Emp("E004", "Ddc", true, 35, 80000, "Engineering"),
    new Emp("E005", "Ecd", false, 22, 60000, "Sales dept"),
];
function getEmpsByDepartment(department) {
    var val = Emps.filter(function (emp) { return emp.department.toLowerCase() === department.toLowerCase(); });
    return val;
}
var hrEmps = getEmpsByDepartment("HR");
hrEmps.forEach(function (emp) { return console.log("".concat(emp.empName, " Salary: ").concat(emp.salary)); });
