const irisLeft = document.querySelector("div.iris-left");
const irisRight = document.querySelector("div.iris-right");

const moveEye = (e) => {
  // console.log(e);
  // console.log(e.pageX, e.pageY);
  // console.log(window.innerWidth, window.innerHeight);
  // console.log(window.scrollX, window.scrollY);

  // horizontal axis
  const x = (e.pageX * 100) / window.innerWidth + "%";
  // vertical axis
  const y = (e.pageY * 100) / window.innerHeight + "%";

  // console.log(x, y);

  irisLeft.style.left = x;
  irisLeft.style.top = y;
  irisLeft.style.transform = "translate(-" + x + ",-" + y + ")";

  irisRight.style.left = x;
  irisRight.style.top = y;
  irisRight.style.transform = "translate(-" + x + ",-" + y + ")";
};

// when the user moves the mouse, run moveEye
document.addEventListener("mousemove", moveEye);
