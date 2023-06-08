// 1. Write a program that takes a positive integer from user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number
// var number = prompt ("Enter a positive integer:");
// document.write("number:" + number + "<br>");
// document.write("round off value of the number:" + Math.round(number) + "<br>");
// document.write("floor value of the number:" + Math.floor(number) + "<br>");
// document.write("ceil value of the number:" + Math.ceil(number) + "<br>");



// 2. Write a program that takes a negative floating point number from user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the 
// var number = prompt ("Enter a negative floating point number :");
// document.write("number:" + number + "<br>");
// document.write("round off value of the number:" + Math.round(number) + "<br>");
// document.write("floor value of the number:" + Math.floor(number) + "<br>");
// document.write("ceil value of the number:" + Math.ceil(number) + "<br>");


// 3. Write a program that displays the absolute value of a number.
// E.g. absolute value of -4 is 4 & absolute value of 5 is 5
// var number = prompt("Enter any number:");
// document.write("The absolute value of the number is:"+ Math.abs(number) +"<br>");


// 4. Write a program that simulates a dice using random() method of JS Math class. Display the value of dice in your browser.:
// var  diceRoll = Math.floor(Math.random()*6) + 1;
// document.write("random dice value:" + diceRoll + "<br>");


// 5. Write a program that simulates a coin toss using random() method of JS Math class. Display the value of coin in your browser
var coinToss = Math.floor(Math.random()*2) - 1;
if (coinToss === 1){
    document.write("random coin value: Heads");
} else{
    document.write("random coin value: Tails");
}


// 6. Write a program that shows a random number between 1 and 100 in your browser.
// var randomnumber = Math.floor(Math.random()*100) + 1;
// document.write("random number between 1 and 100:" + randomnumber + "<br>");



// 7. Write a program that asks the user about his weight. Parse the user input and display his weight in your browser. Possible user inputs can be:
// a. 50
// b. 50kgs
// c. 50.2kgs
// d. 50.2kilograms
// var weight = prompt("Enter your weight in kilograms:");
// var weightInkg = parseFloat(weight);
// document.write("The weight of user is " + weight + "kgs.");


// 8. Write a program that stores a random secret number from 1 to 10 in a variable. Ask the user to input a numberbetween 1 and 10. If the user input equals the secretnumber, congratulate the user.
// var secretnumber = Math.floor(Math.random()* 10) + 1;
// var userinput = prompt ("Enter a number between 1 and 10:");
// if (userinput === secretnumber){
//     document.write("Congratulations! you guessed the secret number.");
// } else {
//     document.write("Sorry, the secret number is " + secretnumber);
// }





// END 
