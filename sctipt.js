const $ = document;

const mainLine = $.querySelector(".mainLine");
const mobileNav = $.querySelector(".mobileNav");
const mobileNavMenu = $.querySelector(".mobileNavMenu");
let isOpen = false;
mobileNav.addEventListener("click", () => {
  if (!isOpen) {
    mainLine.classList.add("lineActive");
    mainLine.style.backgroundColor = "transparent";
    mobileNavMenu.style.left = "0";
    isOpen = true;
  } else {
    mainLine.classList.remove("lineActive");

    mainLine.style.backgroundColor = "#000";
    mobileNavMenu.style.left = "-20rem";
    isOpen = false;
  }
});
