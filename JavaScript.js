const firstarrowUp = document.querySelectorAll(".firstarrowUp");
const firstarrowDrown = document.querySelectorAll(".firstarrowDown");
const secondarrowUp = document.querySelectorAll(".secondarrowUp");
const secondarrowDrown = document.querySelectorAll(".secondarrowDown");
const first = document.querySelector(".first");
const second = document.querySelector(".second");
const mobilenavLinks = document.querySelector(".mobilenavLinks");
const crossX = document.querySelector(".cross-x");
const iconMenu = document.querySelector(".iconMenu");
const featuresDropdown = document.querySelector(".featuresDropdown");

const firstarrowUpMobileNav = document.querySelectorAll(
  ".firstarrowUpMobileNav"
);
const firstarrowDrownMobileNav = document.querySelectorAll(
  ".firstarrowDownMobileNav"
);
const secondarrowUpMobileNav = document.querySelectorAll(
  ".secondarrowUpMobileNav"
);
const secondarrowDrownMobileNav = document.querySelectorAll(
  ".secondarrowDownMobileNav"
);
const firstMobileNav = document.querySelector(".firstMobileNav");
const secondMobileNav = document.querySelector(".secondMobileNav");

firstarrowDrown.forEach((arrowDrown, index) => {
  arrowDrown.addEventListener("click", function () {
    first.style.display = "flex";
    firstarrowUp[index].style.display = "inline";
    arrowDrown.style.display = "none";
  });
});

firstarrowUp.forEach((arrowUp, index) => {
  arrowUp.addEventListener("click", function () {
    first.style.display = "none";
    firstarrowDrown[index].style.display = "inline";
    arrowUp.style.display = "none";
  });
});

secondarrowDrown.forEach((arrowDrown, index) => {
  arrowDrown.addEventListener("click", function () {
    second.style.display = "flex";
    secondarrowUp[index].style.display = "inline";
    arrowDrown.style.display = "none";
  });
});

secondarrowUp.forEach((arrowUp, index) => {
  arrowUp.addEventListener("click", function () {
    second.style.display = "none";
    secondarrowDrown[index].style.display = "inline";
    arrowUp.style.display = "none";
  });
});

firstarrowDrownMobileNav.forEach((arrowDrown, index) => {
  arrowDrown.addEventListener("click", function () {
    firstMobileNav.style.display = "flex";
    firstarrowUpMobileNav[index].style.display = "inline";
    arrowDrown.style.display = "none";
  });
});

firstarrowUpMobileNav.forEach((arrowUp, index) => {
  arrowUp.addEventListener("click", function () {
    firstMobileNav.style.display = "none";
    firstarrowDrownMobileNav[index].style.display = "inline";
    arrowUp.style.display = "none";
  });
});

secondarrowDrownMobileNav.forEach((arrowDrown, index) => {
  arrowDrown.addEventListener("click", function () {
    secondMobileNav.style.display = "flex";
    secondarrowUpMobileNav[index].style.display = "inline";
    arrowDrown.style.display = "none";
  });
});

secondarrowUpMobileNav.forEach((arrowUp, index) => {
  arrowUp.addEventListener("click", function () {
    secondMobileNav.style.display = "none";
    secondarrowDrownMobileNav[index].style.display = "inline";
    arrowUp.style.display = "none";
  });
});

iconMenu.addEventListener("click", function () {
  if (mobilenavLinks.style.display === "block") {
    mobilenavLinks.style.display = "none";
  } else {
    mobilenavLinks.style.display = "block";
  }
});

crossX.addEventListener("click", function () {
  mobilenavLinks.style.display = "none";
});

window.addEventListener("resize", function () {
  if (this.window.innerWidth <= 1200) {
    featuresDropdown.style.display = "none";
  } else {
    featuresDropdown.style.display = "block";
  }
});
