let body = document.body;
let decor = document.querySelector(".section-title-2-decor");
let sectionTitle2 = document.querySelector(".section-title-2")
let sectionTitle1Decor = document.querySelector(".section-title-2-decor");
let header = document.querySelector("header")
let navChilds = document.querySelectorAll(".nav");
let accountButton = document.querySelector(".account-button");
let sections = document.querySelectorAll("section");
let news1 = document.querySelector(".news-1");
let news2 = document.querySelector(".news-2");
let newsTitle1 = document.querySelector(".news-1-title");
let newsTitle2 = document.querySelector(".news-2-title");
let rightArrow = document.querySelector(".right-arrow");
let leftArrow = document.querySelector(".left-arrow");
let sectionTitleWidth1;
let currentPoint;
let yes;

rightArrow.addEventListener("click", (e) => {
  if (news1.offsetWidth > 1) {
    news1.style.fontSize = "0"
    news2.style.fontSize = "22px"
    news1.style.width = "0";
    news2.style.width = "100%"
  }
});

leftArrow.addEventListener("click", (e) => {
  if (news2.offsetWidth > 1) {
    news2.style.fontSize = "0"
    news1.style.fontSize = "22px"
    news1.style.width = "100%";
    news2.style.width = "0"
  } 
});


decor.addEventListener("mousedown", (e) => {
  sectionTitleWidth1 = sectionTitle2.offsetWidth;
  decor.style.cursor = "grabbing";
  yes = true;
  currentPoint = e.clientX;
});

body.addEventListener("mousemove", (e) => {
  if (yes == true) {
    sectionTitle2.style.width =
      sectionTitleWidth1 + e.clientX - currentPoint + "px";
    sectionTitle1Decor.style.width =
      sectionTitleWidth1 + e.clientX - currentPoint + 22 + "px";
  }
});

body.addEventListener("mouseup", (e) => {
  yes = false;
  decor.style.cursor = "grab";
  body.style.cursor = "inherit";
});

decor.addEventListener("mouseout", (e) => {
  if (yes != false) body.style.cursor = "grabbing";
});