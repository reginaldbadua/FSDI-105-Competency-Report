
var salon ={
    name: "Pet salon",
    phone: "555 234 5678",
    address: {
      street: "main",
      number: "123"
    },
    workingHours: {
      opens: '9:00',
      closes: '17:00'
    },



petCount: function(){
    numberofPets = this.pets.length;
    console.log(numberofPets);

},
    pets:[] //to store list of pets currently on the salon
} 
var petCnt = 0;
function Pet (name, age, serviceType, ownerName, contactNumber){
  this.id = 'pt' + petCnt;
  petCnt += 1; 
  this.hunger = 20;
  this.happy = 10;

  this.name = name;
  this.age = age;
  this.type = serviceType;
  this.ownerName = ownerName;
  this.ownerPhone = contactNumber; 

  /*
  this.feed = function(){
    //this.hunger = this.hunger - 10;
    this.hunger -= 10;
    this.happy +=10;
  }
 

  this.status = function (){
    //print the pet status to console
    console.log(this.name, "Hunger:" + this.hunger, "Happy:" + this.happy);
  }
  */
}

//method to print owner information
this.ownerInfo = function(){
  console.log('Owner name:' + this.ownerName, 'Phone Number' + this.ownerPhone);
}

/*  Original Code - Incorrect 
this.ownerInfo
  console.log("Owner Name:" + this.ownerName, "Phone Number:" + this.ownerPhone);

//method to display number of pets
function petCount (petNumber){
this.petNumber = petNumber;
  console.log(numberofPets)
}
*/

// read pet info, create new object and add it to the salon list
function registerPet(){
    //reference controls
    var txtName = document.getElementById("txtName");
    var txtAge = document.getElementById("txtAge");
    var txtOwner = document.getElementById("txtOwner");
    var txtPhone = document.getElementById("txtPhone");
    var selService = document.getElementById("selService");

    //create new Pet object
    var thePet = new Pet(
        txtName.value,
        txtAge.value,
        selService.value,
        txtOwner.value,
        txtPhone.value);
        
        console.log(thePet);

        //store the created object on the salon array
        salon.pets.push(thePet);

        displayPet(thePet);
        displayPetTable(thePet);
        clearForm ();
    }
function clearForm(){
  var txtName = document.getElementById("txtName");
  var txtAge = document.getElementById("txtAge");
  var txtOwner = document.getElementById("txtOwner");
  var txtPhone = document.getElementById("txtPhone");
  var selService = document.getElementById("selService");

  txtName.value = ("");
  txtAge.value = ("");
  txtOwner.value = ("");
  txtPhone.value = ("");
  selService.value = ("");
}

// displays the pet onto the list
// expects: a pet object
function displayPet(aPet){ 

    // get a reference from the list
    var list = document.getElementById("petList")

    //Method 1 for creating new element (fancy)
    //create a new li on the list
    /*
    var li = document.createElement('li');
    li.innerText = aPet.name + " - " + aPet.type; 
    li.classList.add("pet-li");// add a css class to the element
    li.classList.add("bordered");
    

    //Method 2
    var li = "<li class='pet-li bordered'>"+  aPet.name + " - " + aPet.type + "</li>";
    list.innerHTML += li; 

    // add the li on the list
    list.appendChild(li);
  */
}

function displayPetTable(aPet){
  var tbody = document.getElementById("listBody");

  var row = `

    <tr id="${aPet.id}">
      <td>${aPet.id}</td>
      <td>${aPet.name}</td>
      <td>${aPet.age}</td>
      <td>${aPet.ownerName}</td>
      <td>${aPet.ownerPhone}</td>
      <td>${aPet.type}</td>
      <td><button onclick='showInfo("${aPet.id}");' class='btn btn-sm btn-info'>Show Info</button> <button onclick='removePet("${aPet.id}");' class='btn btn-sm btn-danger'>Delete</button></td>
    </tr>
  `;
  tbody.innerHTML +=row;

}
function showInfo(petId){
  var indexOfthePet = 0;
  for(var i=0; i< salon.pets.length; i++){
    var indexPet = salon.pets[i];
    if(indexPet.id == petId){
      indexOfthePet = i;
    }
  }
    var thePet = salon.pets[indexOfthePet];
    console.log("Info: ", thePet);
}


function removePet (petId){
  //console.log('wants to remove a pet', petId);
  var indexToRemove = 0;
  for( var i=0; i<salon.pets.length; i++){
    var indexPet = salon.pets[i];
    if (indexPet.id == petId){
        indexToRemove = i;
    }
  }
  salon.pets.splice(indexToRemove, 1);

  var tr = document.getElementById(petId);
  tr.remove(); //not working

}

//store registered pets
var fido = new Pet("Fido,", 3, "Hair cut", "FancyLady", "555 123 4567");

var lola = new Pet("Lola", 5, "Shower", "OldGuy", "555 344 2344")

var charles = new Pet("Charles", 4, "Brush", "TallMan", "555 987 6543")

var buddy = new Pet("Buddy", 4, "Nail trim ", "PrettyGirl", "555 987 6543"); 

function init(){
  
var btnSave = document.getElementById("btnSave");
btnSave.addEventListener('click', registerPet);

var btnClear = document.getElementById('btnClear');
btnClear.addEventListener('click', clearForm);

btnClear.addEventListener('mouseover', function(){
  btnClear.style.marginLeft = '40px';
  });

var nameField = document.getElementById("txtName");
nameField.addEventListener('change', function(){
  console.log('text on the field has changed');
});

}

function mouseOver(){}

window.onload = init;