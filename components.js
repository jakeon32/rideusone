/**
 * RIDEUS - Common Components
 * GNB, Sticky Tabs, Footer, Mobile Menu를 동적으로 렌더링
 */

// 현재 페이지 감지
function getCurrentPage() {
    const path = window.location.pathname;
    const page = path.split('/').pop() || 'index.html';
    return page === '' ? 'index.html' : page;
}

// 메뉴 데이터
const menuItems = [
    { href: 'theme-park.html', label: '테마파크' },
    { href: 'ski-resort.html', label: '스키장' },
    { href: 'shopping.html', label: '쇼핑' },
    { href: 'custom-tour.html', label: '맞춤투어' },
    { href: 'concert.html', label: '콘서트' }
];

// 탭 데이터
const tabItems = [
    { href: 'index.html', label: '홈' },
    { href: 'theme-park.html', label: '테마파크' },
    { href: 'ski-resort.html', label: '스키장' },
    { href: 'shopping.html', label: '쇼핑' },
    { href: 'custom-tour.html', label: '맞춤투어' },
    { href: 'concert.html', label: '콘서트' }
];

// GNB 렌더링
function renderNavigation() {
    const currentPage = getCurrentPage();
    const nav = document.getElementById('main-nav');
    if (!nav) return;

    // 메뉴 링크 생성
    const menuLinks = menuItems.map(item => {
        const isActive = currentPage === item.href;
        const activeClass = isActive ? 'text-primary' : 'hover:text-primary';
        const whitespaceClass = '';
        return `<a href="${item.href}" class="${activeClass} transition${whitespaceClass}">${item.label}</a>`;
    }).join('\n                    ');

    nav.className = 'fixed top-0 w-full z-50 transition-all duration-300 bg-transparent';
    nav.innerHTML = `
        <div class="max-w-7xl mx-auto px-[1.2rem] sm:px-6 h-16 sm:h-20 flex items-center justify-between">
            <div class="flex items-center space-x-4 sm:space-x-10">
                <a href="index.html">
                    <img src="./images/rideuslogo.png" alt="RIDEUS"
                        class="h-7 sm:h-8 md:h-10 cursor-pointer object-contain brightness-0 invert transition-all"
                        id="main-logo" />
                </a>
                <!-- Desktop Menu -->
                <div id="nav-links"
                    class="hidden md:flex items-center space-x-4 lg:space-x-8 text-sm lg:text-base font-bold text-white transition-colors duration-300">
                    ${menuLinks}
                </div>
            </div>

            <div class="flex items-center space-x-2 sm:space-x-4">
                <div id="lang-selector"
                    class="hidden lg:flex items-center space-x-1 text-xs sm:text-sm font-bold border rounded-full px-3 xl:px-4 py-1.5 transition border-white/30 text-white hover:bg-white/10 cursor-pointer">
                    <i data-lucide="globe" class="w-3.5 xl:w-4 h-3.5 xl:h-4"></i>
                    <span>한국어</span>
                    <span class="mx-1">|</span>
                    <span>KRW</span>
                </div>
                <i id="menu-icon" data-lucide="menu"
                    class="md:hidden w-6 h-6 cursor-pointer text-white transition-colors duration-300"
                    onclick="openMenu()"></i>
                <div id="mobile-menu-btn" class="hidden w-6 h-6"></div>
            </div>
        </div>
    `;
}

// Sticky Tabs 렌더링
function renderStickyTabs() {
    const currentPage = getCurrentPage();
    const tabs = document.getElementById('sticky-tabs');
    if (!tabs) return;

    // 랜딩 페이지(index.html)에서는 탭 숨김
    if (currentPage === 'index.html') {
        tabs.style.display = 'none';
        return;
    }

    // 탭 링크 생성
    const tabLinks = tabItems.map(item => {
        const isActive = currentPage === item.href;
        const tabClass = isActive ? 'btn-tab-active' : 'btn-tab';
        return `<a href="${item.href}" class="${tabClass}">${item.label}</a>`;
    }).join('\n                ');

    tabs.className = 'sticky-tabs';
    tabs.innerHTML = `
        <div class="container-responsive overflow-x-auto no-scrollbar">
            <div class="tabs-container">
                ${tabLinks}
            </div>
        </div>
    `;
}

