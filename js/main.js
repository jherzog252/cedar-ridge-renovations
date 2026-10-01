
/* ------------------------------
   Cedar Ridge
   Mobile Navigation
------------------------------ */

const menuToggle = document.querySelector(".menu-toggle");
const mobileNav = document.querySelector(".mobile-nav");
const mobileLinks = mobileNav.querySelectorAll("a");

function setMenuState(isOpen) {
  menuToggle.setAttribute("aria-expanded", String(isOpen));

  menuToggle.setAttribute(
    "aria-label",
    isOpen ? "Close navigation menu" : "Open navigation menu"
  );

  mobileNav.hidden = !isOpen;
}

// Open or close when the button is clicked.

menuToggle.addEventListener("click", () => {
  const isOpen =
    menuToggle.getAttribute("aria-expanded") === "true";

  setMenuState(!isOpen);
});

// Close when a navigation link is selected.

mobileLinks.forEach((link) => {
  link.addEventListener("click", () => {
    setMenuState(false);
  });
});

// Close when Escape is pressed.

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !mobileNav.hidden) {
    setMenuState(false);
    menuToggle.focus();
  }
});

// Reset when returning to desktop width.

const desktopQuery = window.matchMedia("(min-width: 801px)");

desktopQuery.addEventListener("change", (event) => {
  if (event.matches) {
    setMenuState(false);
  }
});



// Current year

const currentYear = document.querySelector("#current-year");

if (currentYear) {
  currentYear.textContent = new Date().getFullYear();
}