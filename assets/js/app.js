const grid = document.getElementById("grid");

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
  "assets/images/pic5.jpg",
  "assets/images/pic6.jpg",
  "assets/images/pic7.jpg",
  "assets/images/pic1.jpg",
  "assets/images/pic4.jpg",
  "assets/images/pic5.jpg",
  "assets/images/pic6.jpg",
  "assets/images/pic7.jpg",
  "assets/images/pic1.jpg",
  "assets/images/pic4.jpg",
];

imgArr.forEach((ele, idx) => {
  let card = document.createElement("article");
  card.className = "flip-card";
  card.id = "card-" + idx;
  let innerCard = `<div class="flip-card-inner">
  <div class="flip-card-front">
    <img src=${ele} onerror="this.onerror=null; this.src='assets/images/placeholder.png'"/>
  </div>
  <div class="flip-card-back">
    <h1>Dummy Text</h1>
    <span class="material-icons del-icon" onclick="delCard(${idx})">
      delete
    </span>
  </div>
</div>`;
  card.innerHTML = innerCard;
  grid.appendChild(card);
});

function delCard(idx) {
  document.getElementById("card-" + idx).remove();
}

function shuffle() {
  var cards = document.querySelectorAll(".flip-card");
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
  cards.forEach((card, idx) => {
    setTimeout(() => {
      card.classList.remove("shuffle-class");
    }, idx * 70);
  });
}
