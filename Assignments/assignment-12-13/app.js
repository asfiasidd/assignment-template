// 1. Write a program that takes a character (number or string) in a variable & checks whether the given input is a number, uppercase letter or lower case letter. (Hint: ASCII codes:- A=65, Z=90, a=97, z=122).
var input = prompt("Enter any character (number or string):");
var code = input.charCodeAt(0);
if (code >= 33 && code <= 59){
    alert(`${input} is not a number.`);
} else
if (code >= 65 && code <= 90){
    alert(`${input} is uppercase letter.`);
} else
if (code >= 97 && code <= 122){
    alert(`${input} is lowercase letter.`);
} else{
    alert(`${input} is not a number.`);
}


// 2. Write a JavaScript program that accept two integers and display the larger. Also show if the two integers are equal. 3
// var num1 = parseInt(prompt("Enter the first number: "));
// var num2 = parseInt(prompt("Enter the second number: "));
// if (num1 > num2){
//   alert(`${num1} is larger than ${num2}.`);
// } else 
//  if (num2 > num1) {
//   alert(`${num2} is larger than ${num1}.`);
// } else {
//   alert(`${num1} and ${num2} are equal.`);
// }


// 3. Write a program that takes input a number from user & state whether the number is positive, negative or zero.
// var num = parseFloat(prompt("Enter a number:"));
// if (num > 0){
//     alert(`${num} is positive.`);
// }else
//  if (num < 0){
//     alert(`${num} is negative number.`);
//  }
//  alert(`${num} is zero`);


// 4. Write a program that takes a character (i.e. string of length 1) and returns true if it is a vowel, false otherwise
// var character = prompt("Enter a character:").toLocaleLowerCase();
// if(character === "a" || character === "e" || character === "i" || character === "o" || character === "u"){
//     alert(`${character} is a vowel.`);
// } else {
//     alert(`${character} is not a vowel.`);
// }


// 5. Write a program that
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:
// i. Check if user has entered password. If not, then
// give message “ Please enter your password”
// ii. Check if both passwords are same. If they are same, show message “Correct! The password you entered matches the original password”. Show “Incorrect password” otherwise.
// var correctPassword = "mypassword";
// var userPassword = prompt("Please enter your password:");
// if (userPassword === correctPassword){
//     alert("Correct! The password you entered matches the original password");
// }else {
//     alert("Incorrect password");
// }




// 6. This if/else statement does not work. Try to fix it:
// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// else
// greeting = "Good evening";
// }
// var greeting;
// var hour = 13;
// if (hour < 18){
//     alert("Good day");
// }else {
//     alert("Good evening");
// }


// 7. Write a program that takes time as input from user in 24 hours clock format like: 1900 = 7pm. Implement the following case using if, else & else if statements
// var time24 = prompt("Enter time in 24-hour clock format (e.g., 1900): ");
// let time12;
// if (time24 < 0 || time24 > 2359) {
//   alert("Invalid input. Please enter a number between 0 and 2359.");
// } else
//  if (time24 >= 0 && time24 <= 1159) {
//   time12 = time24 + "am";
// } else
//  if (time24 >= 1200 && time24 <= 1259) {
//   time12 = "12" + time24.slice(2) + "pm";
// } else
//  if (time24 >= 1300 && time24 <= 2359) {
//   time12 = (time24 - 1200) + "pm";
// }
// alert("The time in 12-hour clock format is: " + time12);



// END 




