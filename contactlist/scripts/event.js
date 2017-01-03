function importFormElements(){
   Event.preventDefault();
   
   var personObj = new Person;
   
   personObj.setFirstName($("#firstName").val());
   personObj.setLastname($("#lastName").val());
   personObj.setEmail($("#email").val());
   personObj.setPhone($("#phone").val());
   return personObj;
}


function render(){
   var results = "";
   
   personList.forEach(function(personObj){
      results+="<tr>";
      results+="<td>"+personObj.getFirstName()+"</td>";
      results+="<td>"+personObj.getLirstName()+"</td>";
      results+="<td>"+personObj.getPhone()+"</td>";
      results+="<td>"+personObj.getEmail()+"</td>";
      results+="</tr>";
   });
   
      $("#resultTbl tbody").html(results);
}

//Event for the button
function submit(){
   var tempObj = importFormElements();
   personList.push(tempObj);
   render();
}