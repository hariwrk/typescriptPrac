var idset;
var Employee = /** @class */ (function () {
    function Employee(empid, empName, isMarried, age, desc) {
        if (idset.includes(empid)) {
            console.log("employee already exists");
        }
        else {
        }
        this.empName = empName;
        this.empid = empid;
        this.isMarried = isMarried;
        this.age = age;
        this.desc = desc;
        idset.push(empid);
    }
    Employee.prototype.display = function () {
        return "hi ".concat(this.empName);
    };
    return Employee;
}());
var emp1 = new Employee("ga001", "abc", false, 21, "good company");
var emp2 = new Employee("GA002", "bo", false, 30, "very good company");
var emp3 = new Employee("GA003", "charlie", true, 22, "very very good company");
var emp4 = new Employee("GA004", "daisy", true, 28, "bad company");
var emp5 = new Employee("GA005", "eve", false, 35, "average company");
console.log(emp1.display());
console.log(emp2.display());
console.log(emp3.display());
