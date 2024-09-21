// Functional programming is the process of building software by composing pure functions, 
//avoiding shared state, mutable data, and side-effects.
//Functional programming is declarative 
// Imperative code --> tells how it needs to be done, example: OOPS
// Declarative code --> focus on only what needs to be done

const passwords = [
    "123456",
    "password",
    "admin",
    "helloworld",
    "mypassword123",
  ];
//imperative code
let longPass = [];
for(let i=0;i<passwords.length;i++){
    if(passwords[i].length>=9){
        longPass.push(passwords[i]);
    }
}
console.log("Passwords having length greater than 9 (imperative code) :",longPass);

//declarative code
const longPasswords = passwords.filter((password)=>password.length>=9);
console.log("Long Passwords using declarative code :", longPasswords);

console.log("==================================================");

// When doing Functional Programming, functions are first-class objects. This means we can use
// functions as if they were variables or constants.
// we can combine functions with other functions and generate new functions in the process 
// ( and higher-order functions) 

const byTwo = function (value) {
    return value / 2;
  };
  
const ans = byTwo(8);
console.log(ans);

console.log("==================================================");
//Pure Function -> A pure function is a function which:
// If given the same inputs, always returns the same output (immutability)
// Has no side-effects. In practical scenarios, think of pure functions as functions which
// return a predictable and deterministic value.

//Pure Function
function addTwo1(a, b) {
    return a + b;
  }
console.log("pure function => ", addTwo1(2,5));
//Impure Function
function addTwo2(a, b) {
    console.log(a, b);
  }
addTwo2(5,2);

console.log("==================================================");

// In FP we avoid declaring any global variables.
// Instead pass the variables around from within a function to another function.

//Global Variables
let x = 15;
let y = 10;

const add = () => {
  //Impure function using global variables
  return x + y;
};
console.log("Impure function return :",add());
const addFP = (x, y) => {
  //Pure function only using what's passed to it
  return x + y;
};
console.log("Pure function return :",addFP(5,8));
    