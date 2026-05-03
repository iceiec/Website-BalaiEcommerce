// script.js

// --- Slideshow Functionality ---
let slideIndex = 0;
const slides = document.querySelectorAll(".slides");

function showSlides() {
  // Check if slides exist on the current page
  if (slides.length === 0) return; 
  
  slides.forEach(slide => slide.classList.remove("active"));
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].classList.add("active");
  setTimeout(showSlides, 4000); // Change image every 4 seconds
}

// --- Navbar Scroll Functionality ---
const navbar = document.querySelector(".navbar");

// Check if a navbar exists on the current page
if (navbar) {
  // Only add the scroll listener if the navbar doesn't already have the 'solid-bg' class on page load
  // This prevents the effect from running on internal pages
  if (!navbar.classList.contains('solid-bg')) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) { // When scrolled more than 50px
        navbar.classList.add("solid-bg");
      } else {
        navbar.classList.remove("solid-bg");
      }
    });
  }
}

// --- Initialize Slideshow ---
showSlides();