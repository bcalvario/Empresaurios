// Navbar and toggle menu.
const toggleMenu = document.getElementById("toggleMenu");
const navigation = document.getElementById("navigation");

const header = document.querySelector("header");

// eventListener for activate the navigation menu
toggleMenu.addEventListener("click", () => {
  toggleMenu.classList.toggle("active");
  navigation.classList.toggle("active");
});

// eventListener for navbar to have a "sticky" behavior
window.addEventListener("scroll", () => {
  header.classList.toggle("sticky", window.scrollY > 0);
});

/**
 * Void function that helps us for fix the navigation issue.
 */
const removeMenu = () => {
  toggleMenu.classList.remove("active");
  navigation.classList.remove("active");
};
