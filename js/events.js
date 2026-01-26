//elementos seleccionados
let eventBtn = document.getElementById("event-btn");

//funções
function helloWorld() {
  alert("hello world");
}

function byeWorld() {
  alert("bye world");
}


//eventos associados
eventBtn.addEventListener('mouseover', helloWorld);
eventBtn.addEventListener('mouseover', byeWorld);