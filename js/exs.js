// const image = document.getElementById("unicorn");
// console.log(image);
// const heading = document.getElementById("mainheading");
// console.log(heading);

//pp12
// let doneTodos = document.querySelectorAll('.done');

// let checkbox = document.querySelector("input[type='checkbox']");

// console.log(doneTodos)
// console.log(checkbox)

let myForm = document.querySelector("#myShoppingList");
let myUL = document.querySelector("ul");

//pp15
function changeTaste() {
  let mySpan = document.querySelector("span");
  if (mySpan.textContent == "Yammi") {
    mySpan.textContent = "Yack";
  } else {
    mySpan.textContent = "Yammi";
  }
}

//pp 20

function eggOrChicken() {
  let myImg = document.querySelector("img");

  if (
    myImg.getAttribute("src") == "https://devsprouthosting.com/images/egg.jpg"
  ) {
    myImg.setAttribute(
      "src",
      "https://devsprouthosting.com/images/chicken.jpg",
    );
  } else {
    myImg.setAttribute("src", "https://devsprouthosting.com/images/egg.jpg");
  }
}

//pp 22
function changeStyle() {
  const alinhar = document.getElementById("container");
  alinhar.style.textAlign = "center";

  const image = document.querySelector("img");
  image.style.width = "150px";
  image.style.borderRadius = "50%";
}

//pp 24
function makeRandom() {
  let colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

  let myraimbow = document.querySelectorAll("span");

  //   let count = 0;
  //   for (let raimbow of myraimbow) {
  //     raimbow.style.backgroundColor = colors[count];
  //  count++;
  //   }

  myraimbow.forEach((item, index) => {
    item.style.backgroundColor = colors[index];
  });
}

//pp 26
function changeOrder() {
  let myLis = document.querySelectorAll("li");

  for (let element of myLis) {
    if (element.classList.contains("highlight")) {
      element.classList.remove("highlight");
    } else {
      element.classList.add("highlight");
    }
  }
}

//pp31
function createBtns() {
  for (let i = 1; i <= 100; i++) {
    let createButton = document.createElement("button");
    createButton.innerText = "Botão criado" + i;

    let myDiv = document.getElementById("container");
    myDiv.appendChild(createButton);
  }
}

//pp5 Forms&Apis

myForm.addEventListener("submit", function (event) {
  event.preventDefault();

  let formData = new FormData(this);
  let product = formData.get("product");
  let qt = formData.get("qt");


  let myLi = document.createElement("li");

  myLi.innerText = "nome: " + product + "- quantidade: " + qt;

  myUL.appendChild(myLi);
  this.reset();
});
