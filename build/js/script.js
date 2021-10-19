// Variables

let nav = document.querySelector(".nav");
let navButton = document.querySelector(".nav__button");
let mainMenu = document.querySelector(".main-menu");
let header = document.querySelector(".header");
var menuLinks = document.querySelectorAll(".main-menu__link");
let introButton = document.querySelector(".intro-section__button");

// Open/close menu

let toggleMenu = function () {
  if (navButton) {
    navButton.addEventListener("click", function () {
      if (header.classList.contains("header--opened")) {
        hideMenu();
      } else {
        openMenu();
      }
    });
  }
};

let openMenu = function () {
  bodyScrollLock.disableBodyScroll(mainMenu);
  navButton.classList.add("nav__button--opened");
  navButton.classList.remove("nav__button--closed");
  mainMenu.classList.remove("main-menu--closed");
  mainMenu.classList.add("main-menu--opened");
  header.classList.add("header--opened");
  nav.classList.remove("nav--closed");
  nav.classList.add("nav--opened");
};

let hideMenu = function () {
  bodyScrollLock.enableBodyScroll(mainMenu);
  header.classList.remove("header--opened");
  nav.classList.remove("nav--opened");
  nav.classList.add("nav--closed");
  navButton.classList.remove("nav__button--opened");
  navButton.classList.remove("nav__button--closed");
  mainMenu.classList.add("main-menu--closed");
  mainMenu.classList.remove("main-menu--opened");
};

let clickOnLink = function () {
  menuLinks.forEach(function (menuLink) {
    menuLink.addEventListener("click", function () {
      hideMenu();
    });
  });
};

if (nav) {
  clickOnLink();
  toggleMenu();
}

// Smooth scroll

let addSmoothScroll = function () {
  let moveTo = new MoveTo({
    duration: 1200,
  });

  let triggers = menuLinks;

  triggers.forEach(function (trigger) {
    moveTo.registerTrigger(trigger);
  });

  if (introButton) {
    introButton.addEventListener("click", function () {
      let target = document.querySelector(".description-section");
      moveTo.move(target);
    });
  }
};

addSmoothScroll();

// Slider

// Найдем кнопки, слайды

let leftButton = document.querySelector(".review-section__button--left");
let rightButton = document.querySelector(".review-section__button--right");
let slideList = document.querySelector(".review-list");
let slides = document.querySelectorAll(".review-item");
let slidesLength = slides.length;
let counter = 0;

rightButton.classList.add("review-section__button--active");

leftButton.addEventListener("click", function () {
  if (counter > 0) {
    slideList.style.transform = "translateX(0)";
    counter -= 3;
    console.log(counter)
  }
  else if (counter === 0) {
    changeLeftButtonActivity();
  }
});

rightButton.addEventListener("click", function () {
  if (counter < slidesLength) {
    slideList.style.transform = "translateX(-1118px)";
    counter += 3;
    console.log(counter);
    leftButton.classList.add("review-section__button--active");
    if (counter > slidesLength || counter % slidesLength === 0) {
      changeRightButtonActivity();
    }
  }
});

let changeRightButtonActivity = function () {
  rightButton.classList.remove("review-section__button--active");
  rightButton.disabled = true;
};

let changeLeftButtonActivity = function () {
  leftButton.classList.remove("review-section__button--active");
  leftButton.disabled = true;
};
