// 1. Write a program that takes two user inputs for first and last name using prompt and merge them in a new variable titled fullName. Greet the user using his full name.
var firstName = prompt("What is your first name?");
var lastName = prompt("What is your last name");
var fullName = firstName + " " + lastName;
console.log(fullName);
alert("Hello, " + fullName + "!");


// 2. Write a program to take a user input about his favorite mobile phone model. Find and display the length of user input in your browser
// var favoriteModel = prompt("What is your favorite phone model?");
// var length = favoriteModel.length;
// document.write("The lenght of your favorte mobile phone model is" + length + ".");


// 3. Write a program to find the index of letter “n” in the word “Pakistani” and display the result in your browser .
// var word = "Pakistani"
// var index = word.indexOf("n");
// document.write("The index of letter n in the word " + word + " is " + index + ".");


// 4. Write a program to find the last index of letter “l” in the word “Hello World” and display the result in your browse
// var word = "Hello World";
// var index = word.lastIndexOf("l");
// document.write("The index of letter l in the word " + word + " is " + index + ".");


// 5. Write a program to find the character at 3rd index in the word “Pakistani” and display the result in your browser.
// var word = "Pakistani";
// var character = word.charAt(3);
// document.write("The character at 3rd index in the word " + word + " is " + character + ".");


// 6. Repeat Q1 using string concat() method
// var firstName = "Ali";
// var lastName = "Ahmed";
// var fullName = firstName + " " + lastName;
// document.write("My full name is " + fullName + ".");


// 7. Write a program to replace the “Hyder” to “Islam” in the word “Hyderabad” and display the result in your browser.
// var city = "Hyderabad ";
// var newCity = city.replace("hyder", "Islam");
// document.write("The new city is " + newCity + ".");

// 8. Write a program to replace all occurrences of “and” in the string with “&” and display the result in your browser. var message = “Ali and Sami are best friends. They play cricket and football together.”;
// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var newMessage = message.replace(/and/g, "&");
// document.write("The new message is " + newMessage + ".");


// 9. Write a program that converts a string “472” to a number 472. Display the values & types in your browser.
// var stringNumber = "472";
// var number = Number(stringNumber);
// document.write("Value:"+ stringNumber + "Type:" + typeof stringNumber +"<br>");
// document.write("Value:"+ number  +"Type:" + typeof number);


// 10. Write a program that takes user input. Convert and show the input in capital letters
// var userInput = prompt("Emter any input");
// var upperCase = userInput.toLocaleUpperCase();
// document.write("The input is " + userInput + "<br>");
// document.write("The input in capital letters is " + upperCase);


// 11. Write a program that takes user input. Convert and show the input in title case.
// var userInput = prompt("Enter some text:");
// var words = userInput.split(" ");
// var titleCaseWords = [];
// for (let i = 0; i < words.length; i++) {
//   var word = words[i];
//   var titleCaseWord = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
//   titleCaseWords.push(titleCaseWord);
// }
// var titleCase = titleCaseWords.join(" ");
// document.write("userInput: " + userInput + "<br>");
// document.write(" title case: " + titleCase);



// 12. Write a program that converts the variable num to string. var num = 35.36 ; Remove the dot to display “3536” display in your browser
// var num = 35.36;
// var numString = num.toString();
// var result = numString.replace(".","");
// document.write(" Number:" + num + "<br>");
// document.write("Result:" + result);


// 13. Write a program to take user input and store username in a variable. If the username contains any special symbol among [@ . , !], prompt the user to enter a valid username. For character codes of [@ .
// Note:
// ASCII code of ! is 33
// ASCII code of , is 44
// ASCII code of . is 46
// ASCII code of @ is 64
// var username = prompt("Enter your username:");
// if (username.match(/[@ . , !]/)){
//     alert("Please enter a valid username without any special symbols (@, ., !, ,,)");
// } else {
//     alert("You username is :" + username);
// }


// 14. You have an array
// A = [cake”, “apple pie”, “cookie”, “chips”, “patties”] Write a program to enable “search by user input” in an array. After searching, prompt the user whether the given item is found in the list or not.
// Note: Perform case insensitive search. Whether the user enters cookie, Cookie, COOKIE or coOkIE, program should inform about its availability. Example:



// 15. Write a program to take password as an input from
// user. The password must qualify these requirements:
// a. It should contain alphabets and numbers
// b. It should not start with a number
// c. It must at least 6 characters long
// If the password does not meet above requirements, prompt the user to enter a valid password. For character codes of a-z, A-Z & 0-9, refer to ASCII table at the end of this document.
// let password = prompt("Enter your password: ");
// if (password.length < 6 || /^d/.test(password) || ! /[a-zA-Z]/.test(password) || !/d/.test(password)) {
//   alert("Password can not begin with a number. Plesae enter a valid password.");
// } else {
//   alert("Password accepted!");
// }


// 16. Write a program to convert the following string to anarray using string split method. var university = “University of Karachi”; Display the elements of array in your browser.
// var university = "University of karachii";
// var array = university.split("");
// console.log(array);
// for ( var i = 0; i< array.length; i ++) {
//     document.write(array[i] + "<br>");
// }

// 17. Write a program to display the last character of a user input.
// var input = prompt("User input:");
// var lastCharacter = input.charAt(input.length-1);
// alert("The last character of your input is:" + lastCharacter);


// 18. You have a string “The quick brown fox jumps over the lazy dog”. Write a program to count number of occurrences of word “the” in given string.
// var string = "The quick brown fox jumps over the lazy dog";
// var count = string.match(/the/gi).length;
// console.log(count);
// alert("The quick brown fox jumps over the lazy dog There are 2 occurrence(s) of the 'the' appear" + count + " times in the string");




// END 






