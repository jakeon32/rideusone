// Initialize Lucide Icons
lucide.createIcons();

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
