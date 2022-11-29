/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
- The solution must be available for the tutors by the end of the day (5PM CET)
*/

/* EXERCISE 1
 Enumerate and describe the main datatypes in JavaScript. Try to explain the concepts as you were speaking to a 12 years old.
*/
console.log("EXERCISE 1 \n")
console.log("JavaScript variables can hold different data types: numbers, strings, Boolean, null, undefine, objects and Array \n")
console.log("1) This is a number. Numbers don't have quotes around them. \n Numbers can be written with or without decimals.")
let numberDatatype
console.log("numberDatatype = 16 \n");
console.log("2) This is a sequence of text known as a string. \n To signify that the value is a string, enclose it in single quote marks. \n JavaScript strings are for storing and manipulating text.")
let stringdatatype
console.log("stringdatatype = 'Hardika' \n");
console.log("3) A Boolean represents one of two values: true or false.");
let valueTrue;
let valueFalse;
console.log("valueTrue = true \n valueFalse = false \n");
console.log("4) Null means empty or non existent value \n")
let nullDatatype
console.log("nullDatatype = null \n")
console.log("5)  a variable without a value, has the value undefined \n Any variable can be emptied, by setting the value to undefined \n")
let undefinedDatatype
console.log("undefinedDatatype = undefined \n")


/* EXERCISE 2
 Try to describe what a variable is, in your own words.
*/

console.log("EXERSIZE 2 \n");
console.log("Variables are containers for storing data (storing data values).\n")

/* EXERCISE 3
 Write the code to execute an addition (a sum) of the numbers 12 and 20.
*/

console.log("EXERSIZE 3 \n");
let number1 = 12;
let number2 = 20;
let sum = number1 + number2;
console.log("sum of 12 and 20 numbers: ", sum, "\n");

/* EXERCISE 4
 Create a variable named x and assign to it the number 12.
*/

console.log("EXERSIZE 4 \n");
let x = 12;
console.log("x = 12 \n")

/* EXERCISE 5
 Create a variable called name and assign to it the string "John Doe".
*/

console.log("EXERSIZE 5 \n");
let name = "John Doe";
console.log("name = John Doe \n")

/* EXERCISE 6
 Execute a subtraction between the number 12 and the variable x you declared before (which is storing the value 12).
*/

console.log("EXERSIZE 6 \n");
let subtraction = number1 - x;
console.log("subtraction of 12 and 12: ", subtraction, "\n");

/* EXERCISE 7
 Create two variables: name1 and name2. Assign to name1 the string "john", and to name2 the string "John" (this one has a capital J!)
 Verify that name1 is different from name2 (HINT: check their equality to be false).
 Finally, verify that the equality between name1 and name2 becomes true if both are lowercase (without changing the value of name2).
*/

console.log("EXERSIZE 7 \n");
let name1 = "john";
let name2 = "John"
let valueIsSameOrNot = name1 === name2;
console.log("Return false hence both are diffrent value: ", valueIsSameOrNot, "\n");
console.log("convert value of name2 in lowercase: ", name2.toLowerCase(), "\n");
valueIsSameOrNot = name1 === (name2.toLowerCase());
console.log("Return true hence both are same value: ", valueIsSameOrNot, "\n");

/* EXERCISE 8
 Create a variable named x, and assign to it a numeric value less than 10.
 Write the code to print the literal value of x (ex.: if x is 1, it should print "one", if x is 5 it should print "five" etc.).
*/

console.log("EXERSIZE 8 \n");
x = 6;
if (x === 0) {
    console.log("zero \n")
}
else if (x === 1) {
    console.log("one \n")
}
else if (x === 2) {
    console.log("two \n")
}
else if (x === 3) {
    console.log("three \n")
}
else if (x === 4) {
    console.log("four \n")
}
else if (x === 5) {
    console.log("five \n")
}
else if (x === 6) {
    console.log("six \n")
}
else if (x === 7) {
    console.log("seven \n")
}
else if (x === 8) {
    console.log("eight \n")
}
else {
    console.log("nine \n")
}

/* EXERCISE 9
 [Extra] Assign a value to a variable using a ternary operator (this topic has not been covered during lesson yet,
 try to search it by yourself, tomorrow morning we'll discuss it together!)
*/

console.log("EXERSIZE 9 \n");

let age = 19;
let eligibleForExam = (age > 20) ? "'You are eligible'" : "'You are not eligible'";
console.log(eligibleForExam);
