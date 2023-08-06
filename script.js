import { greetings } from "./util.js";

const cursor = document.getElementById("cursor");
const introBtn = document.getElementById("intro-btn");
const skillsBtn = document.getElementById("skills-btn");
const midSection = document.querySelector(".mid-section");
const introSection = document.querySelector(".intro");

let greetingsArray = [...greetings];
let index = 0;

// add characters to the left of cursor span every 0.5s
let typing = setInterval(function () {
  cursor.append(greetingsArray[index]);
  if (index < greetingsArray.length - 1) {
    index++;
  } else if (index === greetingsArray.length - 1) {
    clearInterval(typing);
  }
}, 50);

skillsBtn.addEventListener("click", function () {
  introSection.classList.add("hide");
  midSection.classList.remove("hide");
  midSection.classList.add("show");
});

introBtn.addEventListener("click", function () {
  introSection.classList.remove("hide");
  midSection.classList.add("hide");
});
