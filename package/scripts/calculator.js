"use strict";

function Calculator(){
   var x;
   var y;
   //var results;
   
   this.setx=function(valx){
      x = valx;
   }
   
   this.getx = function(){
      return x;
   }
   
   
   this.sety=function(valy){
      y = valy;
   }
   
   this.gety = function(){
      return y;
   }
   this.add = function(){
      return x+y;
   }
   this.substract = function(){
      return x-y;
   }
   this.multply = function(){
      return x*y;
   }
   this.divide = function(){
      return x/y;
   }
   
   this.testingOutput = function(){
      console.log("Addition "+this.add());
      console.log("Substraction "+this.substract());
      console.log("Multiplication "+this.multply());
      console.log("Division "+this.divide());
   }
   
}
var calculatorObj = new Calculator();

calculatorObj.setx(3);
calculatorObj.sety(2);

calculatorObj.testingOutput();

var results = document.getElementById(results);
console.log(results);


/*xResults = "Calculator Output <br>";
xResults +="x = "+calculatorObj.getx();
xResults +="<br> y = "+calculatorObj.gety();


xResults+="Addition" +calculatorObj.add();
xResults+="<br> Substraction" +calculatorObj.substract();
xResults+="<br> Multiplication" +calculatorObj.multply();
xResults+="<br> Division" +calculatorObj.divide();
console.log(xResults);*/




/*console.log("X ="+calculatorObj.getx());
console.log("Y ="+ calculatorObj.gety());
calculatorObj.testingOutput();
   results(xResults);   
      
 

var calculatorObj = new Calculator();

calculatorObj.setx(3);
calculatorObj.sety(2);
console.log("X = "+calculatorObj.getx());
console.log("Y = "+calculatorObj.gety());
calculatorObj.testingOutput();*/