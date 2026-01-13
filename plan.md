```markdown
# 여행 교통 서비스 쇼케이스 웹사이트 기획서

## 1. 프로젝트 개요

### 목적
- B2C 감성의 OTA 스타일 회사소개 사이트 (클룩 Klook 스타일 참조)
- 과거~현재 운영 서비스 포트폴리오 전시
- 실제 예약 사이트로의 자연스러운 연결

### 타겟
- 1차: 잠재 파트너사, B2B 클라이언트
- 2차: 일반 여행객 (직접 예약 가능성)

### 기술 스택
- Frontend: React/Next.js
- Styling: Tailwind CSS
- 이미지: Google Imagen 3 (필요시)

---

## 2. 사이트 구조

```
/ (Landing)
├─ /category/theme-park
├─ /category/ski-resort
├─ /category/shopping
├─ /category/custom-tour
├─ /category/concert
├─ /about
└─ /contact
```

---

## 3. 디자인 시스템 (클룩 스타일)

### 3.1 컬러 팔레트

```
Primary: #FF6B35 (Coral Orange) - 메인 CTA, 강조
Secondary: #4ECDC4 (Turquoise) - 포인트, 아이콘
Accent: #FFE66D (Yellow) - 뱃지, 하이라이트
Success: #95E1D3 (Mint) - 운영중 상태
Neutral: #9CA3AF (Gray) - 종료 상태