// Footer 렌더링
function renderFooter() {
    const footer = document.getElementById('main-footer');
    if (!footer) return;

    footer.className = 'bg-white border-t border-slate-100 py-12 sm:py-16 lg:py-24 px-[1.2rem] sm:px-6 lg:px-8';
    footer.innerHTML = `
        <div class="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 lg:gap-20">
            <div class="col-span-2 sm:col-span-2 lg:col-span-1">
                <div class="text-2xl sm:text-3xl font-black text-primary tracking-tighter mb-6 sm:mb-8">RIDEUS</div>
                <p class="text-slate-400 text-xs sm:text-sm leading-relaxed font-bold max-w-xs">
                    여행의 설렘이 이동의 피로로 바래지 않도록. <br />
                    라이더스가 당신의 여정을 편안하게 지켜드립니다.
                </p>
            </div>
            <div class="text-center lg:text-left">
                <h5 class="text-slate-900 text-xs font-black mb-6 sm:mb-8 uppercase tracking-widest">Services</h5>
                <ul class="text-slate-500 text-xs sm:text-sm space-y-3 sm:space-y-4 font-bold">
                    <li class="hover:text-primary cursor-pointer transition">셔틀 버스 노선</li>
                    <li class="hover:text-primary cursor-pointer transition">프라이빗 이동 예약</li>
                    <li class="hover:text-primary cursor-pointer transition">전국 관광택시 투어</li>
                    <li class="hover:text-primary cursor-pointer transition">기업 제휴 문의</li>
                </ul>
            </div>
            <div class="text-center lg:text-left">
                <h5 class="text-slate-900 text-xs font-black mb-6 sm:mb-8 uppercase tracking-widest">Support</h5>
                <ul class="text-slate-500 text-xs sm:text-sm space-y-3 sm:space-y-4 font-bold">
                    <li class="hover:text-primary cursor-pointer transition font-black text-primary">자주 묻는 질문 (FAQ)</li>
                    <li class="hover:text-primary cursor-pointer transition">고객센터 1:1 채팅</li>
                    <li class="hover:text-primary cursor-pointer transition">이용약관</li>
                    <li class="hover:text-primary cursor-pointer transition text-slate-900">개인정보처리방침</li>
                </ul>
            </div>
            <div
                class="bg-slate-50 p-6 sm:p-8 rounded-3xl border border-slate-100 col-span-2 sm:col-span-2 lg:col-span-1">
                <h5 class="text-slate-900 text-xs font-black mb-4 sm:mb-6 uppercase tracking-widest text-center">Contact
                    Us
                </h5>
                <div class="text-center">
                    <span class="block text-xl sm:text-2xl font-black text-slate-900 mb-2">1234-5678</span>
                    <p class="text-xs text-slate-400 font-bold mb-4 sm:mb-6">MON-FRI 09:00 - 18:00 (KST)</p>
                    <button
                        class="w-full bg-white border border-slate-200 py-2.5 sm:py-3 rounded-xl font-black text-xs hover:bg-slate-50 transition shadow-sm">
                        카카오톡 실시간 상담
                    </button>
                </div>
            </div>
        </div>
        <div
            class="max-w-7xl mx-auto mt-12 sm:mt-16 lg:mt-20 pt-8 sm:pt-10 border-t border-slate-50 flex flex-col md:flex-row justify-between items-center text-xs text-slate-400 font-black uppercase tracking-widest gap-4 sm:gap-6">
            <p>&copy; 2026 RIDEUS ALL RIGHTS RESERVED.</p>
            <div class="flex space-x-6 sm:space-x-10">
                <span class="flex items-center">
                    <i data-lucide="globe" class="w-3 h-3 mr-2"></i> Global Office
                </span>
                <span>Partnership</span>
            </div>
        </div>
    `;
}

// Mobile Menu 렌더링
function renderMobileMenu() {
    const currentPage = getCurrentPage();
    const menu = document.getElementById('mobile-menu');
    if (!menu) return;

    // 모바일 메뉴 항목 생성
    const mobileMenuItems = [
        { href: 'index.html', label: '홈' },
        ...menuItems
    ];

    const menuListItems = mobileMenuItems.map(item => {
        const isActive = currentPage === item.href;
        const activeClass = isActive ? 'text-slate-900' : 'hover:text-primary text-slate-300';
        return `<li class="${activeClass} transition cursor-pointer" onclick="location.href='${item.href}'">${item.label}</li>`;
    }).join('\n            ');

    menu.className = 'fixed inset-0 bg-white z-[100] p-[1.2rem] sm:p-8 flex flex-col animate-fade-in hidden';
    menu.innerHTML = `
        <div class="flex justify-between items-center mb-16">
            <div class="text-3xl font-black text-primary tracking-tighter">RIDEUS</div>
            <i id="close-menu-btn" data-lucide="x" class="w-8 h-8 cursor-pointer text-slate-900" onclick="closeMenu()"></i>
        </div>
        <ul class="space-y-10 text-3xl font-black">
            ${menuListItems}
            <li class="pt-10 text-sm font-black text-slate-400 flex items-center">
                <i data-lucide="globe" class="w-4 h-4 mr-2"></i> KR | KRW
            </li>
        </ul>
    `;
}

// 모든 공통 컴포넌트 초기화
function initComponents() {
    renderNavigation();
    renderStickyTabs();
    renderFooter();
    renderMobileMenu();

    // Lucide 아이콘 재초기화 (동적으로 추가된 요소들에 적용)
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
}

// DOM 로드 완료 시 컴포넌트 초기화
document.addEventListener('DOMContentLoaded', initComponents);
