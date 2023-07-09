const header = document.querySelector("header");

const toggleHeader = () => {
  const pixels = window.scrollY;
  if (pixels > 60) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
};

toggleHeader();

document.addEventListener("scroll", function () {
  toggleHeader();
});
