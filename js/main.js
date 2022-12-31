function openGallery(event, tagName) {
  let i, x, tablinks;
  x = document.getElementsByClassName("gallery");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < x.length; i++) { if (tablinks[i] === event.currentTarget) {
      // do nothing if it's active, otherwise change it
      if (event.currentTarget.classList.contains("tab")) {
        tablinks[i].classList.toggle("tab-active");
        tablinks[i].classList.toggle("tab");
      }
    } else {
      tablinks[i].classList.remove("tab-active");
      tablinks[i].classList.add("tab");
    }
  }
  document.getElementById(tagName).style.display = "flex";
}

function changeImage(image) {
  let galleryImage = image;
  let popupImage = document.getElementById("popup-image");
  popupImage.src = image;
}
