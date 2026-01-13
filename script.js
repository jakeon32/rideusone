// Initialize Lucide Icons
lucide.createIcons();

// ====================================
// Page Transition with View Transitions API
// ====================================

// Check if browser supports View Transitions API
function supportsViewTransitions() {
    return 'startViewTransition' in document;
}

// Add page transition to all internal links
function setupPageTransitions() {
    // Get all anchor links
    const links = document.querySelectorAll('a[href]');

    links.forEach(link => {
        const href = link.getAttribute('href');

        // Check if it's an internal link (not external, not anchor)
        if (href &&
            !href.startsWith('http') &&
            !href.startsWith('#') &&
            !href.startsWith('mailto:') &&
            !href.startsWith('tel:')) {

            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetUrl = link.href;

                // Use View Transitions API if supported
                if (supportsViewTransitions()) {
                    document.startViewTransition(() => {
                        window.location.href = targetUrl;
                    });
                } else {
                    // Fallback: Simple fade effect
                    document.body.style.opacity = '0';
                    setTimeout(() => {
                        window.location.href = targetUrl;
                    }, 200);
                }
            });
        }
    });
}

// Page load animation
window.addEventListener('DOMContentLoaded', () => {
    // Fade in when page loads
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.3s ease-in-out';
        document.body.style.opacity = '1';
    }, 10);
});

// Initialize page transitions
setupPageTransitions();

// Sticky Header
const nav = document.getElementById('main-nav');
const logoImg = document.getElementById('main-logo');
const navLinks = document.getElementById('nav-links');
const langSelector = document.getElementById('lang-selector');
const menuIcon = document.getElementById('menu-icon');


// Sticky Header & Navigation Logic
let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;

    // GNB Auto-Hide Logic
    if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling Down & Past top: Hide GNB
        nav.classList.add('-translate-y-full');
    } else {
        // Scrolling Up or at Top: Show GNB
        nav.classList.remove('-translate-y-full');
    }

    // Sticky Header Style Logic (Only applies when GNB is visible)
    if (currentScrollY > 20) {
        nav.classList.add('bg-white', 'shadow-md');
        nav.classList.remove('bg-transparent');

        // Sticky State: Original Color (Remove filters)
        logoImg.classList.remove('brightness-0', 'invert');

        navLinks.classList.remove('text-white');
        navLinks.classList.add('text-slate-600');

        langSelector.classList.remove('border-white/30', 'text-white', 'hover:bg-white/10');
        langSelector.classList.add('border-slate-200', 'text-slate-600', 'hover:bg-slate-50');

        menuIcon.classList.remove('text-white');
        menuIcon.classList.add('text-slate-900');
    } else {
        nav.classList.remove('bg-white', 'shadow-md');
        nav.classList.add('bg-transparent');

        // Hero State: White Color (Apply filters)
        logoImg.classList.add('brightness-0', 'invert');

        navLinks.classList.add('text-white');
        navLinks.classList.remove('text-slate-600');

        langSelector.classList.add('border-white/30', 'text-white', 'hover:bg-white/10');
        langSelector.classList.remove('border-slate-200', 'text-slate-600', 'hover:bg-slate-50');

        menuIcon.classList.add('text-white');
        menuIcon.classList.remove('text-slate-900');
    }

    lastScrollY = currentScrollY;
});

// Mobile Menu
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const closeMenuBtn = document.getElementById('close-menu-btn');

function openMenu() {
    mobileMenu.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function closeMenu() {
    mobileMenu.classList.add('hidden');
    document.body.style.overflow = '';
}

if (mobileMenuBtn) mobileMenuBtn.addEventListener('click', openMenu);
if (closeMenuBtn) closeMenuBtn.addEventListener('click', closeMenu);
