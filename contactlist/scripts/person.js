"use strict";

function Person(){
   var firstName,lastName,phone,email;
   this.setFirstname=function(fName){
      firstName=fName;
   }
   this.setLastname=function(lName){
      lastName=lName;
   }
   this.setPhone=function(ph){
      phone=ph;
   }
   this.setEmail=function(em){
      email=em;
   }
   this.getFirstName=function(){
      return firstName;
   }
   this.getLastName=function(){
      return lastName;
   }
   this.getPhone=function(){
      return phone;
   }
   this.getEmail=function(){
      return email;
   }
   this.testFunc=function(){
      console.log("RENDERING OBJECT");
      console.log(this.getFirstName());
      console.log(this.getLastName());
   }
   
}