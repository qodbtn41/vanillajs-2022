const images = ["0.jpg", "1.jpg", "2.jpg"];
const randomIdx = Math.floor(Math.random() * images.length);
const chosenImage = images[randomIdx];

document.body.style.backgroundImage = `url('./img/${chosenImage}')`;

const divs = document.querySelectorAll("div, h1");
if (randomIdx === 0 || randomIdx === 1 || randomIdx === 2) {
  divs.forEach((element) => element.classList.add("white"));
}
