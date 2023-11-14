const button = document.querySelector(".btn1");
const darkmode = document.querySelector(".dark-mode");
const color = document.querySelectorAll(".col");
const projectOneView = document.querySelector('.one-view');
const projectOneCode = document.querySelector('.one-code');

//NavBar
let a = 1;
button.addEventListener("click", () => {
  if (a == 1) {
    document.querySelector(".small").style.display = "flex";
    a -= 1;
  } else if (a == 0) {
    document.querySelector(".small").style.display = "none";
    a = 1;
  }
});
window.addEventListener("click", (e) => {
  if (a == 0 && !e.target.classList.contains("open")) {
    document.querySelector(".small").style.display = "none";
    a = 1;
  }
});
//NavBar Ends

//Dark Mode
let dark = 1;
darkmode.addEventListener("click", () => {
  if (dark == 1) {
    darkmode.innerHTML = `<i class="fa-solid fa-lightbulb" style="color:white"></i>`;
    document.querySelector("body").style.backgroundColor = "black";
    for (let i = 0; i < color.length; i++) {
      color[i].style.color = "white";
    }
    dark = 0;
  } else {
    darkmode.innerHTML = `<i class="fa-solid fa-cloud-moon"></i>`;
    document.querySelector("body").style.backgroundColor = "white";
    for (let i = 0; i < color.length; i++) {
      color[i].style.color = "black";
    }
    dark = 1;
  }
});

