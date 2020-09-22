const codeBtn = document.querySelector(".code-btn");
const codeContainer = document.querySelector(".code-container");
const forky = document.querySelector(".forky");

codeBtn.addEventListener("click", showCode);

let menuOpen = false;
function showCode() {
  if (menuOpen === false) {
    codeContainer.classList.remove("slide-right");
    codeContainer.classList.add("slide-left");
    forky.style.left = "25%";
    menuOpen = true;
  } else {
    codeContainer.classList.remove("slide-left");
    codeContainer.classList.add("slide-right");
    forky.style.left = "50%";
    menuOpen = false;
  }
}
