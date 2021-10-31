//opened popup menu
const buttonOpenMenu = document.querySelector(".header__menu-items");
const popupMenu = document.querySelector(".popup_type_menu");
const buttonCloseMenu = document.querySelector("#button-close-menu");
//navigation
const openAbout = document.querySelector("#popup__item-about");
const openLooks = document.querySelector("#popup__item-looks");
const openSubscribe = document.querySelector("#popup__item-subscribe");

function openPopup(popup) {
  popup.classList.add("popup_opened");
}

function closePopup(popup) {
  popup.classList.remove("popup_opened");
}

buttonOpenMenu.addEventListener("click", function () {
  openPopup(popupMenu);
});

buttonCloseMenu.addEventListener("click", function () {
  closePopup(popupMenu);
});

openAbout.addEventListener("click", function () {
  closePopup(popupMenu);
});

openLooks.addEventListener("click", function () {
  closePopup(popupMenu);
});

openSubscribe.addEventListener("click", function () {
  closePopup(popupMenu);
});

//animation
let isScrolling = false;

window.addEventListener("scroll", throttleScroll, false);

function throttleScroll(e) {
  if (isScrolling == false) {
    window.requestAnimationFrame(function () {
      dealWithScrolling(e);
      isScrolling = false;
    });
  }
  isScrolling = true;
}

document.addEventListener("DOMContentLoaded", dealWithScrolling, false);

const textLeftOne = document.querySelector("#about__paragraph-container-one");
const textLeftTwo = document.querySelector("#about__paragraph-container-two");
const textRightOne = document.querySelector("#about__paragraph-normal-one");
const textRightTwo = document.querySelector("#about__paragraph-normal-two");
const imagesKendal = document.querySelector(".about__images-kendal");
const imagesCarti = document.querySelector(".about__images-carti");
const imagesBella = document.querySelector(".about__images-bella");

function dealWithScrolling(e) {
  if (isElementVisible(textLeftOne)) {
    textLeftOne.classList.add("fade");
  } else {
    textLeftOne.classList.remove("fade");
  }
  if (isElementVisible(textLeftTwo)) {
    textLeftTwo.classList.add("fade");
  } else {
    textLeftTwo.classList.remove("fade");
  }
  if (isElementVisible(textRightOne)) {
    textRightOne.classList.add("fade");
  } else {
    textRightOne.classList.remove("fade");
  }
  if (isElementVisible(textRightTwo)) {
    textRightTwo.classList.add("fade");
  } else {
    textRightTwo.classList.remove("fade");
  }

  if (isElementVisible(imagesKendal)) {
    imagesKendal.classList.add("fade");
  } else {
    imagesKendal.classList.remove("fade");
  }
  if (isElementVisible(imagesCarti)) {
    imagesCarti.classList.add("fade");
  } else {
    imagesCarti.classList.remove("fade");
  }
  if (isElementVisible(imagesBella)) {
    imagesBella.classList.add("fade");
  } else {
    imagesBella.classList.remove("fade");
  }
}

function isElementVisible(el) {
  const rect = el.getBoundingClientRect();

  const top = rect.top;
  const bottom = rect.bottom;
  const height = rect.height;

  return top + height >= 0 && height + window.innerHeight >= bottom;
}
