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
