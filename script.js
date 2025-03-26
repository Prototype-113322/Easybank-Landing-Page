"use strict";

/* OBSERVER API FOR SMOOTH TRANSITIONS */
//   SMOOTH SCROLL ANIMATION
const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target); // Stop observing once it's visible
      }
    });
  },
  {
    root: null, // Observes the viewport
    rootMargin: "0px",
    threshold: 0.2, // Trigger when 20% of the element is visible
  }
);

// Select all elements with the class "hidden"
const hiddenElements = document.querySelectorAll(".smooth-transition");
hiddenElements.forEach((el) => observer.observe(el));

/* SELECTION ELEMENT */
let menuOpenIcon = document.querySelector(".menu-open-icon");
let menuCloseIcon = document.querySelector(".menu-close-icon");
let menuContainer = document.querySelector(".nav-col-2");
let overlayContainer = document.querySelector(".overlay");

function openMenuFunctionality() {
  menuOpenIcon.classList.toggle("hidden", true);
  menuCloseIcon.classList.toggle("hidden", false);
  menuContainer.classList.toggle("hidden", false);
  overlayContainer.classList.toggle("overlay-hidden", false);
}

function closeMenuFunctionality() {
  menuCloseIcon.classList.toggle("hidden", true);
  menuOpenIcon.classList.toggle("hidden", false);
  menuContainer.classList.toggle("hidden", true);
  overlayContainer.classList.toggle("overlay-hidden", true);
}

/* EVENT LISTENER FUNCTION */
function addMenuEventListeners() {
  if (menuOpenIcon && menuCloseIcon && menuContainer && overlayContainer) {
    menuOpenIcon.addEventListener("click", openMenuFunctionality);
    menuCloseIcon.addEventListener("click", closeMenuFunctionality);
    overlayContainer.addEventListener("click", closeMenuFunctionality);
  } else {
    console.error("One or more menu elements are missing from the DOM.");
  }
}

addMenuEventListeners();
