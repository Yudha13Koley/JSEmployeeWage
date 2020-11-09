class EmployeePayrollData {
    //Properties
    id;
    salary;

    //Constructor
    constructor(id,name,salary){
        this.id=id;
        this.name=name;
        this.salary=salary;
    }

    //Getters & Setters
    get name(){
        return this._name;
    }
    set name(name){
        this._name=name;
    }

    //Methods
    toString(){
        return "id : "+this.id+" Name : "+this.name+" Salary : "+this.salary;
    }
}

let empData=new EmployeePayrollData(1,"Yudhajit",50000);
console.log(empData.toString());
empData.name="Yudhajit Koley";
console.log(empData.toString());