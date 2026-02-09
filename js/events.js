//elementos seleccionados
let eventBtn = document.getElementById("event-btn");

//funções
function helloWorld() {
  alert("hello world");
}

function byeWorld() {
  console.log(this);
  alert("bye world");
}

//eventos associados
eventBtn.addEventListener("mouseover", helloWorld);
eventBtn.addEventListener("mouseover", byeWorld);

window.addEventListener("keydown", function (event) {
  console.log(event)
  if(event.key == 'a'){
      this.alert("tecla pressionada");
  }

});
