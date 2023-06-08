// 1. Write a program that take two numbers & add them in a new variable. Show the result in your browser.
var num1 = parseFloat(prompt("Enter the first number:"));
var num2 = parseFloat(prompt("Enter the second number:"));
var sum = num1 + num2;
document.write("The sum of "+ num1 + "and" + num2 + "is:"+sum);



// 2. Repeat task1 for subtraction, multiplication, division & modulus.
// var num1 = 9;
// var num2 = 2;
// var subtraction = num1 - num2;
// var multiplication = num1 * num2;
// var division = num1 / num2;
// var modulus = num1 % num2;
// document.write("Number 1: " + num1 + "<br>");
// document.write("Number 2: " + num2 + "<br>");
// document.write("Subtraction: " + subtraction + "<br>");
// document.write("Multiplication: " + multiplication + "<br>");
// document.write("Division: " + division + "<br>");
// document.write("Modulus: " + modulus + "<br>");


// 4. Cost of one movie ticket is 600 PKR. Write a script to store ticket price in a variable & calculate the cost of buying 5 tickets to a movie. Example output:
// var ticketprice = 600;
// var numberoftickets = 5;
// var totalcost = ticketprice * numberoftickets;
// console.log("cost ot buying " + numberoftickets + "tickets:" + totalcost + "PKR");
// document.write("Total cost to buy 5 tickets to a movie is 3000PKR");


// 5. Write a script to display multiplication table of any number in your browser. E.g
// var number = prompt("Enter the number:");
// var table = "";
// for (var i = 1; i <= 10; i++) {
//     var product = number * i;
//     table += "<br>" + number + " x " + i + " = " + product;
// }
// document.write(table);


// 6. The Temperature Converter: It’s hot out! Let’s make a converter based on the steps here. a. Store a Celsius temperature into a variable. b. Convert it to Fahrenheit & output “NNoC is NNoF”. c. Now store a Fahrenheit temperature into a variable. d. Convert it to Celsius & output “NNoF is NNoC”. Conversion Formulae:
// step a:
// let celsius = 25;
// //step b:
// let fahrenheit = (celsius * 9/5) + 32;
// // Output the result
// console.log(`${celsius}°C is ${fahrenheit}°F`);
// //step c:
// let fahrenheit2 = 77;
// //step d:
// let celsius2 = (fahrenheit2 - 32) * 5/9;
// // Output the result
// console.log(`${fahrenheit2}°F is ${celsius2}°C`);



// 7. Write a program to implement checkout process of a shopping cart system for an e-commerce website. Store the following in variables
// a. Price of item 1 b. Price of item 2 c. Ordered quantity of item 1 d. Ordered Quantity of item 2 e. Shipping charges
// Compute the total cost & show the receipt in your browser.
// let item1Price = 10;
// let item2Price = 20;
// let item1Quantity = 2;
// let item2Quantity = 3;
// let shippingCharges = 5;
// document.write("<h1>Shopping Cart Receipt</h1>");
// document.write("<p>Price of item 1: " + item1Price + "</p>");
// document.write("<p>Price of item 2: " + item2Price + "</p>");
// document.write("<p>Ordered quantity of item 1: " + item1Quantity + "</p>");
// document.write("<p>Ordered quantity of item 2: " + item2Quantity + "</p>");
// document.write("<p>Shipping charges: " + shippingCharges + "</p>");
// document.write("<br>");
// document.write("<h3>Total cost of your order is: " + totalCost + "</h3>");


// 8. Store total marks & marks obtained by a student in 2 variables. Compute the percentage & show the result in your browser
// let totalMarks = 500;
// let marksObtained = 375;
// let percentage = (marksObtained / totalMarks) * 100;
// document.write("<h1>Marks Percentage Calculator</h1>");
// document.write("<p>Total marks: " + totalMarks + "</p>");
// document.write("<p>Marks obtained: " + marksObtained + "</p>");
// document.write("<br>");
// document.write("<h3>Your percentage is: " + percentage + "%</h3>");


// 9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a script to convert the total currency to Pakistani Rupees. Perform all calculations in a single expression. (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee and 1 Saudi Riyal = 28 Pakistani Rupee)
// let usd = 10;
// let sar = 25;

// let pkr = (usd * 104.80 ) + (sar*28);
// document.write("<h1>Currency in Pkr<h1/>");
// document.write("<p>Total amount in USdollar:" + usd +"<p/>");
// document.write("<p>Total amount in Saudi Riyal:" + sar +"<p/>");
// document.write("<br>");
// document.write("<h3>Total amount in PakistaniRupes:" + pkr + "PKR</h3>" );


// 10. Write a program to initialize a variable with some number and do arithmetic in following sequence: a. Add 5 b. Multiply by 10 c. Divide the result by 2 Perform all calculations in a single expression
// let number = 10;
// let result = ((number + 5 ) * 10) / 2;
// document.write("<p>initial number:" + number + "<p/>");
// document.write("<p>result:" + result + "<p/>");


// 11. The Age Calculator: Forgot how old someone is?
// Calculate it! a. Store the current year in a variable. b. Store their birth year in a variable. c. Calculate their 2 possible ages based on the stored values. Output them to the screen like so: “They are either NN or NN years old”.
// let currentYear = new Date().getFullYear();
// let birthYear = 2005;

// let age1 = currentYear - birthYear;
// let age2 = age1 - 1;

// document.write("<h1>Age Calculator</h1>");
// document.write("<p>current Year:" + currentYear +"</p>");
// document.write("<p>Birth Year:" +birthYear +"</p>" );
// document.write("<p>Your Age is " + age1 + " or" + age2 + "</p>");



// 12. The Geometrizer: Calculate properties of a circle.
// a. Store a radius into a variable. b. Calculate the circumference based on the radius, and output “The circumference is NN”.
// (Hint : Circumference of a circle = 2 π r , π = 3.142) Calculate the area based on the radius, and output “The area is NN”. (Hint : Area of a circle = π r2, π = 3.142)document.write("<h1>The Geometrizer</h1>");
// let radius = 5;
// let circumference = 2 * 3.142 * radius;
// let area = 3.142* radius;

// document.write("<p>Radius of the circle:" + radius + "</p>");
// document.write("<p>The circumference is" + circumference +"units.</p>");
// document.write("<p>The area is" + area + "units.</p>");



// 13. The Lifetime Supply Calculator: Ever wonder how much a “lifetime supply” of your favorite snack is? Wonder no more.
// a. Store your favorite snack into a variable
// b. Store your current age into a variable.
// c. Store a maximum age into a variable.
// d. Store an estimated amount per day (as a number).
// e. Calculate how many would you eat total for the rest of
// your life. Output the result to the screen like so: “You will need NNNN to last you until the ripe old age of NN”.
// let favoriteSnack = "chocolate cupcake";
// let currentAge = 17;
// let maximumAge = 30;
// let estimatedAmountPerDay = 3;

// let yearRemaining = maximumAge - currentAge;
// let daysremaining = yearRemaining * 365;
// let totalAmountNeed = daysremaining * estimatedAmountPerDay;

// document.write("<h1>The Lifetime Supply Calculator</h1>");
// document.write("<p> Favorite snack :" + favoriteSnack + "</p>");
// document.write("<p> Current age :" + currentAge + "</p>");
// document.write("<p> Amount of snack per day:" + estimatedAmountPerDay +"</p>");
// document.write("<p>You will need " + totalAmountNeed +""+favoriteSnack + "to last you until the ripe old age of  " + maximumAge + "</p>");



// END