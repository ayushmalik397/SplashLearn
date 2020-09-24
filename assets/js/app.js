const grid = document.getElementById("grid");
const addEle = document.getElementById("add");
let i = 0;

let imgArr = [
  "assets/images/pic1.jpg",
  "assets/images/pic2.jpg",
  "assets/images/pic3.jpg",
  "assets/images/pic4.jpg",
  "assets/images/pic5.jpg",
  "assets/images/pic6.jpg",
  "assets/images/pic7.jpg",
  "assets/images/pic1.jpg",
  "assets/images/pic4.jpg",
];

function addCard() {
  let card = document.createElement("article");
  card.className = "flip-card";
  card.id = "card-" + i;
  let index = Math.floor(Math.random() * (imgArr.length - 1 - 0 + 1)) + 0;
  let innerCard = `<div class="flip-card-inner">
  <div class="flip-card-front">
    <img src=${imgArr[index]} />
  </div>
  <div class="flip-card-back">
    <h1>Dummy Text</h1>
    <span class="material-icons del-icon" onclick="delCard(${i++})">
      delete
    </span>
  </div>
</div>`;
  card.innerHTML = innerCard;
  grid.insertBefore(card, addEle);
}

function delCard(idx) {
  document.getElementById("card-" + idx).remove();
}

function shuffle() {
  var cards = document.querySelectorAll(".flip-card");
  console.log(cards);
  cards.forEach((card, idx) => {
    setTimeout(() => {
      card.classList.add("shuffle-class");
    }, idx * 70);
  });
  setTimeout(shuffleBack, (cards.length / 10) * 1000);
}

function shuffleBack() {
  var gridList = document.querySelector("#grid");
  for (var i = gridList.children.length - 1; i >= 0; i--) {
    gridList.appendChild(gridList.children[(Math.random() * i) | 0]);
  }
  var cards = document.querySelectorAll(".flip-card");
  console.log(cards);
  cards.forEach((card, idx) => {
    setTimeout(() => {
      card.classList.remove("shuffle-class");
    }, idx * 70);
  });
}
