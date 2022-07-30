function openNav() {
  document.querySelector("#main").style.top = "50px";
  document.querySelector("#main").style.left = "200px";
  document.querySelector(".navClose").style.display = "inline-block";
  document.querySelector(".navBars").style.display = "none";
}
function closeNAv() {
  document.querySelector("#main").style.top = "0px";
  document.querySelector("#main").style.left = "0px";
  document.querySelector(".navBars").style.display = "inline-block";
  document.querySelector(".navClose").style.display = "none";
}
