// Select navbar
const navbar = document.querySelector(".nav_list");

// Create mobile menu toggle button
const menuToggle = document.createElement("div");
menuToggle.id = "menu_toggle";
menuToggle.classList.add("menu_toggle");
menuToggle.textContent = "☰"; // Hamburger icon
document.body.appendChild(menuToggle);

// Scroll thresholds
let startScroll = 0.05 * window.innerHeight; // Start darkening after 80% viewport
let fadeDistance = window.innerHeight;     // Distance over which darkening occurs

// Function to update navbar background and blur
function updateNavbar() {
    const scrollY = window.scrollY;

    // Start from subtle initial opacity
    let opacity = 0.1;

    if (scrollY > startScroll) {
        opacity = Math.min(
            0.1 + (scrollY - startScroll) / fadeDistance,
            1
        );
    }

    // Apply only if mobile menu is NOT open
    if (!navbar.classList.contains("open")) {
        navbar.style.backgroundColor = `rgba(255, 253, 255, ${opacity})`;
        navbar.style.backdropFilter = `blur(${0.8 + (opacity - 0.1)}vh)`;
    }
}

// Scroll events
window.addEventListener("scroll", updateNavbar);
window.addEventListener("load", updateNavbar);
window.addEventListener("hashchange", updateNavbar);

// Update thresholds on resize
window.addEventListener("resize", () => {
    startScroll = 0.8 * window.innerHeight;
    fadeDistance = window.innerHeight;
    updateNavbar();
});



// Toggle mobile menu open/close
menuToggle.addEventListener("click", () => {
    navbar.classList.toggle("open");

    // When mobile menu opens, ensure navbar is fully opaque
    if (navbar.classList.contains("open")) {
        navbar.style.backgroundColor = `rgba(203, 203, 203, 0.3)`;
        navbar.style.backdropFilter = `blur(0.5vh)`;
    } else {
        // If menu closes, revert to scroll-based style
        updateNavbar();
    }
});
