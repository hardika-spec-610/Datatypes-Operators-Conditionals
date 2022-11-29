// Additional assignments for Day 3

/*EX 1
 Use a ternary operator to assign to a variable called gender the string values "male" or "female".
 The choice should be made based on the value of another variable called isMale.
*/

console.log("EXERCISE 1 \n")
let gender = true
let isMale = gender ? "Male" : "Female";
console.log(isMale);

/*EX 2
 Write a piece of code for checking if, given two integers, the value of one of them is 8 or if their addition or subtraction is equal to 8.
*/
console.log("EXERCISE 2 \n")

let inte1 = 8;
let inte2 = 3;
let addInte = inte1 + inte2;
let subInte = inte1 - inte2;

if (inte1 === 8 || inte2 === 8 || addInte || subInte) {
    console.log("is true");
}
else {
    console.log("not true");
}


/*EX 3
 Create a variable and assign to it the concatenation of two strings.
*/

console.log("EXERCISE 3 \n")
let firstName = "Hardika";
let Lastname = "Moradiya";
let fullName = firstName + " " + Lastname;
console.log(fullName);

/*EX 4
 Create three variables and assign a numerical value to each one of them. 
 Using a conditional statement, write a piece of code for sorting their values from highest to lowest.
 Display the result in the console.
*/

console.log("EXERCISE 4 \n")



/*EX 5
 Write a piece of code for finding the average of two given integers.
*/
console.log("EXERCISE 5 \n")
let num1 = 6;
let num2 = 8;
let average = (num1 + num2) / 2;
console.log(average)

/*EX 6
 Write a piece of code for finding the longest of two given strings.
*/

console.log("EXERCISE 6 \n")

let text1 = "Hello World!";
let lengthOfText1 = text1.length;
console.log(lengthOfText1);
let text2 = "The world is Beautiful";
let lengthOfText2 = text2.length;
console.log(lengthOfText2);
let longestString = (lengthOfText1 > lengthOfText2) ? "First string long" : "Second string long";
console.log(longestString)

/*EX 7
 Write a piece of code for checking if a given value is a integer or not.
*/
console.log("EXERCISE 7 \n")


/*EX 8
 Write a piece of code for calculating a certain percentage of a given number.
 (Ex.: the 20% of 400 is 80)
*/

console.log("EXERCISE 8 \n")
let num3 = 40;
let percentage = (num3 * 20) / 100;
console.log(percentage);

/*EX 9
 Write a piece of code for checking if a given number is even or odd.
*/

console.log("EXERCISE 9 \n")
let oneNum = 6;
if (oneNum % 2 === 0) {
    console.log("number is even")
}
else {
    console.log("number is odd")
}


