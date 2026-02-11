function changeLang() {
  //seleciona o elemento
  let myH1 = document.querySelector("h1");

  //manipula o elemento
  myH1.textContent = "Galinhas Sedosas";
  myH1.style.backgroundColor = "green";
}

function changeImg() {
  //sintaxe 1
  const myBanner = document.getElementById("banner");
  //myBanner.src ="https://istec-porto.pt/wp-content/uploads/2026/01/cropped-1.png";

  //Sintaxe 2
  myBanner.setAttribute("src", "../images/assesement.jpeg");
}

function changeAll() {
  let myLis = document.querySelectorAll("li");
  console.log(myLis);

  for (element of myLis) {
    element.style.backgroundColor = "blue";
  }
}

function changeMode() {
  let myBody = document.querySelector("body");

  if (myBody.classList.contains("day")) {
    myBody.classList.remove("day");
    myBody.classList.add("night");
  } else {
    myBody.classList.remove("night");
    myBody.classList.add("day");
  }
}
let isCreated = false;
//função que, ao ser clicada, adiciona um novo elemento
function addLoginMessage() {
  //criar elemento
  // let myH2 = document.createElement("h2");
  // if (!isCreated) {
  //   isCreated = true;
  //   //definir o texto para o elemento
  //   myH2.textContent = "Olá Sara";

  //   //indicar qual é o pai onde o novo elemento se vai encaixar
  //   //seleccionar pai
  //   let myDiv = document.getElementById("login-message");

  //   //ao pai, dar o filho criado
  //   myDiv.appendChild(myH2);
  // }

  if (localStorage.getItem("user")) {
    //mostra a variável de sessão user
    alert("olá " + localStorage.getItem("user"));
  } else {
    //usar o LocalStorage
    let userName = prompt("Qual é o teu nome?");

    //armazena na variável de sessão user o nome do user
    localStorage.setItem("user", userName);
  }
}

function removeChicken() {
  //seleccionar o elemento a remover
  let myBanner = document.getElementById("banner");

  //remover elemento
  myBanner.remove();
}
