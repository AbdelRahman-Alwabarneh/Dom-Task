const fruits = [
  { name: "Apples", image: "Photo/apples.jpg" },
  { name: "Banana", image: "Photo/banana.jpg" },
  { name: "Cherry", image: "Photo/Cherry.png" },
  { name: "Orange", image: "Photo/Orange.jpg" },
  { name: "Strawberry", image: "Photo/Strawberry.png" },
];

let container = document.createElement("div");
container.classList.add("container");
let Unordered_Lists = document.createElement("ul");

for (let i = 0; i < fruits.length; i++) {
  let list = document.createElement("li");
  let parag = document.createElement("p");
  list.appendChild(parag);

  Unordered_Lists.appendChild(list);
  parag.innerText = fruits[i].name;
  let img = document.createElement("img");
  img.setAttribute("src", fruits[i].image);
  list.appendChild(img);
  img.style.width = "auto";
  img.style.height = "300px";
  container.appendChild(Unordered_Lists);
  document.body.appendChild(container);
}

// let numarray = [14, 772, 443, 54, 533, 66, 87, 88, 99, 410];
// function number(numarray, num) {
//   let count = -1;
//   for (let i = 0; i < numarray.length; i++) {
//     if (num == numarray[i]) {
//       count = i;
//       break;
//     }
//   }
//   let parag = document.createElement("p");
//   parag.innerText = count;
//   document.body.appendChild(parag);
// }

// number(numarray, 413123120);
