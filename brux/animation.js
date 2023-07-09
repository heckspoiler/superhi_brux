const animatedTags = document.querySelectorAll(
  "h2, h3, p, section img, a.button"
);

console.log(animatedTags);

// fade out animation on load

animatedTags.forEach((tag) => {
  tag.style.opacity = 0;
});

// fade in animation on scroll

const fadeIn = function () {
  let delay = 0.25;
  animatedTags.forEach((tag) => {
    const tagTop = tag.getBoundingClientRect().top;
    const tagBottom = tag.getBoundingClientRect().bottom;
    if (tagTop <= window.innerHeight && tagBottom >= 0) {
      tag.style.opacity = 1;
      tag.style.animation = `fadeIn 1s both ${delay}s`;
      delay = delay + 0.25;
    } else {
      tag.style.opacity = 0;
      tag.style.animation = "";
    }
  });
};

fadeIn();

//on scroll run fadeIn

document.addEventListener("scroll", function () {
  fadeIn();
});

// browser resize, run fadeIn again

window.addEventListener("resize", function () {
  fadeIn();
});
