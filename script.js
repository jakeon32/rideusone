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

// ===== Hero Search Bar Logic ===== //

// State
let currentCategory = null;
let currentDestination = null;
let departureDate = null;
let returnDate = null;

// Data
const categories = {
    'theme-park': {
        label: '테마파크',
        icon: 'castle',
        bg: 'bg-orange-50',
        items: ['에버랜드', '롯데월드', '경주월드', '이월드', '레고랜드']
    },
    'ski-resort': {
        label: '스키장',
        icon: 'snowflake',
        bg: 'bg-blue-50',
        items: ['하이원리조트', '비발디파크', '휘닉스 평창', '용평리조트', '엘리시안 강촌', '알펜시아']
    },
    'shopping': {
        label: '쇼핑',
        icon: 'shopping-bag',
        bg: 'bg-green-50',
        items: ['신세계 사이먼 파주', '신세계 사이먼 여주', '롯데 프리미엄 이천']
    },
    'custom-tour': {
        label: '맞춤투어',
        icon: 'map',
        bg: 'bg-yellow-50',
        items: ['제주 프라이빗 투어', '강원도 힐링 투어', '부산 식도락 투어']
    },
    'concert': {
        label: '콘서트',
        icon: 'music',
        bg: 'bg-purple-50',
        items: ['인스파이어 아레나', 'KSPO DOME', '고척 스카이돔', '잠실 주경기장']
    }
};

// Elements

const destinationModal = document.getElementById('destination-modal');

const destStep1 = document.getElementById('dest-step-1');
const destStep2 = document.getElementById('dest-step-2');
const selectedCategoryTitle = document.getElementById('selected-category-title');
const subItemList = document.getElementById('sub-item-list');
const searchDestinationValue = document.getElementById('search-destination-value');
const searchDateValue = document.getElementById('search-date-value');
const searchReturnDateValue = document.getElementById('search-return-date-value');
const returnSection = document.getElementById('return-section');
const addReturnBtnContainer = document.getElementById('add-return-btn-container');
const returnDateDisplay = document.getElementById('return-date-display');
const modalReturnDateContainer = document.getElementById('modal-return-date-container');

const departureDateInput = document.getElementById('departure-date-input');
const returnDateInput = document.getElementById('return-date-input');

// Flatpickr instances
let departurePicker;
let returnPicker;

// Init
function initSearch() {
    initPickers();
    renderCategories();
}

function initPickers() {
    departurePicker = flatpickr(departureDateInput, {
        dateFormat: "Y-m-d",
        minDate: "today",
        position: "above",
        onChange: function (selectedDates, dateStr, instance) {
            handleDateChange('departure', dateStr);
            if (returnPicker) {
                returnPicker.set('minDate', dateStr);
            }
        }
    });

    returnPicker = flatpickr(returnDateInput, {
        dateFormat: "Y-m-d",
        minDate: "today",
        position: "above",
        onChange: function (selectedDates, dateStr, instance) {
            handleDateChange('return', dateStr);
        }
    });
}

function renderCategories() {
    destStep1.innerHTML = Object.entries(categories).map(([key, cat]) => `
        <div class="category-card" onclick="selectCategory('${key}')">
            <div class="p-4 ${cat.bg} rounded-2xl border border-transparent hover:border-gray-200 transition cursor-pointer text-center group h-full flex flex-col items-center justify-center">
                <i data-lucide="${cat.icon}" class="w-8 h-8 mx-auto mb-3 text-gray-500 group-hover:text-primary transition"></i>
                <span class="font-bold text-gray-700 group-hover:text-gray-900 block">${cat.label}</span>
            </div>
        </div>
    `).join('');
    lucide.createIcons();
}

// Modal Functions
function openDestinationModal() {
    destinationModal.classList.remove('hidden');
    destinationModal.classList.add('flex');
    setTimeout(() => {
        const content = document.getElementById('destination-modal-content');
        if (content) {
            content.classList.remove('translate-y-full', 'opacity-0', 'scale-95');
            content.classList.add('translate-y-0', 'opacity-100', 'scale-100');
        }
    }, 10);
}

function closeDestinationModal(e) {
    if (e && e.target !== destinationModal && !e.target.closest('[onclick="closeDestinationModal()"]')) return;

    const content = document.getElementById('destination-modal-content');
    if (content) {
        content.classList.remove('translate-y-0', 'opacity-100', 'scale-100');
        content.classList.add('translate-y-full', 'opacity-0', 'scale-95');
    }

    setTimeout(() => {
        destinationModal.classList.add('hidden');
        destinationModal.classList.remove('flex');
    }, 300);
}

