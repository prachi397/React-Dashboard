//data of employees
const employeeData = {
    John: 100,
    Pete: 300,
    Mary: 250,
  };

// class util  
class Util{
    //constructor function
    constructor(employeeData){
        this.data = employeeData;
    }

    //function to calculate sum of all the salaries
    sumSalaries(){
        const salary = Object.values(this.data);
        let totatSalary = salary.reduce((a,b)=>a+b,0);
        return totatSalary;
    }

    //function to calculate average salary
    averageSalaries(){
        const totslSalary = this.sumSalaries();
        const numOfEmp = Object.keys(this.data).length;
        return Math.round(totslSalary/numOfEmp);
    }

    //function to calculate salary range
    findSalaryRange(){
        const salaryArr = Object.values(this.data);
        return Math.max(...salaryArr) - Math.min(...salaryArr);
    }
}

// create a object using Util class
let emp = new Util(employeeData);

console.log("Sum of salaries :",emp.sumSalaries());
console.log("Average salary : ",emp.averageSalaries());
console.log("Salary Range : ",emp.findSalaryRange());

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
class Employee{
    constructor(name,department){
        this.name = name;
        this.department = department;
    }
    markPresent(){
        console.log(this.name,"is Present");
    }
}

//child class
class Developer extends Employee{
    submitCode(){
        console.log("Code submitted by", this.name, "from", this.department);
    }
}
const emp1 = new Employee("Annie", "Finance");
emp1.markPresent();

const emp2 = new Developer("Parchi", "IT");
emp2.markPresent();
emp2.submitCode();