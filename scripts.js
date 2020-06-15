const yellowColor = "#ECE509";

//Get stars and add on click event
const stars = document.getElementsByClassName("star");
for (let i = 0; i < stars.length; i++) {
  stars[i].addEventListener("click", () => onStarClick(i));
}

//on star click event
function onStarClick(index) {
  for (let i = 0; i < stars.length; i++) {
    if (i <= index) stars[i].setAttribute("fill", yellowColor);
    else stars[i].setAttribute("fill", "grey");
  }

  let count = 0;
  for (let i = 0; i < stars.length; i++) {
    if (stars[i].getAttribute("fill") === yellowColor) count++;
  }
  let starCount = document.getElementById("star-count");
  starCount.innerHTML = count;
}

//on button avaliar click event
let btnAvaliar = document.getElementById("btn-avaliar");
btnAvaliar.addEventListener("click", () => {
  let count = 0;

  for (let i = 0; i < stars.length; i++) {
    if (stars[i].getAttribute("fill") === yellowColor) count++;
  }

  localStorage.setItem("avaliacao", count);
  location.reload();
});

//Get local storage ranking
window.onload = function onload() {
  const avaliacao = localStorage.getItem("avaliacao");

  if (avaliacao && avaliacao > 0) {
    let starsVisualizations = document.getElementsByClassName(
      "star-visualization"
    );
    document.getElementById("ranking-visualization").innerHTML = avaliacao;

    for (let i = 0; i < avaliacao; i++) {
      starsVisualizations[i].setAttribute("fill", yellowColor);
    }
  }
};
