const divs = document.querySelectorAll(".div");
const image = document.querySelector(".image");

window.addEventListener("mousemove", (e) => {
  image.style.top = e.pageY + "px";
  image.style.left = e.pageX + "px";
});

for (const div of divs) {
  div.addEventListener("mouseover", function (event) {
    image.src = this.dataset.image;
    image.style.position = "absolute";
    image.style.visibility = "visible";
  });
  div.addEventListener("mouseout", (event) => {
    image.style.visibility = "hidden";
  });
}

const arrow = document.getElementById("arrow-down");
const name = document.getElementById("name");

arrow.addEventListener("click", () => {
  window.scroll({
    top: 5000,
    behavior: "smooth",
  });
});
name.addEventListener("click", () => {
  window.scroll({
    top: 0,
    behavior: "smooth",
  });
});

const nav = document.querySelector(".nav-btn");
const footer = document.querySelector("footer");

window.addEventListener("scroll", () => {
  let scrollValue = window.scrollY / document.body.offsetHeight;

  // if (scrollValue < 0.05) {
  //   name.style.fontSize = "10.3vw";
  //   name.style.top = "-24px";
  //   nav.style.opacity = "0";
  // } else {
  //   name.style.fontSize = "1.75rem";
  //   name.style.top = "0px";
  //   nav.style.opacity = "1";
  // }

  if (scrollValue < 0.4) {
    footer.style.opacity = 0;
  } else {
    footer.style.opacity = "1";
  }
});
