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
for (let i = 0; i < passwords.length; i++) {
    if (passwords[i].length >= 9) {
        longPass.push(passwords[i]);
    }
}
console.log("Passwords having length greater than 9 (imperative code) :", longPass);

//declarative code
const longPasswords = passwords.filter((password) => password.length >= 9);
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
console.log("pure function => ", addTwo1(2, 5));
//Impure Function
function addTwo2(a, b) {
    console.log(a, b);
}
addTwo2(5, 2);

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
console.log("Impure function return :", add());
const addFP = (x, y) => {
    //Pure function only using what's passed to it
    return x + y;
};
console.log("Pure function return :", addFP(5, 8));

console.log("==================================================");
//copying of array
const arr = [1, 2, 3, 4, 5];
const copyArr = [...arr];
copyArr[2] = 9;
console.log("original array is :", arr);
console.log("copied array is :", copyArr);

//similarly we can copy objects using spread operator
const obj = { name: "Prachi", age: 22, address: "UP" };
const copyObj = { ...obj, country: "India" };
copyObj.address = "Delhi";
console.log("original obj is :", obj);
console.log("copied obj is :", copyObj);

//copy nested objects
const nestedObj = {
    name: "Prachi",
    address: {
        city: "Delhi",
        country: "India",
    },
};
const copiedNestedObj = { ...nestedObj };
//see the console logs, it will modify the city for both orginal as well copied object
//this is because the soread operator does not works on nested objects it only copies from 
// a single parent level, for the nested it address to the memory location instead of copying.
copiedNestedObj.address.city = "DBD";
copiedNestedObj.name = "Anna";

console.log(nestedObj);
console.log(copiedNestedObj);

// for nested objects we can use 
const nestedObjCopy = {
    ...nestedObj,
    address: {
        ...nestedObj.address,
        city: "Mzn",
    },
};
console.log("orignal nested object =>", nestedObj)
console.log("nested object copy =>", nestedObjCopy)

console.log("==================================================");

//Pure Todo List
let todoDB = [];

function addTodo(arr, item, priority) {
    if (priority === "high") {
        return [item, ...arr];
    } else {
        return [...arr, item];
    }
}

// // this is not pure function
// function clearTodo(arr,index){
//     arr[index] = null;
//     return arr;
// }

function clearTodo(arr, index) {
    // return arr.map((item, idx) => idx === index ? null : item);
    //instead of map we can use this way as well
    const tempArr = [...arr];
    tempArr[index] = null;
    return tempArr;
}

// //impure
// function updateTodo(arr,index,newItem){
//     arr[index] = newItem;
//     return arr;
// }
function updateTodo(arr, index, newItem) {
    return arr.map((item, idx) => idx === index ? newItem : item);
}
function getTodo(arr, index) {
    if (index >= 0) {
        return arr[index];
    } else {
        return arr;
    }
}

todoDB = addTodo(todoDB, 'Buy groceries', 'low');
todoDB = addTodo(todoDB, 'Pay bills', 'high');
console.log(todoDB);
todoDB = clearTodo(todoDB, 1);
console.log(todoDB);
todoDB = updateTodo(todoDB, 1, 'Clean the house');
console.log(todoDB);
console.log(getTodo(todoDB, 0));
console.log(getTodo(todoDB));

console.log("==================================================");
//Higher order fucntions -->
// A function that accepts and/or returns another function is called a higher-order function.
// In JS, functions are first-class citizens because You can pass them around, store them in 
// variables and arrays, use them as inputs for calculations. You can use them like any piece of 
// data.The greatest benefit of HOFs is greater reusability.

const addNums = (x, y) => {
    return x + y;
};

//higher order fucntion
const calculate = (add, x, y) => {
    const val = add(x, y);
    return val;
}
console.log(calculate(addNums, 5, 6));