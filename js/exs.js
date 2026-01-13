// const image = document.getElementById("unicorn");
// console.log(image);
// const heading = document.getElementById("mainheading");
// console.log(heading);

//pp12
// let doneTodos = document.querySelectorAll('.done');

// let checkbox = document.querySelector("input[type='checkbox']");

// console.log(doneTodos)
// console.log(checkbox)

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
      "https://devsprouthosting.com/images/chicken.jpg"
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

myraimbow.forEach((item, index) =>{
   item.style.backgroundColor = colors[index];
}
)
}
