let idset: string[];


class Employee{
    private empid: string;
    private empName: string;
    private isMarried: boolean;
    private age: number;
    private desc: any;

    constructor(empid: string, empName: string, isMarried: boolean, age: number, desc: any){
        if(idset.includes(empid)) {
            console.log("employee already exists");
        }else{
            
        }
        this.empName = empName;
        this.empid = empid;
        this.isMarried = isMarried;
         this.age = age;
        this.desc = desc;
        idset.push(empid);
    }

    public display(): string {
        return `hi ${this.empName}`;
    }
}

const emp1 = new Employee("ga001","abc",false,21,"good company");
const emp2 = new Employee("GA002", "bo", false, 30, "very good company");
const emp3 = new Employee("GA003", "charlie", true, 22, "very very good company");
const emp4 = new Employee("GA004", "daisy", true, 28, "bad company");
const emp5 = new Employee("GA005", "eve", false, 35, "average company");


console.log(emp1.display());
console.log(emp2.display());
console.log(emp3.display());


