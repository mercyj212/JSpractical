// VARIABLES
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

// DATA TYPES
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

// ARITHMETIC OPERATOR
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

// CONDITIONS
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

// TYPE CONVERION
// Type conversion is the process of changing a datatype of a value to another (strings, numbers, boolean).
// why might we want to type convert datatypes values?. in cases where we might want to accept user input and the datatype of that input is a string and we need to use it for any maths calculation we need it converted to a number. e.g lets say the user is 25

// let age = window.prompt("How old are you?");
// age += 1;
// console.log(age); //this gave 251 instead of 26 because it was seen as a string 

// let age = window.prompt("How old are you?");
// age = Number(age)
// age += 1;
// console.log(age); //this gave 26 because it was type converted using Number()

// TERNARY OPERATOR
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

// STRING METHOD
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

// FUNCTIONS
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

// CALLBACK
// A callback is a function passed by as an argument to another function which is called later after an action is done.

// E.g
// function onConnected() {
//     console.log("📞 call connected. Talking now....");  
// }

// function makeCall(callback) {
//     console.log("Dailing....");
    
//     setTimeout(() => {
//         callback(); 
//     }, 2000);
// }

// makeCall(onConnected);

// forEach()
// This method is used to loop through all items in an array one by one and do something with each item.
// syntax: away.forEach(function(item, index, array){
    // do something with item
// });
// E.g 
// let fruits = ["apple", "banana", "orange", "coconut"];
// fruits.forEach(upperCase);
// fruits.forEach(display);

// function upperCase(element, index, array){
//     array[index] = element.toUpperCase();
// }

// function display(element) {
//     console.log(element);
    
// }

// map()
// This is a method used on arrays. It lets you loop through each items, transform it and return a new array with the results. it doesnt change the original array.

// E.g
// const numbers = [1, 2, 3, 4, 5];
// const squares = numbers.map(square);

// function square(element) {
//     return Math.pow(element, 2)
// }

// console.log(squares);

// filter()
// The filter() method is used to loop through an array and keep only the items that meet a condition. it returns a new array with the items that passed the test.
// E.g
// let numbers = [1, 2, 3, 4, 5, 6, 7];
// let evenNums = numbers.filter(isEven);

// function isEven(element) {
//     return element % 2 === 0;
// }

// console.log(evenNums);

// reduce()
// The reduce() method takes all the items in array and reduces them down to one single value.
// E.g
// const prices = [5, 30, 10, 25, 15, 20];
// const total = prices.reduce(sum);

// function sum(accumulator, element) {
//     return accumulator + element;
// }

// console.log(`%${total.toFixed(2)}`);

// TASKS
// 1.You have an array of student names. Print a welcome message for each student (forEach()).
// 2.You have an array of numbers. Keep only the even numbers.(filter())
// 3.You have an array of product prices in dollars.Add a # symbol and return the prices in naira.(map())
// 4.You have an array of expenses, find the total amount spent.(reduce())

// Solution 1
// const students = ["Peace", "Grace", "Rachel", "Solomon", "Corey"];
//     // students.forEach(display);

// function student(element, index, array) {
//     console.log("Welcome", element);   
// }


// students.forEach(student);

// Solution 2
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function evenNum(element) {
//     return element % 2 === 0;
// }

// let evenNumbers = numbers.filter(evenNum);

// console.log(evenNumbers);

// Solution 3
// const prices = [100, 200, 300, 400, 500];

// function pricesInNaira(element) {
//     return `#${element * 1500}`;
// }

// const nairaPrices = prices.map(pricesInNaira);

// console.log(nairaPrices);

// // Solution 4
// const expenses = [1200, 3500, 2000, 1500];

// function sum(accumulator, element) {
//     return accumulator + element;
// }

// const totalAmount = expenses.reduce(sum);

// console.log(totalAmount);

// FUNCTION EXPRESSION
// This is a way to define a function and assign it to a variable. Unlike function declarations, function expressions are not hoisted, that is they are only usable after the line where they are defined.
// E.g 
// const numbers = [1,2,3,4,5,6];
//     const squares = numbers.map(function(element){
//         return Math.pow(element, 2);  
//     });
    
//     console.log(squares);
    
// ARROW FUNCTION
// Arrow functions are a shorter way to write function expressions. They use the => syntax and are often used for simple functions.
// E.g
// const numbers = [1, 2, 3, 4, 5];
// const squares = numbers.map((element) => Math.pow(element, 2));
// console.log(squares);

// OBJECT
// An object is a collection of key-value pairs. You can think of it like a real-life object that has properties and behaviors. In JavaScript, objects are used to store data and functions together. You use it to group related data and functions(called methods when inside an object).
// 