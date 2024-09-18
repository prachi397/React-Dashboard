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

console.log(emp.sumSalaries());
console.log(emp.averageSalaries());
console.log(emp.findSalaryRange());