Background: #FFFFFF
Light Background: #F7F9FC
Text Primary: #1F2937
Text Secondary: #6B7280
```

### 3.2 Tailwind 컴포넌트 스타일

**카드:**
```
bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-6
```

**Primary Button:**
```
bg-[#FF6B35] text-white px-8 py-3 rounded-full font-semibold 
hover:bg-[#E65A2B] transition-all shadow-lg hover:shadow-xl
```

**Secondary Button:**
```
bg-white border-2 border-[#FF6B35] text-[#FF6B35] px-8 py-3 rounded-full 
font-semibold hover:bg-[#FFF5F0] transition-all
```

**운영중 뱃지:**
```
inline-flex items-center px-3 py-1 rounded-full text-sm font-medium 
bg-[#95E1D3] text-[#1A5653]
```

**종료 뱃지:**
```
inline-flex items-center px-3 py-1 rounded-full text-sm font-medium 
bg-gray-200 text-gray-700
```

**서비스 타입 뱃지:**
```
inline-flex items-center px-3 py-1 rounded-full text-xs font-medium 
bg-[#FFE66D] text-[#8B6914]
```

### 3.3 타이포그래피

```
Korean: Pretendard or Noto Sans KR
English: Inter or SF Pro Display

Heading 1: text-5xl (48px) / font-bold
Heading 2: text-4xl (36px) / font-bold
Heading 3: text-2xl (24px) / font-semibold
Body Large: text-lg (18px) / font-normal
Body: text-base (16px) / font-normal
Small: text-sm (14px) / font-normal
Tiny: text-xs (12px) / font-medium
```

### 3.4 간격 시스템

```
Section Padding Y: py-20 (Desktop) / py-12 (Mobile)
Section Padding X: px-6 (max-w-7xl mx-auto)
Card Gap: gap-6
Container Max Width: max-w-7xl (1280px)
```

### 3.5 반응형 브레이크포인트

```
sm: 640px   (Mobile Large)
md: 768px   (Tablet)
lg: 1024px  (Desktop)
xl: 1280px  (Desktop Large)
```

---

## 4. 페이지별 상세 기획

### 4.1 Landing Page (/)

#### Hero Section

**목표:**
- 첫 인상에서 브랜드 감성 전달
- 명확한 서비스 소개
- 행동 유도 (CTA)

**레이아웃:**
```
- Full viewport height (min-h-screen)
- 배경: 고품질 여행 이미지 with 밝은 그라데이션 오버레이
- 중앙 정렬 텍스트
- CTA 버튼 2개 (Primary + Secondary)
```

**HTML 구조 예시:**
```jsx
<section className="relative min-h-screen flex items-center justify-center">
  {/* Background with Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B35]/10 to-[#4ECDC4]/10">
    <img 
      src="hero-image.jpg" 
      className="w-full h-full object-cover opacity-30" 
      alt="Travel background"
    />
  </div>
  
  {/* Content */}
  <div className="relative z-10 text-center px-6 max-w-4xl">
    <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
      떠나고 싶은 순간, 우리가 데려다 드립니다
    </h1>
    <p className="text-xl md:text-2xl text-gray-600 mb-10">
      테마파크부터 스키장, 콘서트까지 - 모든 여행의 시작
    </p>
    <div className="flex gap-4 justify-center flex-wrap">
      <button className="bg-[#FF6B35] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#E65A2B] transition-all shadow-lg hover:shadow-xl text-lg">
        서비스 둘러보기
      </button>
      <button className="bg-white border-2 border-[#FF6B35] text-[#FF6B35] px-8 py-4 rounded-full font-semibold hover:bg-[#FFF5F0] transition-all text-lg">
        문의하기
      </button>
    </div>
  </div>
</section>
```

**다국어 텍스트:**
```
KR Main: "떠나고 싶은 순간, 우리가 데려다 드립니다"
EN Main: "Every Journey Starts With Us"

KR Sub: "테마파크부터 스키장, 콘서트까지 - 모든 여행의 시작"
EN Sub: "Theme Parks, Ski Resorts, Concerts & More"

KR CTA Primary: "서비스 둘러보기"
EN CTA Primary: "Explore Services"

KR CTA Secondary: "문의하기"
EN CTA Secondary: "Contact Us"
```

---

#### Categories Section

**목표:**
- 6개 주요 카테고리 한눈에 보여주기
- 클릭 유도 (각 카테고리 상세로 이동)
- 서비스 규모 암시 (카드 개수)

**레이아웃:**
```
- Container: max-w-7xl mx-auto px-6 py-20
- Grid: grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6
- 각 카드: 4:3 비율, hover animation
```

**섹션 헤더:**
```jsx
<div className="text-center mb-12">
  <h2 className="text-4xl font-bold text-gray-900 mb-4">
    다양한 여행 교통 서비스
  </h2>
  <p className="text-lg text-gray-600">
    당신의 모든 여행을 더 편하게
  </p>
</div>
```

**카드 컴포넌트:**
```jsx
<div className="group cursor-pointer">
  <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
    
    {/* Image Section */}
    <div className="relative h-48 overflow-hidden">
      <img 
        src="category-image.jpg" 
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        alt="Category"
      />
      
      {/* Badge */}
      <div className="absolute top-4 right-4">
        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-[#FFE66D] text-[#8B6914]">
          셔틀/프라이빗
        </span>
      </div>
    </div>
    
    {/* Content Section */}
    <div className="p-6">
      <h3 className="text-2xl font-bold text-gray-900 mb-2">
        테마파크
      </h3>
      <p className="text-gray-600 mb-4 line-clamp-2">
        에버랜드, 경주월드 등 주요 테마파크 왕복 교통
      </p>
      <div className="flex items-center justify-between">
        <span className="text-sm text-gray-500">2개 서비스</span>
        <span className="text-[#FF6B35] font-semibold group-hover:translate-x-2 transition-transform inline-flex items-center gap-1">
          자세히 보기 
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </span>
      </div>
    </div>
    
  </div>
</div>
```

**카테고리 데이터:**

**1. 테마파크**
```json
{
  "id": "theme-park",
  "slug": "theme-park",
  "titleKR": "테마파크",
  "titleEN": "Theme Parks",
  "descriptionKR": "에버랜드, 경주월드 등 주요 테마파크 왕복 교통",
  "descriptionEN": "Major theme parks shuttle & private transfer",
  "badge": "셔틀/프라이빗",
  "badgeEN": "Shuttle/Private",
  "serviceCount": 2,
  "image": "theme-park-hero.jpg"
}
```

**2. 스키리조트**
```json
{
  "id": "ski-resort",
  "slug": "ski-resort",
  "titleKR": "스키리조트",
  "titleEN": "Ski Resorts",
  "descriptionKR": "겨울 시즌 전국 주요 스키장 편안한 이동",
  "descriptionEN": "Winter season ski resort transportation",
  "badge": "셔틀/프라이빗",
  "badgeEN": "Shuttle/Private",
  "serviceCount": 6,
  "image": "ski-resort-hero.jpg"
}
```

**3. 쇼핑**
```json
{
  "id": "shopping",
  "slug": "shopping",
  "titleKR": "쇼핑",
  "titleEN": "Shopping",
  "descriptionKR": "프리미엄 아울렛 쇼핑 전용 프라이빗 서비스",
  "descriptionEN": "Premium outlet shopping private service",
  "badge": "프라이빗 전용",
  "badgeEN": "Private Only",
  "serviceCount": 1,
  "image": "shopping-hero.jpg"
}
```

**4. 커스텀 투어**
```json
{
  "id": "custom-tour",
  "slug": "custom-tour",
  "titleKR": "커스텀 투어",
  "titleEN": "Custom Tour",
  "descriptionKR": "원하는 일정과 코스로 자유롭게 구성하는 맞춤 여행",
  "descriptionEN": "Personalized itinerary with flexible routes",
  "badge": "프라이빗",
  "badgeEN": "Private",
  "serviceCount": 3,
  "image": "custom-tour-hero.jpg"
}
```

**5. 공연/이벤트**
```json
{
  "id": "concert",
  "slug": "concert",
  "titleKR": "공연/이벤트",
  "titleEN": "Concerts & Events",
  "descriptionKR": "SBS가요대전, K-POP 콘서트 등 시즌 이벤트 교통",
  "descriptionEN": "Seasonal concerts & special events transportation",
  "badge": "시즌 운영",
  "badgeEN": "Seasonal",
  "serviceCount": 4,
  "image": "concert-hero.jpg"
}
```

---

#### Featured Section

**목표:**
- 시즌별/이벤트성 콘텐츠 강조
- 브랜드 임팩트 전달
- 사용자 관심 유도

**레이아웃:**
```
- Container: max-w-7xl mx-auto px-6 py-20 bg-[#F7F9FC]
- 수평 스크롤 or 캐러셀
- 카드 크기: 16:9 비율 (더 큰 카드)
```

**섹션 헤더:**
```jsx
<div className="mb-12">
  <h2 className="text-4xl font-bold text-gray-900 mb-2">
    이달의 추천
  </h2>
  <p className="text-lg text-gray-600">
    지금 가장 인기있는 서비스
  </p>
</div>
```

**Featured 카드 예시:**
```jsx
<div className="min-w-[350px] md:min-w-[500px] bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition-all">
  
  {/* Large Image */}
  <div className="relative h-64">
    <img 
      src="featured-image.jpg" 
      className="w-full h-full object-cover"
      alt="Featured"
    />
    
    {/* Overlay Badge */}
    <div className="absolute top-4 left-4">
      <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-bold bg-[#FF6B35] text-white shadow-lg">
        ⭐ 인기
      </span>
    </div>
  </div>
  
  {/* Content */}
  <div className="p-6">
    <span className="text-sm text-[#4ECDC4] font-semibold">겨울 시즌</span>
    <h3 className="text-2xl font-bold text-gray-900 mt-2 mb-3">
      이번 겨울, 스키장으로
    </h3>
    <p className="text-gray-600 mb-4">
      6개 리조트 중 선택하세요. 셔틀과 프라이빗 모두 지원
    </p>
    <button className="text-[#FF6B35] font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all">
      자세히 보기
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
      </svg>
    </button>
  </div>
  
</div>
```

**Featured 콘텐츠 전략:**

**옵션 A - 시즌 기반:**
```
겨울: 스키리조트 + 가요대전 윈터
봄: 테마파크 + 쇼핑
여름: 가요대전 썸머 + 해외 투어
가을: 단풍 투어 + 테마파크
```

**옵션 B - 임팩트 기반:**
```
"10만명이 함께한 블랙핑크 월드투어"
"전국 6개 스키장 동시 운영"
"매년 운영되는 SBS가요대전 공식 교통"
```

---

#### Themes Section

**목표:**
- 크로스 카테고리 큐레이션
- 사용자 목적별 탐색 지원
- 서비스 다양성 강조

**레이아웃:**
```
- Container: max-w-7xl mx-auto px-6 py-20
- Grid: 5개 테마 카드 (Desktop: 5열, Mobile: 수평 스크롤)
- 원형 아이콘 + 텍스트 스타일
```

**섹션 헤더:**
```jsx
<div className="text-center mb-12">
  <h2 className="text-4xl font-bold text-gray-900 mb-4">
    테마별로 찾아보기
  </h2>
  <p className="text-lg text-gray-600">
    당신의 여행 스타일에 맞는 서비스
  </p>
</div>
```

**테마 카드:**
```jsx
<div className="flex flex-col items-center cursor-pointer group">
  
  {/* Icon Circle */}
  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#FF6B35] to-[#E65A2B] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg">
    <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      {/* Icon */}
    </svg>
  </div>
  
  {/* Text */}
  <h3 className="text-lg font-bold text-gray-900 mb-2">
    겨울 여행
  </h3>
  <p className="text-sm text-gray-600 text-center">
    스키장 & 겨울 이벤트
  </p>
  
</div>
```

**테마 목록:**

**1. 겨울 여행**
```
아이콘: 눈송이 ❄️
포함: 전체 스키리조트, SBS가요대전 윈터
```

**2. 가족 나들이**
```
아이콘: 가족 👨‍👩‍👧‍👦
포함: 테마파크 전체, 일부 스키장
```

**3. K-POP 팬**
```
아이콘: 마이크 🎤
포함: 공연/이벤트 전체
```

**4. 커플 데이트**
```
아이콘: 하트 💕
포함: 프리미엄 아울렛, 일부 테마파크
```

**5. 맞춤형 여행**
```
아이콘: 나침반 🧭
포함: 커스텀 투어 전체
```

---

### 4.2 Category Detail Pages

**URL 구조:**
```
/category/theme-park
/category/ski-resort
/category/shopping
/category/custom-tour
/category/concert
```

#### Page Header

**레이아웃:**
```
- Full width hero section
- 배경: 카테고리 대표 이미지 with 다크 오버레이
- 텍스트 중앙/좌측 정렬
```

**구조:**
```jsx
<section className="relative h-[400px] flex items-center">
  
  {/* Background */}
  <div className="absolute inset-0">
    <img 
      src="category-hero.jpg" 
      className="w-full h-full object-cover"
      alt="Category"
    />
    <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30"></div>
  </div>
  
  {/* Content */}
  <div className="relative z-10 max-w-7xl mx-auto px-6 text-white">
    
    {/* Breadcrumb */}
    <div className="flex items-center gap-2 text-sm mb-4 opacity-80">
      <a href="/" className="hover:underline">Home</a>
      <span>/</span>
      <span>스키리조트</span>
    </div>
    
    {/* Title */}
    <h1 className="text-5xl font-bold mb-4">
      스키리조트
    </h1>
    
    {/* Description */}
    <p className="text-xl max-w-2xl leading-relaxed">
      매년 겨울, 전국 주요 스키장으로 안전하고 편안한 이동을 제공합니다. 
      셔틀버스부터 프라이빗 차량까지, 당신의 스타일에 맞는 서비스를 선택하세요.
    </p>
    
    {/* Stats (Optional) */}
    <div className="flex gap-8 mt-6">
      <div>
        <div className="text-3xl font-bold text-[#FFE66D]">6개</div>
        <div className="text-sm opacity-80">운영 리조트</div>
      </div>
      <div>
        <div className="text-3xl font-bold text-[#FFE66D]">15,000+</div>
        <div className="text-sm opacity-80">누적 이용객</div>
      </div>
      <div>
        <div className="text-3xl font-bold text-[#FFE66D]">2019~</div>
        <div className="text-sm opacity-80">운영 시작</div>
      </div>
    </div>
    
  </div>
  
</section>
```

**카테고리별 설명 텍스트:**

**스키리조트:**
```
KR: "매년 겨울, 전국 주요 스키장으로 안전하고 편안한 이동을 제공합니다. 
셔틀버스부터 프라이빗 차량까지, 당신의 스타일에 맞는 서비스를 선택하세요.
2019년부터 누적 15,000명 이상이 이용한 검증된 서비스입니다."

EN: "Safe and comfortable transportation to major ski resorts every winter season.
From shuttle buses to private transfers, choose the service that fits your style.
Trusted by over 15,000+ travelers since 2019."
```

**테마파크:**
```
KR: "국내 주요 테마파크로 가는 가장 편한 방법. 
에버랜드, 경주월드 등 인기 테마파크 왕복 교통을 제공합니다.
가족, 친구, 연인과 함께 즐거운 하루를 시작하세요."

EN: "The most convenient way to major theme parks in Korea.
Round-trip transportation to Everland, Gyeongju World and more.
Start your perfect day with family, friends, and loved ones."
```

**쇼핑:**
```
KR: "프리미엄 아울렛 쇼핑을 위한 전용 프라이빗 서비스.
편안한 차량으로 여유롭게 쇼핑을 즐기세요.
짐이 많아도 걱정 없습니다."

EN: "Exclusive private service for premium outlet shopping.
Enjoy your shopping in comfort with our premium vehicles.
No worries about heavy shopping bags."
```

**커스텀 투어:**
```
KR: "당신만의 여행 코스를 자유롭게 만드세요.
원하는 장소, 원하는 시간, 원하는 스타일로
완벽한 맞춤형 투어를 경험하세요."

EN: "Create your own perfect itinerary.
Your destinations, your schedule, your style.
Experience truly personalized travel."
```

**공연/이벤트:**
```
KR: "K-POP 콘서트, 가요대전, 특별 이벤트까지.
안전하고 편안한 왕복 교통으로 공연을 더 즐겁게.
주차 걱정 없이 오직 공연에만 집중하세요."

EN: "K-POP concerts, music festivals, and special events.
Enjoy the show with safe and comfortable transportation.
No parking worries - just focus on the performance."
```

---

#### Filter & Sort Section

**레이아웃:**
```
- Sticky top bar (스크롤 시 상단 고정)
- 필터 버튼 + 정렬 드롭다운
```

**구조:**
```jsx
<div className="sticky top-0 z-40 bg-white border-b border-gray-200 shadow-sm">
  <div className="max-w-7xl mx-auto px-6 py-4">
    <div className="flex items-center justify-between flex-wrap gap-4">
      
      {/* Filter Buttons */}
      <div className="flex gap-2 flex-wrap">
        <button className="px-4 py-2 rounded-full border-2 border-[#FF6B35] text-[#FF6B35] font-semibold hover:bg-[#FFF5F0] transition">
          전체
        </button>
        <button className="px-4 py-2 rounded-full border-2 border-gray-300 text-gray-600 font-semibold hover:border-gray-400 transition">
          운영중
        </button>
        <button className="px-4 py-2 rounded-full border-2 border-gray-300 text-gray-600 font-semibold hover:border-gray-400 transition">
          종료
        </button>
        <button className="px-4 py-2 rounded-full border-2 border-gray-300 text-gray-600 font-semibold hover:border-gray-400 transition">
          셔틀
        </button>
        <button className="px-4 py-2 rounded-full border-2 border-gray-300 text-gray-600 font-semibold hover:border-gray-400 transition">
          프라이빗
        </button>
      </div>
      
      {/* Results Count */}
      <div className="text-gray-600">
        <span className="font-semibold text-[#FF6B35]">6개</span> 서비스
      </div>
      
    </div>
  </div>
</div>
```

---

#### Service Cards Grid

**레이아웃:**
```
- Container: max-w-7xl mx-auto px-6 py-12
- Grid: grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6
```

**Service Card 구조:**
```jsx
<div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer">
  
  {/* Image */}
  <div className="relative h-56 overflow-hidden">
    <img 
      src="service-image.jpg" 
      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
      alt="Service"
    />
    
    {/* Status Badge */}
    <div className="absolute top-4 left-4">
      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-[#95E1D3] text-[#1A5653]">
        운영중
      </span>
    </div>
    
    {/* Service Type Badges */}
    <div className="absolute top-4 right-4 flex gap-2">
      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-white/90 text-gray-700">
        🚌 셔틀
      </span>
      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-white/90 text-gray-700">
        🚗 프라이빗
      </span>
    </div>
  </div>
  
  {/* Content */}
  <div className="p-6">
    
    {/* Location */}
    <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
      <span>강원 홍천</span>
    </div>
    
    {/* Title */}
    <h3 className="text-2xl font-bold text-gray-900 mb-2">
      비발디파크 스키리조트
    </h3>
    
    {/* Description */}
    <p className="text-gray-600 mb-4 line-clamp-2">
      서울 출발 왕복 셔틀, 리프트권 포함 옵션 제공
    </p>
    
    {/* Period & Price */}
    <div className="flex items-center justify-between mb-4">
      <div className="text-sm text-gray-500">
        📅 2024-2025 시즌
      </div>
      <div className="text-lg font-bold text-[#FF6B35]">
        ₩45,000~
      </div>
    </div>
    
    {/* CTA Button */}
    <button className="w-full bg-[#FF6B35] text-white py-3 rounded-full font-semibold hover:bg-[#E65A2B] transition-all shadow-md hover:shadow-lg">
      예약 사이트 보기
    </button>
    
  </div>
  
</div>
```

---

## 5. 서비스 데이터 구조

### 5.1 전체 서비스 목록

#### Theme Parks (테마파크)

```json
[
  {
    "id": "everland",
    "categoryId": "theme-park",
    "nameKR": "에버랜드",
    "nameEN": "Everland",
    "location": "경기 용인",
    "locationEN": "Yongin, Gyeonggi",
    "status": "active",
    "serviceTypes": ["shuttle", "private"],
    "period": "연중",
    "periodEN": "Year-round",
    "descriptionKR": "국내 최대 테마파크 왕복 교통, 주말/공휴일 운영",
    "descriptionEN": "Round-trip transportation to Korea's largest theme park",
    "priceFrom": 35000,
    "externalUrl": "https://example.com/everland",
    "imageUrl": "/images/services/everland.jpg",
    "features": [
      "주말/공휴일 운영",
      "입장권 패키지 옵션",
      "서울 주요 지역 픽업"
    ],
    "featuresEN": [
      "Weekend & holiday operation",
      "Ticket package options",
      "Seoul major area pickup"
    ]
  },
  {
    "id": "gyeongju-world",
    "categoryId": "theme-park",
    "nameKR": "경주월드",
    "nameEN": "Gyeongju World",
    "location": "경북 경주",
    "locationEN": "Gyeongju, Gyeongbuk",
    "status": "ended",
    "serviceTypes": ["shuttle", "private"],
    "period": "2022-2023",
    "periodEN": "2022-2023",
    "descriptionKR": "경주 대표 테마파크 왕복 셔틀 서비스",
    "descriptionEN": "Round-trip shuttle to Gyeongju's premier theme park",
    "priceFrom": null,
    "externalUrl": "https://example.com/gyeongju-world",
    "imageUrl": "/images/services/gyeongju-world.jpg",
    "features": [
      "주말 운영",
      "경주 관광지 연계",
      "단체 할인"
    ],
    "featuresEN": [
      "Weekend operation",
      "Linked with Gyeongju attractions",
      "Group discounts"
    ]
  }
]
```

#### Ski Resorts (스키리조트)

```json
[
  {
    "id": "vivaldi",
    "categoryId": "ski-resort",
    "nameKR": "비발디파크",
    "nameEN": "Vivaldi Park",
    "location": "강원 홍천",
    "locationEN": "Hongcheon, Gangwon",
    "status": "active",
    "serviceTypes": ["shuttle", "private"],
    "period": "2024-2025 시즌",
    "periodEN": "2024-2025 Season",
    "descriptionKR": "서울 출발 왕복 셔틀, 리프트권 포함 옵션 제공",
    "descriptionEN": "Round-trip shuttle from Seoul with lift ticket options",
    "priceFrom": 45000,
    "externalUrl": "https://example.com/vivaldi",
    "imageUrl": "/images/services/vivaldi.jpg",
    "features": [
      "리프트권 패키지",
      "장비 대여 할인",
      "서울 강남/홍대 픽업"
    ],
    "featuresEN": [
      "Lift ticket packages",
      "Equipment rental discount",
      "Seoul Gangnam/Hongdae pickup"
    ]
  },
  {
    "id": "yongpyong",
    "categoryId": "ski-resort",
    "nameKR": "용평리조트",
    "nameEN": "Yongpyong Resort",
    "location": "강원 평창",
    "locationEN": "Pyeongchang, Gangwon",
    "status": "active",
    "serviceTypes": ["shuttle", "private"],
    "period": "2024-2025 시즌",
    "periodEN": "2024-2025 Season",
    "descriptionKR": "평창 올림픽 개최지, 최고급 슬로프 왕복 교통",
    "descriptionEN": "PyeongChang Olympic venue with premium slopes",
    "priceFrom": 50000,
    "externalUrl": "https://example.com/yongpyong",
    "imageUrl": "/images/services/yongpyong.jpg",
    "features": [
      "올림픽 슬로프",
      "프리미엄 리조트",
      "온천 이용 가능"
    ],
    "featuresEN": [
      "Olympic slopes",
      "Premium resort",
      "Hot spring available"
    ]
  },
  {
    "id": "alpensia",
    "categoryId": "ski-resort",
    "nameKR": "알펜시아",
    "nameEN": "Alpensia",
    "location": "강원 평창",
    "locationEN": "Pyeongchang, Gangwon",
    "status": "active",
    "serviceTypes": ["shuttle", "private"],
    "period": "2024-2025 시즌",
    "periodEN": "2024-2025 Season",
    "descriptionKR": "가족 단위 스키 여행에 최적화된 리조트 교통",
    "descriptionEN": "Family-friendly ski resort transportation",
    "priceFrom": 48000,
    "externalUrl": "https://example.com/alpensia",
    "imageUrl": "/images/services/alpensia.jpg",
    "features": [
      "가족 패키지",
      "워터파크 연계",
      "골프장 이용"
    ],
    "featuresEN": [
      "Family packages",
      "Water park access",
      "Golf course available"
    ]
  },
  {
    "id": "ramada",
    "categoryId": "ski-resort",
    "nameKR": "라마다 평창",
    "nameEN": "Ramada Pyeongchang",
    "location": "강원 평창",
    "locationEN": "Pyeongchang, Gangwon",
    "status": "active",
    "serviceTypes": ["shuttle", "private"],
    "period": "2024-2025 시즌",
    "periodEN": "2024-2025 Season",
    "descriptionKR": "합리적인 가격의 스키 리조트 왕복 교통",
    "descriptionEN": "Affordable ski resort transportation",
    "priceFrom": 42000,
    "externalUrl": "https://example.com/ramada",
    "imageUrl": "/images/services/ramada.jpg",
    "features": [
      "가성비 우수",
      "초보자 코스",
      "숙박 패키지"
    ],
    "featuresEN": [
      "Great value",
      "Beginner slopes",
      "Accommodation packages"
    ]
  },
  {
    "id": "phoenix",
    "categoryId": "ski-resort",
    "nameKR": "피닉스파크",
    "nameEN": "Phoenix Park",
    "location": "강원 평창",
    "locationEN": "Pyeongchang, Gangwon",
    "status": "active",
    "serviceTypes": ["shuttle", "private"],
    "period": "2024-2025 시즌",
    "periodEN": "2024-2025 Season",
    "descriptionKR": "다양한 슬로프와 스노우파크 완비 리조트 교통",
    "descriptionEN": "Resort with diverse slopes and snow park",
    "priceFrom": 47000,
    "externalUrl": "https://example.com/phoenix",
    "imageUrl": "/images/services/phoenix.jpg",
    "features": [
      "스노우파크",
      "야간 스키",
      "콘도 연계"
    ],
    "featuresEN": [
      "Snow park",
      "Night skiing",
      "Condo packages"
    ]
  },
  {
    "id": "wellihilli",
    "categoryId": "ski-resort",
    "nameKR": "웰리힐리파크",
    "nameEN": "Welli Hilli Park",
    "location": "강원 횡성",
    "locationEN": "Hoengseong, Gangwon",
    "status": "active",
    "serviceTypes": ["shuttle", "private"],
    "period": "2024-2025 시즌",
    "periodEN": "2024-2025 Season",
    "descriptionKR": "서울에서 가장 가까운 스키장 왕복 교통",
    "descriptionEN": "Closest ski resort from Seoul",
    "priceFrom": 40000,
    "externalUrl": "https://example.com/wellihilli",
    "imageUrl": "/images/services/wellihilli.jpg",
    "features": [
      "서울 근교",
      "당일치기 최적",
      "렌탈샵 할인"
    ],
    "featuresEN": [
      "Near Seoul",
      "Perfect for day trips",
      "Rental shop discount"
    ]
  }
]
```

#### Shopping (쇼핑)

```json
[
  {
    "id": "premium-outlet",
    "categoryId": "shopping",
    "nameKR": "프리미엄 아울렛",
    "nameEN": "Premium Outlets",
    "location": "경기 여주 / 파주",
    "locationEN": "Yeoju / Paju, Gyeonggi",
    "status": "active",
    "serviceTypes": ["private"],
    "period": "연중",
    "periodEN": "Year-round",
    "descriptionKR": "쇼핑 전용 프라이빗 차량 서비스, 넓은 트렁크 공간",
    "descriptionEN": "Private shopping service with spacious trunk",
    "priceFrom": 150000,
    "externalUrl": "https://example.com/premium-outlet",
    "imageUrl": "/images/services/premium-outlet.jpg",
    "features": [
      "프라이빗 차량",
      "대형 트렁크",
      "VIP 라운지 이용",
      "쇼핑백 적재 지원"
    ],
    "featuresEN": [
      "Private vehicle",
      "Large trunk space",
      "VIP lounge access",
      "Shopping bag loading assistance"
    ]
  }
]
```

#### Custom Tour (커스텀 투어)

```json
[
  {
    "id": "taxi-tour-nationwide",
    "categoryId": "custom-tour",
    "nameKR": "택시투어 (전국)",
    "nameEN": "Taxi Tour (Nationwide)",
    "location": "전국",
    "locationEN": "Nationwide",
    "status": "active",
    "serviceTypes": ["private"],
    "period": "연중",
    "periodEN": "Year-round",
    "descriptionKR": "원하는 지역과 코스를 자유롭게 구성하는 맞춤 투어",
    "descriptionEN": "Customize your route and destinations freely",
    "priceFrom": 200000,
    "externalUrl": "https://example.com/taxi-nationwide",
    "imageUrl": "/images/services/taxi-tour-nationwide.jpg",
    "features": [
      "자유로운 일정",
      "전국 어디든",
      "전문 드라이버",
      "실시간 일정 변경"
    ],
    "featuresEN": [
      "Flexible schedule",
      "Anywhere in Korea",
      "Professional driver",
      "Real-time itinerary changes"
    ]
  },
  {
    "id": "taxi-tour-regional",
    "categoryId": "custom-tour",
    "nameKR": "택시투어 (지역별)",
    "nameEN": "Taxi Tour (Regional)",
    "location": "지역별",
    "locationEN": "By Region",
    "status": "active",
    "serviceTypes": ["private"],
    "period": "연중",
    "periodEN": "Year-round",
    "descriptionKR": "주요 관광지별 추천 코스로 편하게 여행",
    "descriptionEN": "Recommended routes for major tourist destinations",
    "priceFrom": 150000,
    "externalUrl": "https://example.com/taxi-regional",
    "imageUrl": "/images/services/taxi-tour-regional.jpg",
    "features": [
      "추천 코스",
      "지역 맛집 안내",
      "포토스팟 가이드",
      "반일/전일 선택"
    ],
    "featuresEN": [
      "Recommended routes",
      "Local restaurant guide",
      "Photo spot guidance",
      "Half-day/full-day options"
    ]
  },
  {
    "id": "overseas-private",
    "categoryId": "custom-tour",
    "nameKR": "해외 프라이빗 투어",
    "nameEN": "Overseas Private Tour",
    "location": "태국 (방콕)",
    "locationEN": "Thailand (Bangkok)",
    "status": "ended",
    "serviceTypes": ["private"],
    "period": "2022-2023",
    "periodEN": "2022-2023",
    "descriptionKR": "방콕 및 주요 도시 프라이빗 차량 서비스",
    "descriptionEN": "Private vehicle service in Bangkok and major cities",
    "priceFrom": null,
    "externalUrl": "https://example.com/thailand",
    "imageUrl": "/images/services/overseas-thailand.jpg",
    "features": [
      "한국어 가능 드라이버",
      "공항 픽업",
      "시내 투어",
      "야시장 동행"
    ],
    "featuresEN": [
      "Korean-speaking driver",
      "Airport pickup",
      "City tour",
      "Night market escort"
    ]
  }
]
```

#### Concerts & Events (공연/이벤트)

```json
[
  {
    "id": "sbs-winter-2023",
    "categoryId": "concert",
    "nameKR": "SBS가요대전 윈터 2023",
    "nameEN": "SBS Gayo Daejeon Winter 2023",
    "location": "대구 엑스코",
    "locationEN": "Daegu EXCO",
    "status": "ended",
    "serviceTypes": ["shuttle"],
    "period": "2023.12",
    "periodEN": "Dec 2023",
    "eventDate": "2023-12-25",
    "descriptionKR": "대구 엑스코 왕복 셔틀버스 운영",
    "descriptionEN": "Round-trip shuttle bus to Daegu EXCO",
    "priceFrom": null,
    "externalUrl": "https://example.com/sbs-winter-2023",
    "imageUrl": "/images/services/sbs-winter-2023.jpg",
    "features": [
      "주요 지역 픽업",
      "공연 종료 후 대기",
      "단체 예약 할인"
    ],
    "featuresEN": [
      "Major area pickup",
      "Wait after show",
      "Group booking discount"
    ]
  },
  {
    "id": "sbs-summer-2024",
    "categoryId": "concert",
    "nameKR": "SBS가요대전 썸머 2024",
    "nameEN": "SBS Gayo Daejeon Summer 2024",
    "location": "인천",
    "locationEN": "Incheon",
    "status": "ended",
    "serviceTypes": ["shuttle"],
    "period": "2024.07",
    "periodEN": "Jul 2024",
    "eventDate": "2024-07-21",
    "descriptionKR": "인천 공연장 왕복 셔틀 서비스",
    "descriptionEN": "Round-trip shuttle to Incheon venue",
    "priceFrom": null,
    "externalUrl": "https://example.com/sbs-summer-2024",
    "imageUrl": "/images/services/sbs-summer-2024.jpg",
    "features": [
      "서울 출발",
      "에어컨 완비",
      "공연 전후 운행"
    ],
    "featuresEN": [
      "Depart from Seoul",
      "Air-conditioned",
      "Before/after show operation"
    ]
  },
  {
    "id": "blackpink-goyang",
    "categoryId": "concert",
    "nameKR": "블랙핑크 월드투어 in 고양",
    "nameEN": "BLACKPINK World Tour in Goyang",
    "location": "고양 킨텍스",
    "locationEN": "Goyang KINTEX",
    "status": "ended",
    "serviceTypes": ["shuttle"],
    "period": "2023.09",
    "periodEN": "Sep 2023",
    "eventDate": "2023-09-16",
    "descriptionKR": "킨텍스 왕복 셔틀 운영, 10만명 이용",
    "descriptionEN": "Round-trip shuttle to KINTEX, 100k+ passengers",
    "priceFrom": null,
    "externalUrl": "https://example.com/blackpink",
    "imageUrl": "/images/services/blackpink.jpg",
    "features": [
      "대규모 운영",
      "빠른 승하차",
      "굿즈 보관 공간"
    ],
    "featuresEN": [
      "Large-scale operation",
      "Quick boarding",
      "Merchandise storage"
    ]
  },
  {
    "id": "concert-general",
    "categoryId": "concert",
    "nameKR": "K-POP 콘서트 교통",
    "nameEN": "K-POP Concert Transportation",
    "location": "전국",
    "locationEN": "Nationwide",
    "status": "active",
    "serviceTypes": ["shuttle"],
    "period": "시즌별",
    "periodEN": "Seasonal",
    "descriptionKR": "주요 K-POP 콘서트 교통 지원 서비스",
    "descriptionEN": "Transportation for major K-POP concerts",
    "priceFrom": 30000,
    "externalUrl": "https://example.com/concerts",
    "imageUrl": "/images/services/concert-general.jpg",
    "features": [
      "시즌별 운영",
      "주요 공연장",
      "빠른 예약",
      "단체 할인"
    ],
    "featuresEN": [
      "Seasonal operation",
      "Major venues",
      "Quick booking",
      "Group discounts"
    ]
  }
]
```

---

## 6. Footer

**레이아웃:**
```
- 3단 구조 (Desktop) / 1단 (Mobile)
- 배경: bg-gray-900 (다크 모드)
- 텍스트: 흰색/회색
```

**구조:**
```jsx
<footer className="bg-gray-900 text-white">
  
  {/* Main Footer */}
  <div className="max-w-7xl mx-auto px-6 py-16">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
      
      {/* Column 1: Brand */}
      <div className="col-span-1 md:col-span-2">
        <div className="flex items-center gap-3 mb-4">
          {/* Logo */}
          <div className="w-12 h-12 bg-[#FF6B35] rounded-full flex items-center justify-center">
            <span className="text-2xl font-bold">T</span>
          </div>
          <div>
            <div className="text-xl font-bold">Travel Transport</div>
            <div className="text-sm text-gray-400">모든 여행의 시작</div>
          </div>
        </div>
        <p className="text-gray-400 leading-relaxed mb-6">
          2019년부터 안전하고 편안한 여행 교통 서비스를 제공하고 있습니다.
          테마파크, 스키장, 콘서트까지 당신의 모든 여행을 함께합니다.
        </p>
        {/* Social Links (Optional) */}
        <div className="flex gap-4">
          <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#FF6B35] transition">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              {/* Instagram Icon */}
            </svg>
          </a>
          <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#FF6B35] transition">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              {/* Facebook Icon */}
            </svg>
          </a>
        </div>
      </div>
      
      {/* Column 2: Services */}
      <div>
        <h3 className="text-lg font-bold mb-4">서비스</h3>
        <ul className="space-y-3">
          <li><a href="/category/theme-park" className="text-gray-400 hover:text-white transition">테마파크</a></li>
          <li><a href="/category/ski-resort" className="text-gray-400 hover:text-white transition">스키리조트</a></li>
          <li><a href="/category/shopping" className="text-gray-400 hover:text-white transition">쇼핑</a></li>
          <li><a href="/category/custom-tour" className="text-gray-400 hover:text-white transition">커스텀 투어</a></li>
          <li><a href="/category/concert" className="text-gray-400 hover:text-white transition">공연/이벤트</a></li>
        </ul>
      </div>
      
      {/* Column 3: Company */}
      <div>
        <h3 className="text-lg font-bold mb-4">회사</h3>
        <ul className="space-y-3">
          <li><a href="/about" className="text-gray-400 hover:text-white transition">회사 소개</a></li>
          <li><a href="/contact" className="text-gray-400 hover:text-white transition">제휴 문의</a></li>
          <li><a href="/terms" className="text-gray-400 hover:text-white transition">이용약관</a></li>
          <li><a href="/privacy" className="text-gray-400 hover:text-white transition">개인정보처리방침</a></li>
        </ul>
      </div>
      
    </div>
  </div>
  
  {/* Bottom Bar */}
  <div className="border-t border-gray-800">
    <div className="max-w-7xl mx-auto px-6 py-6">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Copyright */}
        <div className="text-sm text-gray-500">
          © 2024 Travel Transport. All rights reserved.
        </div>
        
        {/* Language Toggle */}
        <div className="flex items-center gap-2">
          <button className="px-4 py-2 rounded-full bg-gray-800 text-white font-medium hover:bg-gray-700 transition">
            한국어
          </button>
          <button className="px-4 py-2 rounded-full text-gray-400 hover:bg-gray-800 transition">
            English
          </button>
        </div>
        
      </div>
      
      {/* Notice */}
      <div className="mt-4 text-xs text-gray-600 text-center md:text-left">
        이 사이트는 서비스 포트폴리오 소개 목적으로 제작되었습니다. 
        일부 서비스는 운영이 종료되었으나 레퍼런스로 제공됩니다.
      </div>
    </div>
  </div>
  
</footer>
```

---

## 7. 이미지 생성 가이드 (Google Imagen 3)

### 7.1 Hero Section

**Prompt:**
```
A serene scenic road winding through beautiful Korean landscape during golden hour, modern luxury tour bus driving on the road, mountains and sky in background, cinematic wide angle shot, professional travel photography, warm and inviting lighting, vibrant colors, high quality, 8K resolution
```

**Settings:**
- Aspect Ratio: 16:9
- Size: 1920x1080
- Style: Photographic, Cinematic

---

### 7.2 Category Cards

**Theme Parks:**
```
Colorful theme park with roller coaster and ferris wheel against blue sky, happy families enjoying rides, bright cheerful atmosphere, daytime, aerial view, professional travel photography, vibrant colors, Klook style, modern and clean
```
- Aspect Ratio: 4:3
- Size: 800x600

**Ski Resorts:**
```
Modern ski resort with pristine snow-covered slopes, ski lifts in operation, cozy lodge buildings with warm lights, clear blue sky, snow-capped mountains in background, winter wonderland atmosphere, professional travel photography, bright and inviting, Klook style
```
- Aspect Ratio: 4:3
- Size: 800x600

**Shopping:**
```
Luxury premium outlet mall exterior with modern architecture, elegant storefronts, shoppers with colorful shopping bags walking, daytime with perfect lighting, clean and spacious walkways, professional architectural photography, bright and upscale atmosphere, Klook style
```
- Aspect Ratio: 4:3
- Size: 800x600

**Custom Tour:**
```
Scenic Korean countryside with traditional hanok village and modern luxury sedan on country road, beautiful autumn foliage, mountains in background, peaceful atmosphere, professional travel photography, warm natural lighting, inviting and adventurous mood, Klook style
```
- Aspect Ratio: 4:3
- Size: 800x600

**Concerts & Events:**
```
Large modern concert hall exterior at sunset with excited crowd entering, K-POP concert atmosphere, colorful LED screens visible, energetic and vibrant mood, professional event photography, warm evening lighting, dynamic composition, Klook style
```
- Aspect Ratio: 4:3
- Size: 800x600

---

### 7.3 Service Detail Images

각 서비스별 이미지는 다음 패턴을 따름:

**스키리조트 (비발디파크 예시):**
```
Vivaldi Park ski resort in Hongcheon Korea, wide ski slopes with skiers, modern ski lifts, resort buildings, clear winter day, professional travel photography, bright and inviting, high quality
```

**테마파크 (에버랜드 예시):**
```
Everland theme park in Korea, iconic castle building, colorful flower gardens, families enjoying attractions, spring season, aerial view, professional travel photography, vibrant and cheerful
```

**공연 (SBS가요대전 예시):**
```
Large K-POP concert venue in Daegu Korea, modern EXCO building exterior, evening atmosphere with stage lights visible, excited fans gathering, professional event photography, energetic mood
```

---

## 8. 개발 단계별 우선순위

### Phase 1: MVP (2-3주)

**필수 구현:**
1. Landing Page
   - Hero Section
   - Categories Section (6개 카테고리 카드)
   - Footer
2. 1개 Category Detail Page (스키리조트로 테스트)
   - Header
   - Filter Bar
   - Service Cards Grid
3. 반응형 레이아웃 (Mobile/Tablet/Desktop)
4. 한국어 버전만

**목표:**
- 핵심 사용자 플로우 검증
- 디자인 시스템 확립
- 기술 스택 검증

---

### Phase 2: Full Feature (3-4주)

**추가 구현:**
1. 나머지 5개 Category Detail Pages
2. Featured Section (시즌별 추천)
3. Themes Section (테마별 큐레이션)
4. 영어 버전 (다국어 전환)
5. Filter/Sort 기능 완성
6. Smooth scroll & 애니메이션

**목표:**
- 전체 서비스 포트폴리오 완성
- 다국어 지원
- UX 개선

---

### Phase 3: Polish & Optimization (1-2주)

**개선 작업:**
1. 성능 최적화
   - 이미지 lazy loading
   - Code splitting
   - Bundle size 최적화
2. SEO 최적화
   - Meta tags
   - Sitemap
   - Structured data
3. 애니메이션 강화
   - Page transitions
   - Hover effects
   - Scroll animations
4. 접근성 (a11y)
   - Keyboard navigation
   - Screen reader support
   - ARIA labels

**목표:**
- Production-ready
- SEO 친화적
- 성능 최적화

---

## 9. 기술 구현 노트

### 9.1 Tailwind Config 커스터마이징

```javascript
// tailwind.config.js
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand': {
          primary: '#FF6B35',
          'primary-dark': '#E65A2B',
          'primary-light': '#FFF5F0',
          secondary: '#4ECDC4',
          accent: '#FFE66D',
          success: '#95E1D3',
        },
      },
      fontFamily: {
        sans: ['Pretendard', 'Inter', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'scale-up': 'scaleUp 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleUp: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
```

---

### 9.2 다국어 구현 (i18n)

**방법 1: React Context**
```javascript
// contexts/LanguageContext.js
import { createContext, useState } from 'react';

export const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('ko');
  
  const t = (key) => {
    return translations[language][key] || key;
  };
  
  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}
```

**방법 2: next-i18next (Next.js 사용 시)**
- 추천: Next.js 프로젝트라면 next-i18next 사용

---

### 9.3 상태 관리

**간단한 경우: React Context만 사용**
- 언어 설정
- 필터 상태

**복잡한 경우: Zustand 추가 고려**
```javascript
// stores/filterStore.js
import create from 'zustand';

export const useFilterStore = create((set) => ({
  filters: {
    status: 'all',
    serviceType: 'all',
  },
  setFilter: (key, value) => set((state) => ({
    filters: { ...state.filters, [key]: value }
  })),
}));
```

---

### 9.4 데이터 Fetching

**정적 데이터 (JSON 파일):**
```
/data
  ├── categories.json
  ├── services/
  │   ├── theme-park.json
  │   ├── ski-resort.json
  │   ├── shopping.json
  │   ├── custom-tour.json
  │   └── concert.json
  └── translations/
      ├── ko.json
      └── en.json
```

**Next.js의 경우:**
- `getStaticProps`로 빌드 타임에 데이터 로드
- `getStaticPaths`로 동적 라우트 생성

---

## 10. 체크리스트

### Design
- [ ] 클룩 스타일 컬러 팔레트 적용
- [ ] Tailwind 커스텀 설정 완료
- [ ] 모든 컴포넌트 스타일 가이드 준수
- [ ] 반응형 테스트 (Mobile/Tablet/Desktop)
- [ ] 다크 모드 (Optional)

### Content
- [ ] 모든 카테고리 데이터 준비
- [ ] 서비스별 이미지 준비 (Imagen 3 생성)
- [ ] 한국어/영어 텍스트 작성
- [ ] 외부 링크 URL 확인

### Functionality
- [ ] 페이지 네비게이션 동작
- [ ] 필터/정렬 기능 동작
- [ ] 언어 전환 동작
- [ ] 외부 링크 새 탭 열기
- [ ] Smooth scroll

### Performance
- [ ] 이미지 최적화
- [ ] Lazy loading 적용
- [ ] Lighthouse 점수 90+ (Performance)

### SEO
- [ ] Meta tags 설정
- [ ] Open Graph tags
- [ ] Sitemap 생성
- [ ] robots.txt

### Accessibility
- [ ] Keyboard navigation
- [ ] Screen reader 지원
- [ ] ARIA labels
- [ ] Color contrast ratio

---

## 11. 참고 자료

### 디자인 영감
- Klook: https://www.klook.com
- Airbnb Experiences
- GetYourGuide

### 기술 문서
- Tailwind CSS: https://tailwindcss.com
- Next.js: https://nextjs.org
- React: https://react.dev
- Google Imagen 3: https://deepmind.google/technologies/imagen-3/

---

## 부록: Quick Reference

### 자주 쓰는 Tailwind 클래스

**버튼:**
```
Primary: bg-brand-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-brand-primary-dark transition-all shadow-lg hover:shadow-xl

Secondary: bg-white border-2 border-brand-primary text-brand-primary px-8 py-3 rounded-full font-semibold hover:bg-brand-primary-light transition-all
```

**카드:**
```
bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden
```

**Container:**
```
max-w-7xl mx-auto px-6 py-20
```

**Grid:**
```
grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6
```

---

```