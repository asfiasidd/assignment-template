// 1. Create a signup form and display form data in your web page on submission.
function displayFormData(event) {
  event.preventDefault();
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var formData = "Name: " + name + "<br>Email: " + email + "<br>Password: " + password;
  document.getElementById("form-data").innerHTML = formData;
}


// 2. Suppose in your webpage there is content area in which you have entered your item details, but user can only see some details on first look. When user clicks on “Read more” button, full detail of that particular item will be displayed.
// function showMore() {
//   document.getElementById("more-details").style.display = "block";
// }

// 3. In previous assignment you have created a tabular data
// using javascript. Let’s modify that. Create a form which
// takes student’s details and show each student detail in
// table. Each row of table must contain a delete button and
// an edit button. On click on delete button entire row should
// be deleted. On click on edit button, a hidden form will
// appear with the values of that row
// var students = [];

// function addstudent(event) {
//   event.preventDefault();
//   var name = document.getElementById("name").value;
//   var rollno = document.getElementById("rollno").value;
//   var email = document.getElementById("email").value;
//   students.push({
//     name: name,
//     rollno: rollno,
//     email: email
//   });
//   displayStudents();
//   document.getElementById("name").value = "";
//   document.getElementById("rollno").value = "";
//   document.getElementById("email").value = "";
// }


// END







