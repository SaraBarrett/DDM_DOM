//elementos seleccionados
let eventBtn = document.getElementById("event-btn");
let myForm = document.getElementById("animalForm");
let animalList = document.getElementById("animalList");

//funções
function helloWorld() {
  alert("hello world");
}

function byeWorld() {
  console.log(this);
  alert("bye world");
}

//eventos associados
// eventBtn.addEventListener("mouseover", helloWorld);
// eventBtn.addEventListener("mouseover", byeWorld);

// window.addEventListener("keydown", function (event) {
//   console.log(event);
//   if (event.key == "a") {
//     this.alert("tecla pressionada");
//   }
// });

myForm.addEventListener("submit", function (event) {
  event.preventDefault();

  let formData = new FormData(this);
  let animalName = formData.get("animal");

  let myLi = document.createElement("li");
  myLi.innerText = animalName;

  animalList.appendChild(myLi)


  this.reset()


});
