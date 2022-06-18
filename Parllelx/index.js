let moon = document.getElementById("moon");
let stars = document.getElementById("stars");
let mountains_front = document.getElementById("mountains_front");
let mountains_behind = document.getElementById("mountains_behind");
let text = document.getElementById("text");
let btn = document.getElementById("btn");
let alLImages = document.getElementsByTagName("img");
console.log(btn);

window.addEventListener("scroll", () => {
  let scrollValue = window.scrollY;
  stars.style.left = scrollValue * 0.5 + "px";
  moon.style.top = scrollValue + "px";
  mountains_behind.style.top = scrollValue * 0.1 + "px";

  text.style.marginRight = scrollValue * 4 + "px";
  text.style.marginTop = scrollValue * 1.5 + "px";
  btn.marginRight = scrollValue * 4 + "px";
  btn.marginTop = scrollValue * 1.5 + "px";

  Image.style.scale = scrollValue;
});
