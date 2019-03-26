//alert("hi");

//

function formValidate() {
 
    
//name validation     
var name, text;
    
  name = document.getElementById("name").value;

    if (name == "") {
    text = "Name required";
  }
    else{
    text = " ";
  }
  document.getElementById("nameerror").innerHTML = text;



//email validation    
var name, text;   
  email = document.getElementById("email").value;

    if (email == "") {
    text = "Email required";
  }
    else{
    text = " ";
  }
  document.getElementById("emailerror").innerHTML = text;


    
//party size validation    
    party = document.getElementById("party").value;

    if (party < 1 || party > 4 || party == "") {
    text = "Party size must be between 1-4 persons";
  }
    else{
    text = " ";
  }
  document.getElementById("partyerror").innerHTML = text; 

    
    
//phone validation    
    phone = document.getElementById("phone").value;

    if (phone == "") {
    text = "Phone required";
  }
    else{
    text = " ";
  }
  document.getElementById("phoneerror").innerHTML = text; 
    
    
//date validation    
    date = document.getElementById("date").value;

    if (date == "") {
    text = "Date required";
  }
    else{
    text = " ";
  }
document.getElementById("dateerror").innerHTML = text;


    
    
//time validation    
    time = document.getElementById("time").value;

    if (time == "") {
    text = "Time required";
  }
    else{
    text = " ";
  }
  document.getElementById("timeerror").innerHTML = text; 
    
    if (time < "11:00 AM" || time > "21:00 PM") {
    text = "Please select a time between 11:00 AM and 9:00PM.";
  }
    else{
    text = " ";
  }
  document.getElementById("timeerror").innerHTML = text; 

}


//mobiledropdown
function mobilenav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
