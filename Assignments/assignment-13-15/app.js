// 1. Declare an empty array using JS literal notation to store student names in future.
 studentNames =[];
 studentNames.push("Sana");
 studentNames.push("Ahmed");
console.log(studentNames[0]); 
console.log(studentNames[1]);

// 2. Declare an empty array using JS object notation to store student names in future.
// studentNames = [];
// studentNames.push("naveeza");
// studentNames.push("Ali");
// console.log(studentNames[0]);
// console.log(studentNames[1]);

// 3. Declare and initialize a strings array.
// var fruits =  Array("apple","cherry","monage");
// console.log(fruits[0]);
// // Output: "apple"
// console.log(fruits[1]);
// // Output: "cherry"
// console.log(fruits[2]);
// // Output: "monage"
// fruits[0] = "orange";
// console.log(fruits[0]);
// // Output: "orange"

// 4. Declare and initialize a numbers array.
// var numbers = [1,2,3,4,5];
// console.log(numbers[0]);
// // Output: 1
// console.log(numbers[1]);
// // Output: 2
// console.log(numbers[2]);
// // Output: 3
// numbers[0] = 6;
// console.log(numbers[0]);
// Output: 6

// 5. Declare and initialize a boolean array.
// var booleanArray = [True,False,True,False,True,False];
// console.log(booleanArray[0]);
// // Output:True
// console.log(booleanArray[1]);
// // Output:False
// console.log(booleanArray[2]);
// // Output:True
// console.log(booleanArray[3]);
// // Output:False
// booleanArray[0]=false;
// console.log(booleanArray[0]);
// // Output:False

// 6. Declare and initialize a mixed array.
// var mixedArray = ["apple",1,"orange",true,false];
// console.log(mixedArray[0]);
// // Output: "apple"
// console.log(mixedArray[1]);
// // Output: 1
// console.log(mixedArray[2]);
// // Output: "orange"
// console.log(mixedArray[3]);
// // Output: "true"
// console.log(mixedArray[4]);
// // Output: "false"

// mixedArray[0] = "Banana";
// console.log(mixedArray[0]);
// // Output: "Banana"

// 7. Declare and Initialize an array and store available education qualifications in Pakistan (e.g. SSC, HSC, BCS, BS, BCOM, MS, M. Phil., PhD). Show the listed qualifications in your browser like:
// var educationQualifications =["SSC","HSC","BSC","BS","BCOM","MS","M.Phil","PHD"];
// console.log(educationQualifications);
// document.write("<h1>Education Qualifications:</h1>");
// document.write("<ul>");
// for (let i = 0; i < educationQualifications.length; i++) {
//     document.write("<li>" + educationQualifications[i] + "</li>");
// }
// document.write("</ul>");

// 8. Write a program to store 3 student names in an array.Takeanother array to store score of these three students. Assume that total marks are 500 for each student, display the scores & percentages of students like:
// var studentNames = ["Hamza","Naveed","Sana"];
// var studentScores = [350,430,299];
// for(let i = 0; i <studentNames.length; i ++){
// document.write("<p>Name:" +studentNames[i] + "</p>");
// document.write("<p>Score:" +studentScores[i] + " out of 500 </p>");
// document.write("<p>Percentage:" +(studentScores[i] / 500*100) + "%</p>");
// document.write("<br>");
// }

// 10. Write a program to store student scores in an array & sort the array in ascending order using Array’s sort method.
// var studentScores = [66,87,55,46,76,28,70];
// document.write("<h1>Student Scores:</h1>");
// document.write("<p>Before sorting:" + studentScores + "</p>");
// studentScores.sort(function(a,b){
//     return a-b;
// });
// document.write("<p>After sorting:" + studentScores + "</p>");

// 11. Write a program to initialize an array with city names. Copy 3 array elements from cities array to selectedCities array.
// var cities = ["Karachi","Lahore","Peshawar","Quetta","Islamabad"];
// var selectedCities = cities.slice(1,4);
// console.log(selectedCities);
// document.write("<h1>Cities:</h1>");
// document.write("<p>" + cities + "</p>");
// document.write("<h1> Selected Cities: </h1>");
// document.write("<p>" + selectedCities + "</p>");

// 12. Write a program to create a single string from the below mentioned array: var arr = [“This ”, “ is ”, “ my ”, “ cat”]; (Use array’s join method)
// var array = ["This","is","my","cat"];
// var singleString = array.join(" ");
// document.write("<h1>Array:</h1>");
// document.write("<p>" +array+ "</p>");
// document.write("<h1>Single String:</h1>");
// document.write("<p>" + singleString + "</p>");

// 13. Create a new array. Store values one by one in such a way that you can access the values in the order in which they were stored. (FIFO-First In First Out)
// var queue = [];
// queue.push("Sana");
// queue.push("Fiza");
// queue.push("Ali");
// document.write("<h1> Queue:</h1>");
// document.write("<p>" + queue + "</p>");
// document.write("<h1>First item:</h1>");
// document.write("<p>" + queue.shift() + "</p>");

// END  