function backToCategories() {
    destStep2.classList.add('hidden');
    destStep1.classList.remove('hidden');
}

function openDatePicker(type) {
    if (type === 'departure' && departurePicker) {
        departurePicker.open(); // Flatpickr open
    } else if (type === 'return' && returnPicker) {
        returnPicker.open(); // Flatpickr open
    }
}





// Selection Logic
function selectCategory(key) {
    currentCategory = key;
    const cat = categories[key];
    selectedCategoryTitle.textContent = cat.label;

    // Check if we need to show/hide return section in main bar immediately?
    // User requested: "스키와 공연/이벤트는 선택하면 오는날 선택도 생겨서"
    updateReturnSectionVisibility();

    // Render Sub Items
    subItemList.innerHTML = cat.items.map(item => `
        <div onclick="selectSubItem('${item}')" class="p-3 bg-gray-50 rounded-xl hover:bg-primary hover:text-white cursor-pointer transition flex items-center justify-between group">
            <span class="font-bold">${item}</span>
            <i data-lucide="chevron-right" class="w-4 h-4 text-gray-400 group-hover:text-white"></i>
        </div>
    `).join('');
    lucide.createIcons();

    destStep1.classList.add('hidden');
    destStep2.classList.remove('hidden');
}

function selectSubItem(item) {
    currentDestination = item;
    searchDestinationValue.textContent = item;
    searchDestinationValue.classList.remove('text-gray-400'); // If we had placeholder styling
    searchDestinationValue.classList.add('text-primary');

    closeDestinationModal();

    // Auto open date picker departure
    setTimeout(() => openDatePicker('departure'), 300);
}

function updateReturnSectionVisibility() {
    if (currentCategory === 'ski-resort' || currentCategory === 'concert' || currentCategory === 'theme-park') {
        returnSection.classList.remove('hidden');
        // Initial state: "Add Return" is text, button is shown. 
        // returnDateDisplay is hidden unless returnDate is set.
        if (returnDate) {
            addReturnBtnContainer.classList.add('hidden');
            returnDateDisplay.classList.remove('hidden');
        } else {
            addReturnBtnContainer.classList.remove('hidden');
            returnDateDisplay.classList.add('hidden');
        }
    } else {
        returnSection.classList.add('hidden');
        returnDate = null; // Reset return date
        searchReturnDateValue.textContent = '오는 날 선택';
    }
}

// Date Logic
function handleDateChange(type, dateStr) {
    if (type === 'departure') {
        const val = dateStr;
        if (val) {
            departureDate = val;
            searchDateValue.textContent = formatDisplayDate(val);
            searchDateValue.classList.add('text-gray-900');
            searchDateValue.classList.remove('text-gray-400');
        }
    } else if (type === 'return') {
        const val = dateStr;
        if (val) {
            returnDate = val;
            searchReturnDateValue.textContent = formatDisplayDate(val);
            addReturnBtnContainer.classList.add('hidden');
            returnDateDisplay.classList.remove('hidden');
        }
    }
}

// Old confirm logic removed, replaced by direct handleDateChange
// function confirmDateSelection() ... removed

function formatDisplayDate(dateStr) {
    const d = new Date(dateStr);
    const month = d.getMonth() + 1;
    const day = d.getDate();
    return `${month}월 ${day}일`;
}

// Add Return Button Logic (in main bar)
if (addReturnBtnContainer) {
    addReturnBtnContainer.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevent bubbling to parent click
        openDatePicker('return');
    });
}

// Search Logic
function performSearch() {
    if (!currentCategory) {
        alert('목적지를 선택해주세요.');
        return;
    }

    // Navigate based on category
    // For MVP just standard link logic
    const links = {
        'theme-park': 'theme-park.html',
        'ski-resort': 'ski-resort.html',
        'concert': 'concert.html',
        'shopping': 'shopping.html',
        'custom-tour': 'custom-tour.html'
    };

    const url = links[currentCategory] || 'index.html';
    // Append params if needed: ?dest=...&date=...
    location.href = url;
}


// Initialize
// document.addEventListener('DOMContentLoaded', initSearch); // already running script at bottom of body
initSearch();
initHeroSlider();

function initHeroSlider() {
    const slides = document.querySelectorAll('.hero-slide');
    if (slides.length < 2) return;

    let currentIndex = 0;

    setInterval(() => {
        // Current slide fade out
        slides[currentIndex].classList.remove('opacity-90');
        slides[currentIndex].classList.add('opacity-0');

        // Next slide index
        currentIndex = (currentIndex + 1) % slides.length;

        // Next slide fade in
        slides[currentIndex].classList.remove('opacity-0');
        slides[currentIndex].classList.add('opacity-90');
    }, 3000);
}
