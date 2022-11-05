const spinner = document.querySelector(".spinner");
const body = document.querySelector("body");
const global = document.querySelector(".global");

const dropdownIcon = document.getElementById("dropdownIcon");
const burger = document.getElementById("check");
const dropdown = document.querySelector(".dropdown");

const img1 = document.getElementById("image-1");
const img2 = document.getElementById("image-2");
const img3 = document.getElementById("image-3");
const btn1 = document.getElementById("btn-1");
const btn2 = document.getElementById("btn-2");
const btn3 = document.getElementById("btn-3");

// Slider
if (btn1) {
  btn1.addEventListener("click", () => {
    img1.style.display = "block";
    img3.style.display = "none";
    img2.style.display = "none";
    btn1.classList.add("active");
    btn3.classList.remove("active");
    btn2.classList.remove("active");
  });
  btn3.addEventListener("click", () => {
    img1.style.display = "none";
    img3.style.display = "block";
    img2.style.display = "none";
    btn1.classList.remove("active");
    btn3.classList.add("active");
    btn2.classList.remove("active");
  });
  btn2.addEventListener("click", () => {
    img1.style.display = "none";
    img3.style.display = "none";
    img2.style.display = "block";
    btn1.classList.remove("active");
    btn3.classList.remove("active");
    btn2.classList.add("active");
  });
}

// SPINNER
if (spinner) {
  init();
}

function init() {
  body.style.overflow = "hidden ";
  setTimeout(() => {
    hideLoading();

    body.style.overflow = "auto ";
  }, 1000);
}

const hideLoading = () => {
  spinner.style.display = "none";
};

// Burger Menu
dropdownIcon.addEventListener("change", () => {
  if (dropdownIcon.checked) {
    dropdown.style.display = "block";
  } else {
    dropdown.style.display = "none";
  }
});
