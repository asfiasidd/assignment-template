//  1. Consider you have following code snippet: 
 const mainContent = document.getElementById("main-content");
 const childElements = mainContent.children;
 for (let i = 0; i < childElements.length; i++) {
   console.log(childElements[i]);
 }
 
 const renderElements = document.getElementsByClassName("render");
 for (let i = 0; i < renderElements.length; i++) {
   console.log(renderElements[i].innerHTML);
 }
 
 const firstName = document.getElementById("first-name");
 firstName.value = "Alex";
 
 const lastName = document.getElementById("last-name");
 lastName.value = "Bank";
 
 const email = document.getElementById("email");
 email.value = "alexbank@example.com";



// END 






