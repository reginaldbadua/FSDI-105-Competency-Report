function init(){
console.log('Browser has finished rendering');  

var theH = document.getElementById("mainHeading");
console.log(theH.innerText);
theH.innerText = "Pet Salon";

//this will give us all the inputs
var allinputs = document.getElementsByTagName("input");
console.log(allinputs);
}

function readData(){
    /*read and change text from an input field*/
    // 1 - get the (reference to the) input
    var name = document.getElementById("txtName");
    console.log(name.value); //print the text from the field 
    name.value = ""; //clear the text

    var something = document.getElementById("Something");
    console.log(something.value); //print the text fromt the field 
    something.value = ""; //clear the text
    something.value ="";
}


// initialization
window.onload = init; 