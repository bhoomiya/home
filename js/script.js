// ===================================
// 1. COLLAPSIBLE MENU FUNCTIONALITY
// ===================================

const menuToggle = document.getElementById('menu-toggle');
const sidebarMenu = document.getElementById('sidebar-menu');

// Event listener to open/close the mobile menu
menuToggle.addEventListener('click', () => {
    // Toggle the 'open' class on the menu button
    menuToggle.classList.toggle('open');
    // Toggle the 'active' class on the sidebar to show/hide it
    sidebarMenu.classList.toggle('active');
});


// ===================================
// 2. RETRO TYPEWRITER EFFECT
// ===================================

const textToType = "Hobbyist Game & AR/VR Development Studio";
const element = document.getElementById('typewriter-text');
let i = 0; // Index counter

/**
 * Function that simulates typing out text character by character.
 */
function typeWriter() {
    if (i < textToType.length) {
        // Add the next character to the element's inner HTML
        element.innerHTML += textToType.charAt(i);
        i++;
        // Set a timeout to call the function again after a delay (70ms = speed)
        setTimeout(typeWriter, 70); 
    }
}

// Start the typewriter effect when the entire page content is loaded
document.addEventListener('DOMContentLoaded', typeWriter);


// ===================================
// 3. BACKDROP HOVER EFFECT
// ===================================

const menuLinks = document.querySelectorAll('.nav-menu a'); // Select all links in the nav menu
const body = document.body;

menuLinks.forEach(link => {
    // When the mouse enters (hovers over) the link
    link.addEventListener('mouseenter', () => {
        // Only apply the effect on desktop (where the menu is not collapsed)
        if (window.innerWidth >= 768) {
             body.classList.add('menu-hovering');
        }
    });

    // When the mouse leaves the link
    link.addEventListener('mouseleave', () => {
        if (window.innerWidth >= 768) {
            // Delay to prevent flickering when moving between links
            setTimeout(() => {
                 // Only remove the class if the mouse isn't hovering over *any* menu link
                 if (!Array.from(menuLinks).some(l => l.matches(':hover'))) {
                    body.classList.remove('menu-hovering');
                }
            }, 50); 
        }
    });
});