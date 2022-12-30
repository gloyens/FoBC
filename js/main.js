// function openNavbar() {
//   let x = document.getElementById("myNavbar");
//   if (x.className === "navbar") {
//     x.className += " responsive";
//   } else {
//     x.className = "navbar";
//   }
// }

function openGallery(event, tagName) {
  let i, x, tablinks;
  x = document.getElementsByClassName("gallery");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < x.length; i++) {    if (tablinks[i].classList.contains("tab-active")) {
      tablinks[i].classList.toggle("tab-active");
      tablinks[i].classList.toggle("tab");
    } else if (tablinks[i] === event.currentTarget) {
      tablinks[i].classList.toggle("tab-active");
      tablinks[i].classList.toggle("tab");
    }
  }
  document.getElementById(tagName).style.display = "flex";
}
