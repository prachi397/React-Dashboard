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