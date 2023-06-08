 // 1. Write a program that displays current date and time in your browser.
// var today = new Date();
// var date = today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();
// var time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
// document.write("current date" + date  + "current time" + time);


// 2. Write a program that alerts the current month in words. For example December.
// var month = ["January", "February", "march", "April", "May", "June", "July", "August","September", "October", "Novermber", " December"];
// var m = new Date().getMonth();
// var m1 = month[m];
// alert(m1);


// 3. Write a program that alerts the first 3 letters of the current day, for example if today is Sunday then alert will show Sun.
// var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturaday", "Sunday"];
// var day = new Date().getDay();
// var day1 = days[day];
// alert(day1);


// 4. Write a program that displays a message “It’s Fun day” if its Saturday or Sunday today
// var today = new Date();
// var day = today.getDay();
// if (day == 6 || day == 0){
//     alert("It's Fun Day");
// } else {
//     document.write("Sorry! It's not Fun Day.");
// }


// 5. Write a program that shows the message “First fifteen days of the month” if the date is less than 16th of the month else shows “Last days of the month”.
// var today = new Date();
// var day = today.getDate();
// if (day < 16){
//     document.write("First fifteen days of the month");
// } else {
//     document.write("Last days of the month");
// }


// 6. Write a program that determines the minutes since midnight, Jan. 1, 1970 and assigns it to a variable that hasn't been declared beforehand. Use any variable you like to represent the Date object.
var today = new Date();
var min = (today.getTime()- today.setHours(0,0,0,0)) / 60000;
var min1 = min.toFixed(0);
document.write("current date, Jan 1, 1970:" + min);


// 7. Write a program that tests whether it's before noon and alert “Its AM” else “its PM”.
// var today = new Date();
// var hours = today.getHours();
// if (hours < 12){
//     document.write("It's AM");
// } else {
//     document.write("It's PM");
// }


// 8. Write a program that creates a Date object for the last day of the last month of 2020 and assigns it to variable named laterDate.
// var laterDate = new Date(2020, 11, 31);
// document.write(laterDate);



// 9. Create a date object of the starting date of this Ramadan and alert the number of days past since 1st Ramadan? Note: 1st Ramadan was on June 18, 2015
// var Ramadanstart = new Date(2015, 5, 18);
// var today = new Date();
// var diff = (today.getTime() - Ramadanstart.getTime())
// var dayspassed = Math.floor(diff/ (1000 * 3600 * 24));
// alert( dayspassed + "Days have passed since 1st Ramadan 2015");


// 10. Write a program that displays in your browser the seconds that elapsed between the reference date and the beginning of 2015.
// var referenceDate = new Date("may 2, 2023 00:00:00");
// var beginning2015 = new Date("january 1, 2015 00:00:00");
// var diff = (referenceDate.getTime() - beginning2015.getTime());
// var seconds = Math.floor(diff / 1000);
// document.write("On the reference date:" + seconds + "second had passed since the beginning of 2015:")



// 11. Create a Date object for the current date and time. Extract the hours, reset the date object an hour ahead and finally display the date object in your browser.
// var today = new Date ();
// var hours = today.getHours();
// var hour = hours + 1;
// var hourDate = new Date(today.setHours(hour));
// document.write("date object an hour ahead:" + today);


// 12. Write a program that creates a date object and show the date in an alert box that is reset to 100 years back?
// var today = new Date();
//  today.setFullYear = today.getFullYear() - 100;
// alert(today);


// 13. Write a program to ask the user about his age. Calculate and show his birth year in your browser.
// var age = 21;
// var today = new Date();
// var birthYear = today.getFullYear() - age;
// document.write("Your age is:" + age + "<br>")
// document.write("Your birth year is:" + birthYear);


// 14. Write a program to generate your K-Electric bill in your browser. All the amounts should be rounded off to 2 decimal places. Display the following fields:
// a. Customer Name
// b. Current Month
// c. Number of units
// d. Charges per unit
// e. Net Amount Payable (within Due Date)
// f. Late Payment Surcharge
// g. Gross Amount Payable (after Due Date)
// Where, Net Amount Payable (within Due Date) = Number of units * Charges per unit & Gross Amount Payable (after Due Date) = Net Amount + Late Payment Surcharge
// var CustomerName = prompt("Enter your name");
// var CurrentMonth = prompt("Enter the current month");
// var NumberofUnits = prompt("Enter the number of units");
// var Chargesperunit = 16;
// var Netamount = NumberofUnits* Chargesperunit;
// var latepaymentsurchargen = 250;
// var Grossamount = Netamount + latepaymentsurchargen;

// document.write("<h1> K-Electric Bill </h1>");
// document.write("<p> Customer Name:" + CustomerName + "</p>");
// document.write("<p> Current Month:" + CurrentMonth + "</p>");
// document.write("<p> Number of Units:" + NumberofUnits + "</p>");
// document.write("<p> Charges per unit:" + Chargesperunit + "</p>");
// document.write("<p> Net Amount payable (within due date):" + Netamount.toFixed(2) + "</p>");
// document.write("Grossamount payable (after due date):" + Grossamount.toFixed(2));





// END