let increment = document.getElementsByClassName("inc");
let decrement = document.getElementsByClassName("dec");
let reset = document.getElementsByClassName("reset");

let count = 0;
  
function incrementValue(){
   
   count = count + 1;
    document.getElementById("value").innerHTML = count;
    document.getElementById("value").style.color = "Green";


}

function decrementValue(){
   
   count = count - 1;
    document.getElementById("value").innerHTML = count;
    document.getElementById("value").style.color = "Red";



}

function resetValue(){
  
      document.getElementById("value").innerHTML = "";
   
}