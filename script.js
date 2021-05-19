const textCurvePath = document.querySelector("#text-curve__path");
const circle = document.querySelector("#circle");

const handleScroll = () => {
  let minusYOffset = window.pageYOffset * -1 + window.innerWidth / 2;
  textCurvePath.setAttribute("startOffset", minusYOffset);
};

const handleCircleClick = () => {
  scrollTo(0, 780);
};

window.addEventListener("scroll", handleScroll);
circle.addEventListener("click", handleCircleClick);

function resultFun(x) {
  var positionLeft = x.clientX;
  var positionTop = x.clientY;
  document.getElementById("circle").style.left = positionLeft - 10 + "px";
  document.getElementById("circle").style.top = positionTop - 10 + "px";
}
if (document.addEventListener) {
  document.addEventListener("mousemove", resultFun);
} else if (document.attachEvent) {
  document.attachEvent("onmousemove", resultFun);
}
