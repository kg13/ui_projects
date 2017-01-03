"use strict";
function processForm() {
   event.preventDefault();
   var flag = false;
   var firstName, lastName, address;
   firstName = document.getElementById('fn').value;
   lastName  = document.getElementById('ln').value;
   address   = document.getElementById('add').value;
   //alert(FirstName);
   console.log("firstName->" + firstName);
   console.log("lastName->" + lastName);
   console.log("address->" + address);
   
   console.log(firstName.length);
   if (firstName.length==0){
     flag=true;
   }
   if (lastName.length==0){
      flag=true;
   }
   if (address.length==0){
      
   }
   if (flag){
      alert("Error");
   }
   else{
      alert("Form Submit");
   }
   
}