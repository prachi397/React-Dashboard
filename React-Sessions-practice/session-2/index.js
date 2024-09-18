//data of employees
const employeeData = {
    John: 100,
    Pete: 300,
    Mary: 250,
};

// class util  
class Util {
    //constructor function
    constructor(employeeData) {
        this.data = employeeData;
    }

    //function to calculate sum of all the salaries
    sumSalaries() {
        const salary = Object.values(this.data);
        let totatSalary = salary.reduce((a, b) => a + b, 0);
        return totatSalary;
    }

    //function to calculate average salary
    averageSalaries() {
        const totslSalary = this.sumSalaries();
        const numOfEmp = Object.keys(this.data).length;
        return Math.round(totslSalary / numOfEmp);
    }

    //function to calculate salary range
    findSalaryRange() {
        const salaryArr = Object.values(this.data);
        return Math.max(...salaryArr) - Math.min(...salaryArr);
    }
}

// create a object using Util class
let emp = new Util(employeeData);

console.log("Sum of salaries :", emp.sumSalaries());
console.log("Average salary : ", emp.averageSalaries());
console.log("Salary Range : ", emp.findSalaryRange());

console.log("========================================================");
//Inheritance ============================>
//Parent Class
class Student {
    constructor(name) {
        this.fullName = name;
    }
    markAttendance() {
        console.log(this.fullName, "is present");
    }
}
//Derived or Child class
class SportsCaptain extends Student {
    playFootball() {
        console.log(this.fullName, "is playing football");
    }
}
const st1 = new Student("Prachi Panwar");
st1.markAttendance();

const st2 = new SportsCaptain("Annie");
st2.markAttendance();  //parent class method
st2.playFootball();  //own method

console.log("========================================================");

//Inheritance Activity

//parent class
class Employee {
    constructor(name, department) {
        this.name = name;
        this.department = department;
    }
    markPresent() {
        console.log(this.name, "is Present");
    }
}

//child class
class Developer extends Employee {
    submitCode() {
        console.log("Code submitted by", this.name, "from", this.department);
    }
}
const emp1 = new Employee("Annie", "Finance");
emp1.markPresent();

const emp2 = new Developer("Parchi", "IT");
emp2.markPresent();
emp2.submitCode();

console.log("========================================================");
// method overriding
//Base or Parent class
class Student1 {
    constructor(name) {
        this.fullName = name;
    }
    markAttendance() {
        console.log(this.fullName, "is present");
        return this;
    }
}
//Derived or Child class
class SportsCaptain1 extends Student1 {
    //here child class overrides the method of parent class
    markAttendance() {
        console.log("Sports Captain " + this.fullName + " is present");
    }

    playFootball() {
        console.log(this.fullName, "is playing football");
    }
}
const stu1 = new Student1("Annie");
stu1.markAttendance();
const stu2 = new SportsCaptain1("Annie");
stu2.markAttendance();

//super keyword
class SportsCaptain2 extends Student1 {
    //here child class overrides the method of parent class
    markAttendance() {
        super.markAttendance();
        console.log("Sports Captain " + this.fullName + " is present");
    }

    playFootball() {
        console.log(this.fullName, "is playing football");
    }
}
const stu3 = new SportsCaptain2("Shubh");
stu3.markAttendance();

console.log("========================================================");
//consturctor Overriding

// If the child class does not have a constructor of its own, it uses the constructor of its 
// parent class. We can have a separate constructor for the child also, 
// BUT then we'll need to use the super keyword inside the child class's constructor 
// and pass all the values needed to initialize the parent class constructor.

class SportsCaptain3 extends Student1 {
    //own constructor of child class
    constructor(name, age) {
        super(name);
        this.age = age;
    }
    markAttendance() {
        super.markAttendance();
        console.log("Sports Captain " + this.fullName + " is present");
    }

    playFootball() {
        console.log(this.fullName, "is playing football");
    }
    getAge() {
        console.log(this.fullName, "is", this.age, "years old.");
    }
}
const stu4 = new SportsCaptain3("Shubh", 25);
stu4.markAttendance();
stu4.getAge();

console.log("========================================================");
//demo of child constructor

//parent class
class Employee2 {
    constructor(name, department) {
        this.name = name;
        this.department = department;
    }
    markPresent() {
        console.log(this.name, "is Present");
    }
    getRole() {
        console.log("Employee of Office");
    }
}
//child class
class Developer2 extends Employee2 {
    constructor(name, department, prefLanguage) {
        super(name, department);
        this.prefLanguage = prefLanguage;
    }
    submitCode() {
        console.log("Code submitted by", this.name, "from", this.department);
    }
    getRole() {
        console.log("Works with", this.prefLanguage);
    }
}

const em = new Employee2("Prachi", "IT");
em.getRole();
const dev = new Developer2("Annie", "Finance", "English");
dev.submitCode();
dev.getRole();

console.log("========================================================");
//Prototypal Inheritance =>
// Prototypal inheritance is fundamental in JavaScript because it provides a mechanism for 
// objects to inherit features from other objects. This form of inheritance is more flexible 
// and less restrictive than classical inheritance models, making it well-suited to the dynamic 
// and diverse nature of JavaScript environments. It simplifies the object creation process, 
// enhances code reusability, and improves memory efficiency.
// The simplest is using Object.create(proto), which creates a new object with proto 
// as its prototype.

let animal = {
    isAlive: true,
    eat: function () {
        console.log("Eating");
    }
};
let rabbit = Object.create(animal);
rabbit.hop = function () {
    console.log("Hopping");
};

rabbit.hop(); // Output: "Hopping"
rabbit.eat(); // Output: "Eating" (inherited from the animal prototype)