//variables is like a container or storage that holds data
//there are 2 types of variables "let" and "const"
//let allows you to define a variable that can be reassigned a new value or the variable valus can be changed once initiated
//const cannot be reassigned a new value which means the variables cannot be changed once initiated

// let a = 20;
// a = 50;
// const b = 30;
// b = 15;

// console.log(a);
// console.log(b);

//Data types describe the kind of data or value a variable holds. i.e is it text,numbers,true/false statement, a list of things e.t.c
// 2 main types of data types 
// Primitive data type - a simple, single values e.g string,numbers,bolean,null,undefined,symbol e.t.c
// Non-primitive data types - its a collection or complex structure e.g object,array,functions

//  let name = "David";
//  let age = 25;
//  let isStudent = true;
//   let car = null;
//   let job;
//  let fruits = ["Apples", "Banana", "Orange"];
//  let person = {name: "John", age: "30", isStudent: false};
//  function greet () {
//    console.log("Hello!");
    
// }

//  console.log(name);
//  console.log(age);
//  console.log(isStudent);
//  console.log(car);
//  console.log(job);
//  console.log(fruits);
//  console.log(person);

// // how does javascript know the data types? by the value you assign
// // e.g
// console.log(typeof 25);
// console.log(typeof true);
// console.log(typeof fruits);

// Arithmetic Opertors are symbols that let you do basic math opertaions in javascript
// They are addition(+), subtraction(-), multiplication(*), division(/), modulus(remainder (%)), exponentiation(raise to power(**), increment(add 1 (++)), decrement(subtract 1 (--))

// let a = 10;
// let b = 3;

// console.log(a + b);
// console.log(a - b);
// console.log(a * b);
// console.log(a / b);
// console.log(a % b);
// console.log(a ** b);
// console.log(a++);
// console.log(a--);

// for modulus try
// let apples = 12;
// let people = 5;

// let applePerPerson = apples / people;
// let remainingApples = apples % people;

// console.log("Each person gets:", applePerPerson);
// console.log("Apples left:", remainingApples);

// if, else if, and else statement.....An if statement lets the code make decisions.
// i.e if this is true, do this.Otherwise, do something else
//  Basic structure
// if(condition) {
//     // codes rus if condition is true
// }else {
//     // codes runs if condition is false
// }

// let age = 18;

// if (age >= 18) {
//     console.log("You can vote.");
    
// }else {
//     console.log("You are too young to vote");
    
// }
// explaining upward example
// if age 18 or more, print "You can vote."
// if not (if less than 18), print "you are too young to vote."

// Adding more conditions
// let score = 85;

// if (score >= 90) {
//     console.log("Grade A"); 

// }else if (score >= 75) {
//     console.log("Grade B");
    
// }else if (score >= 60) {
//     console.log("Grade C");
    
// }else {
//     console.log("Fail");
    
// }
// // javascript prompt() is a function that pops up a dialog box asking the user to input something. The input is always stored as text (a string) but you can convert it to number if needed.

// let userName = prompt("What is your name?");
//  console.log("Hello " +  userName);
//  console.log(`Hello ${userName}`); //either of this two ways can be used to print out a statement

// How to accept user input in JS and there are 2 ways to achieve this eithrt bt the easy way or the professional way
//The easy way is to create a window prompt e.g
// let username;
// username = window.prompt("what is your username?");
// console.log(username);

// The professional way is to create an html textbox
// document.getElementById("mySubmit").onclick = function(){
//     username = document.getElementById("myText").value;
//     console.log(username);
//     document.getElementById("myH1").textContent = `Hello ${username}`     
// }

// Type conversion is the process of changing a datatype of a value to another (strings, numbers, boolean).
// why might we want to type convert datatypes values?. in cases where we might want to accept user input and the datatype of that input is a string and we need to use it for any maths calculation we need it converted to a number. e.g lets say the user is 25

// let age = window.prompt("How old are you?");
// age += 1;
// console.log(age); //this gave 251 instead of 26 because it was seen as a string 

// let age = window.prompt("How old are you?");
// age = Number(age)
// age += 1;
// console.log(age); //this gave 26 because it was type converted using Number()

// ternary operator is a shortcut to if and else statement which helps to assign a variable based on a condition e.g
// let age = 25;
// let message = age >= 18 ? "You are an adult": "You are a minor";
// console.log(message);
// try changing age to 12 and print to see the different result

// if this was written in IF statement it would have been written like this 
// let age = 25;
// let message;

// if(age >= 18){
//     message = "You are an adult"
//     console.log(message);   
// }
// else{
//     message = "You are a minor"
//     console.log(message);   
// }
// so ternary made it short to write the if and else statement

// String method is a built in method that allows you to manipulate and work with strings.
// common string method are 

// .length - returns the length of a string e.g 
// let text = "Sarah"
// console.log(text.length);

// .toUpperCase() - converts a string to uppercase e.g
// let name = "john";
// console.log(name.toUpperCase());

// .toLowerCase() - converts a string to lowercase e.g
// let name = "JoHn";
// console.log(name.toLowerCase());

// .includes() - checks if a string contains something e.g
// let text = "Javascript is fun";
// console.log(text.includes("fun"));

// .indexOf() - Finds the position of something in a string e.g
// .lastIndexOf()
//  let word = "banana";
// console.log(word.indexOf("n")); // output - 2
// console.log(word.lastIndexOf("n")); // output - 4


// .slice(start, end) - Cuts out part of a string e.g
// let fruit = "pineapple";
// console.log(fruit.slice(0, 4));

// .replace(old, new) - replaces part of the string e.g
// let quote = "I love rice";
// console.log(quote.replace("rice", "sphaghetti")); 

// .split() - Break a string into an array e.g
// let names = "Sarah, Joy, Grace";
// console.log(names.split(", "));

// .trim() - Removes white spaces from both ends e.g
// let messy = "     Hello!    ";
// console.log(messy.trim());

// let spoonful = 1;

// do {
//     console.log("Tasting spoonful", spoonful);
//     spoonful++;
// } while (spoonful <= 3);

// function greetUser() {
//     console.log("Hi Grace!");
    
// }

// greetUser();

// function greet(name) {
//     console.log("Hello," + name + "!");
    
// }
// greet("Grace");
// greet("Ella");

// function introduce() {
//     console.log("Hi, my name is Grace and i like coding");
    
// }

// introduce();
// introduce();

// function addNumbers(a, b) {
//     console.log(a + b);    
// }

// addNumbers(2, 4);
// addNumbers(6, 3);



