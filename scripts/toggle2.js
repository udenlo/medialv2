const toggleMenu = document.getElementsByClassName("toggle")[0];
const barToggle = document.getElementsByClassName("bar");
const navbarMobile = document.getElementById("navbar-mobile");

toggleMenu.addEventListener("click", () => {
  navbarMobile.classList.toggle("active");
  barToggle[0].classList.toggle("activated");
  barToggle[1].classList.toggle("activated");
  barToggle[2].classList.toggle("activated");
});

const ponudaMobile = document.getElementsByClassName("ponuda-mobile")[0];
const ponudaList = document.getElementById("ponuda-mobile");

ponudaMobile.addEventListener("click", () => {
  ponudaList.classList.toggle("active");
});
