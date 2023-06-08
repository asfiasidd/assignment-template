// 2. Declare and initialize a multidimensional array representing the following matrix:
// {{1, 2, 3}
//  {4, 5.6}
//   {7, 8}}
// var matrix = [];

// for (let i = 0; i < 3; i++) {
//   matrix[i] = [];
//   for (let j = 0; j < 3; j++) {
//     matrix[i][j] = i * 3 + j + 1;
//   }
// }
// [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ]
 
  
// 3. Write a program to print numeric counting from 1 to 10.
// for (let i = 1; i <= 10; i++){
//     console.log(i);
// }

// 4. Write a program to print multiplication table of any number using for loop. Table number & length should be taken as an input from user.
var tableNumber = prompt("Enter a number to show its multiplication table:");
var tableLength = prompt("Enter length of the table:");
for (let i = 1; i <= tableLength; i++) {
    console.log(`${tableNumber} x ${i} = ${
        tableNumber * i
    }`);
}


// 5. Write a program to print items of the following array using for loop: fruits = [“apple”, “banana”, “mango”, “orange”, “strawberry”]
// var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
// for (let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]);
// }


// 6. Generate the following series in your browser. See example output.
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k

// for (let i= 1; i <= 15; i++) {
//     console.log(i);
//   }
//   for (let i =10; i >= 1; i--) {
//     console.log(i);
//   }
//   for (let i = 0; i <= 20; i += 2) {
//     console.log(i);
//   }
//   for (let i= 1; i <= 19; i += 2) {
//     console.log(i);
//   }
//   for (let i= 1; i <= 10; i++) {
//     console.log(i * 2 + "k");
//   }
  
//   7. You have an array A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”] Write a program to enable “search by user input” in an array. After searching, prompt the user whether the given item is found in the list or not.
// var a = ["cake","apple pie", "cookie", "chips", "patties"];
// var userInput = prompt("Wellcome to yummy bakery. What do you want to oder");
// let isFound = false
// for (let i = 0; i< a.length; i++){
//     if(a[i] === userInput){
//         isFound = true;
//         break;
//     }
// }
// if(isFound){
//     alert(userInput + " is avalible in our bakery at index" + a.indexOf(userInput));
// } else {
//     alert(userInput + " is not avalible in our bakery");
// }


// 8. Write a program to identify the largest number in the given array.
// A = [24, 53, 78, 91, 12].
// var A = [24, 53, 78, 91, 12];
// let largestNumber = A[0];
// for (let i = 1; i < A.length; i++) {
//   if (A[i] > largestNumber) {
//     largestNumber = A[i];
//   }
// }
// console.log("Array items 24, 53, 78, 91, 12 ");
// console.log("The largest number is " + largestNumber);


// 10. Write a program to print multiples of 5 ranging 1 to 100.
// for(let i = 1; i<= 20; i++){
//     console.log(i*5);
// }

// END 








