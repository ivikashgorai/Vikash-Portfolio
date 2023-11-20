const button = document.querySelector(".btn1");
const darkmode = document.querySelector(".dark-mode");
const color = document.querySelectorAll(".col");
const projectOneView = document.querySelector('.one-view');
const projectOneCode = document.querySelector('.one-code');
const techbg = document.querySelectorAll('.skill-item-tech');
const contactbg = document.querySelectorAll('.contact-link');
const projectWork  = document.querySelectorAll('.project-work');
const tech  = document.querySelectorAll('.tech');
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
    document.querySelector("body").style.backgroundColor = "#03001C";
    for (let i = 0; i < color.length; i++) {
      color[i].style.color = "grey";
    }
    for (let j = 0; j < techbg.length; j++) {
      techbg[j].style.backgroundColor = " rgb(4, 28, 81)";
    }
    for (let j = 0; j < contactbg.length; j++) {
      contactbg[j].style.backgroundColor = " rgb(4, 28, 81)";
    }
    for (let j = 0; j < projectWork.length; j++) {
      projectWork[j].style.borderColor = "#301E67";
    }
    for (let j = 0; j < tech.length; j++) {
      tech[j].style.borderColor = "#301E67";
    }
    dark = 0;
  } else {
    darkmode.innerHTML = `<i class="fa-solid fa-cloud-moon"></i>`;
    document.querySelector("body").style.backgroundColor = "white";
    for (let i = 0; i < color.length; i++) {
      color[i].style.color = "rgb(53,48,98)";
    }
    for (let j = 0; j < techbg.length; j++) {
      techbg[j].style.backgroundColor = "rgb(234, 240, 238)";
    }
    for (let j = 0; j < contactbg.length; j++) {
      contactbg[j].style.backgroundColor = "rgb(234, 240, 238)";
    }
    for (let j = 0; j < projectWork.length; j++) {
      projectWork[j].style.borderColor = "rgb(220, 220, 220)";
    }
    for (let j = 0; j < tech.length; j++) {
      tech[j].style.borderColor = "#301E67";
    }
    dark = 1;
  }
});

