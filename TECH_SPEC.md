# 해커스교육 웹사이트 기술 명세서

> 작성일: 2026-02-21
> 프로젝트: Hackers Education Web Platform
> 버전: 1.0.0

---

## 목차

1. [프로젝트 개요](#1-프로젝트-개요)
2. [기술 스택](#2-기술-스택)
3. [프로젝트 구조](#3-프로젝트-구조)
4. [라우팅 구조](#4-라우팅-구조)
5. [컴포넌트 아키텍처](#5-컴포넌트-아키텍처)
6. [상태 관리](#6-상태-관리)
7. [데이터 계층](#7-데이터-계층)
8. [디자인 시스템 (SCSS)](#8-디자인-시스템-scss)
9. [반응형 브레이크포인트](#9-반응형-브레이크포인트)
10. [빌드 및 환경 설정](#10-빌드-및-환경-설정)

---

## 1. 프로젝트 개요

어학(TOEIC/TOEFL/영어회화), 자격증, 취업 분야를 포괄하는 종합 교육 플랫폼.
백엔드 없이 Mock 데이터 기반으로 동작하는 프론트엔드 SPA(Single Page Application).

| 항목 | 내용 |
|------|------|
| 서비스명 | 해커스교육 |
| 타입 | SPA (Single Page Application) |
| 백엔드 | 없음 (Mock Data) |
| 인증 | localStorage 기반 Mock 인증 |
| 배포 | `dist/` 정적 파일 빌드 |

---

## 2. 기술 스택

| 분류 | 기술 | 버전 |
|------|------|------|
| 프레임워크 | Vue.js | ^3.5.0 |
| 빌드 도구 | Vite | ^6.0.0 |
| 라우터 | Vue Router | ^4.5.0 |
| CSS 전처리기 | SCSS (Dart Sass) | ^1.83.0 |
| 상태 관리 | Vue Reactive (Pinia 미사용) | - |
| 폰트 | Pretendard Variable | CDN |
| 아이콘 | 인라인 SVG / Unicode | - |
| 패키지 매니저 | npm | - |

---

## 3. 프로젝트 구조

```
hackers-edu/
├── index.html                  # 진입점 HTML
├── vite.config.js              # Vite 설정 (경로 별칭, SCSS 전역 주입)
├── package.json
├── public/
│   └── favicon.svg
└── src/
    ├── main.js                 # 앱 진입점 (Vue 인스턴스 생성)
    ├── App.vue                 # 루트 컴포넌트 (TopBanner + Header + router-view + Footer)
    ├── router/
    │   └── index.js            # Vue Router 설정, 네비게이션 가드
    ├── assets/
    │   └── scss/
    │       ├── main.scss       # 전역 스타일 엔트리포인트
    │       ├── _variables.scss # 디자인 토큰 (색상, 타이포, 스페이싱 등)
    │       ├── _mixins.scss    # 재사용 믹스인 (반응형, flex, 카드 등)
    │       ├── _reset.scss     # CSS 초기화
    │       ├── _typography.scss# 타이포그래피 유틸리티 클래스
    │       └── _animations.scss# 전역 애니메이션 / Vue Transition
    ├── data/                   # Mock 데이터 (정적 JS 모듈)
    │   ├── courses.js          # 강의 데이터 (15개)
    │   ├── categories.js       # 카테고리 구조
    │   ├── instructors.js      # 강사 데이터 (6명)
    │   ├── reviews.js          # 수강후기 (30개)
    │   ├── events.js           # 이벤트 데이터 (6개)
    │   └── banners.js          # 히어로 배너 (3개)
    ├── composables/            # Composition API 훅
    │   ├── useCourses.js
    │   └── useEvents.js
    ├── stores/                 # 반응형 전역 상태
    │   ├── authStore.js        # 인증 상태 (로그인/로그아웃)
    │   └── cartStore.js        # 장바구니 상태
    ├── utils/
    │   ├── formatters.js       # 가격/숫자/날짜 포맷
    │   └── validators.js       # 이메일/비밀번호/전화 유효성 검사
    ├── components/
    │   ├── layout/             # 공통 레이아웃 컴포넌트
    │   ├── common/             # 재사용 Base 컴포넌트
    │   ├── home/               # 홈 페이지 전용 컴포넌트
    │   ├── course/             # 강의 관련 컴포넌트
    │   ├── enrollment/         # 수강신청 컴포넌트
    │   ├── event/              # 이벤트 컴포넌트
    │   └── auth/               # 인증 컴포넌트
    └── views/                  # 페이지 뷰 (라우트에 대응)
        ├── HomeView.vue
        ├── CourseListView.vue
        ├── CourseDetailView.vue
        ├── EnrollmentView.vue
        ├── EventListView.vue
        ├── EventDetailView.vue
        ├── LoginView.vue
        ├── SignupView.vue
        └── NotFoundView.vue
```

---

## 4. 라우팅 구조

| 경로 | 이름 | 뷰 | 가드 |
|------|------|-----|------|
| `/` | Home | HomeView | - |
| `/courses/:category?` | CourseList | CourseListView | - |
| `/course/:id` | CourseDetail | CourseDetailView | - |
| `/enrollment` | Enrollment | EnrollmentView | requiresAuth |
| `/events` | EventList | EventListView | - |
| `/events/:id` | EventDetail | EventDetailView | - |
| `/login` | Login | LoginView | guestOnly |
| `/signup` | Signup | SignupView | guestOnly |
| `/:pathMatch(.*)` | NotFound | NotFoundView | - |

### 네비게이션 가드
- `requiresAuth`: 비로그인 시 `/login?redirect=원래경로` 로 리다이렉트
- `guestOnly`: 로그인 상태에서 접근 시 `/` 로 리다이렉트
- 모든 라우트 진입 시 `document.title` 자동 업데이트
- `scrollBehavior`: 라우트 이동 시 페이지 최상단으로 스크롤

---

## 5. 컴포넌트 아키텍처

### 5.1 레이아웃 컴포넌트 (`components/layout/`)

| 컴포넌트 | 역할 |
|---------|------|
| `AppHeader.vue` | 로고, 네비게이션, 검색바, 로그인/유저 정보, 모바일 햄버거 메뉴 |
| `CategoryNav.vue` | 헤더 하단 카테고리 바, 호버 드롭다운 서브메뉴 |
| `AppFooter.vue` | 회사정보, 링크 컬럼, SNS 아이콘 (4컬럼 그리드) |
| `TopBanner.vue` | 최상단 프로모션 띠배너, sessionStorage 기반 닫기 |

### 5.2 공통 컴포넌트 (`components/common/`)

| 컴포넌트 | Props | Emits |
|---------|-------|-------|
| `BaseButton.vue` | `variant` (primary/secondary/outline/text), `size` (sm/md/lg), `disabled`, `loading` | - |
| `BaseInput.vue` | `modelValue`, `type`, `label`, `placeholder`, `error` | `update:modelValue` |
| `BaseModal.vue` | `modelValue` (show/hide) | `update:modelValue` |
| `BaseBadge.vue` | `variant` (best/new/discount/free) | - |
| `BaseTab.vue` | `tabs` ({key, label}[]), `modelValue` | `update:modelValue` |
| `BasePagination.vue` | `totalItems`, `itemsPerPage`, `currentPage` | `page-change` |
| `BaseBreadcrumb.vue` | `items` ({label, to?}[]) | - |
| `BaseRating.vue` | `value` (0-5), `count` | - |
| `BaseSearchBar.vue` | - | `search(query)` |
| `LoadingSpinner.vue` | - | - |

### 5.3 홈 컴포넌트 (`components/home/`)

| 컴포넌트 | 주요 기능 |
|---------|---------|
| `HeroBanner.vue` | CSS transform 슬라이더, 5초 자동재생, 이전/다음 화살표, 점 인디케이터 |
| `CategorySection.vue` | 3개 카테고리 카드 그리드 (어학/자격증/취업) |
| `PopularCourses.vue` | 인기 강의 TOP 8, enrollmentCount 기준 정렬 |
| `EventBannerStrip.vue` | 풀 너비 이벤트 클릭 배너 |
| `InstructorShowcase.vue` | 대표 강사 4명 카드 |
| `TestimonialCarousel.vue` | 수강후기 캐러셀 (3개 동시 노출) |

### 5.4 강의 컴포넌트 (`components/course/`)

| 컴포넌트 | 주요 기능 |
|---------|---------|
| `CourseCard.vue` | 강의 썸네일, 뱃지, 강사, 별점, 가격 표시. 전체 사이트에서 재사용 |
| `CourseCardList.vue` | CourseCard 그리드 렌더링, 빈 결과 처리 |
| `CourseFilter.vue` | 카테고리/난이도/가격대 라디오 필터, `update:filters` emit |
| `CourseSortBar.vue` | 결과 수 표시, 5가지 정렬 옵션 |
| `CourseCurriculum.vue` | 아코디언 섹션, 무료 강의 배지, 강의 시간 표시 |
| `CourseReviewList.vue` | 평균 별점, 리뷰 목록 (courseId 기반 필터링) |
| `CourseInfoSidebar.vue` | 스티키 사이드바, 가격, 수강신청/장바구니 버튼 |
| `InstructorCard.vue` | 간략/상세(`detailed` prop) 강사 프로필 |
| `RelatedCourses.vue` | 같은 parentCategoryId의 타 강의 최대 4개 |

### 5.5 인증 컴포넌트 (`components/auth/`)

| 컴포넌트 | 주요 기능 |
|---------|---------|
| `LoginForm.vue` | 이메일/비밀번호 유효성 검사, Mock 로그인, redirect 처리 |
| `SignupForm.vue` | 전체 폼 유효성 검사, 비밀번호 강도 인디케이터, 전체 동의 토글 |
| `SocialLoginButtons.vue` | 카카오(#FEE500) / 네이버(#03C75A) / Google Mock 소셜 로그인 |

### 5.6 수강신청 컴포넌트 (`components/enrollment/`)

| 컴포넌트 | 주요 기능 |
|---------|---------|
| `EnrollmentSummary.vue` | 장바구니 항목 목록, 개별 삭제 |
| `CouponInput.vue` | 쿠폰 코드 입력, 적용 (테스트 코드: `HACKERS2026`) |
| `PaymentMethodSelector.vue` | 신용카드/무통장/카카오페이/네이버페이 선택 |
| `EnrollmentForm.vue` | 이용약관/개인정보/환불 동의 체크박스, 전체 동의 |
| `OrderComplete.vue` | 주문 완료 화면, 주문번호(HK+timestamp) |

---

## 6. 상태 관리

Pinia 미사용. `reactive()` 기반 모듈 패턴으로 전역 상태 관리.

### 6.1 authStore (`src/stores/authStore.js`)

```js
state: {
  user: { id, name, email } | null,
  isLoggedIn: boolean
}
```

| 메서드 | 동작 |
|-------|------|
| `login(email, password)` | Mock 유저 생성, localStorage 저장, state 업데이트 |
| `signup(userData)` | 신규 유저 등록, 자동 로그인 |
| `logout()` | state 초기화, localStorage 삭제 |

### 6.2 cartStore (`src/stores/cartStore.js`)

```js
state: {
  items: [{ id, title, instructorId, originalPrice, salePrice }]
}
```

| 메서드/계산 | 동작 |
|-----------|------|
| `addItem(course)` | 중복 체크 후 추가 |
| `removeItem(courseId)` | 항목 제거 |
| `clearCart()` | 전체 비우기 |
| `itemCount` (computed) | 장바구니 수량 |
| `totalPrice` (computed) | 총 결제금액 |
| `isInCart(courseId)` | 담김 여부 확인 |

> 모든 변경은 `watch`를 통해 `localStorage('hackers_cart')`에 자동 동기화

---

## 7. 데이터 계층

### 7.1 데이터 파일 (`src/data/`)

| 파일 | 내용 | 수량 |
|------|------|------|
| `courses.js` | 강의 전체 목록 | 15개 |
| `categories.js` | 카테고리 트리 (부모 3개, 서브 9개) | 12개 |
| `instructors.js` | 강사 프로필 | 6명 |
| `reviews.js` | 수강후기 | 30개 |
| `events.js` | 이벤트/혜택 | 6개 |
| `banners.js` | 히어로 배너 슬라이드 | 3개 |

### 7.2 강의 데이터 스키마

```js
{
  id: Number,
  title: String,
  subtitle: String,
  categoryId: String,           // 'toeic' | 'toefl' | 'english-conversation' | ...
  parentCategoryId: String,     // 'language' | 'certification' | 'employment'
  instructorId: Number,
  color: String,                // 썸네일 배경색 (placeholder)
  level: String,                // '입문' | '초급' | '중급' | '고급'
  duration: Number,             // 수강기간 (일)
  lectureCount: Number,
  totalHours: Number,
  originalPrice: Number,
  salePrice: Number,
  discountRate: Number,
  rating: Number,               // 0.0 - 5.0
  reviewCount: Number,
  enrollmentCount: Number,
  tags: String[],               // ['베스트', '할인중', 'NEW']
  isNew: Boolean,
  isBest: Boolean,
  createdAt: String,            // 'YYYY-MM-DD'
  description: String,          // HTML 문자열
  targetAudience: String[],
  whatYouLearn: String[],
  curriculum: [{
    sectionTitle: String,
    lessons: [{
      id: Number,
      title: String,
      duration: String,         // 'MM:SS'
      isFree: Boolean
    }]
  }]
}
```

### 7.3 Composables (`src/composables/`)

#### `useCourses.js`

| 함수 | 반환 | 설명 |
|------|------|------|
| `getCourseById(id)` | Course | ID로 강의 조회 |
| `getCoursesByCategory(categoryId)` | Course[] | 카테고리별 강의 |
| `getInstructorForCourse(course)` | Instructor | 강의의 강사 정보 |
| `getInstructorById(id)` | Instructor | ID로 강사 조회 |
| `getCategoryName(categoryId)` | String | 카테고리 표시명 |
| `getPopularCourses(limit)` | Course[] | enrollmentCount 기준 인기 강의 |
| `filterCourses({ category, level, priceRange, sort })` | Course[] | 필터+정렬 조합 |

### 7.4 유틸리티 (`src/utils/`)

#### `formatters.js`
| 함수 | 예시 |
|------|------|
| `formatPrice(number)` | `259000` → `"259,000"` |
| `formatNumber(number)` | `45000` → `"4.5만"` |
| `formatDate(string)` | `"2026-02-21"` → `"2026.02.21"` |

#### `validators.js`
| 함수 | 규칙 |
|------|------|
| `validateEmail(email)` | RFC 이메일 형식 정규식 |
| `validatePassword(pw)` | 8자 이상 + 영문 + 숫자 포함 |
| `validatePhone(phone)` | 010-XXXX-XXXX 형식 |
| `getPasswordStrength(pw)` | `{ level: 1-3, label, color }` 반환 |

---

## 8. 디자인 시스템 (SCSS)

### 8.1 색상 토큰

| 변수 | 값 | 용도 |
|------|-----|------|
| `$color-primary` | `#E31837` | 해커스 레드, 주요 CTA |
| `$color-primary-dark` | `#B8132D` | 호버 상태 |
| `$color-secondary` | `#1A2B5F` | 네이비, 헤더/푸터 |
| `$color-accent` | `#FF6B00` | 이벤트/프로모션 오렌지 |
| `$color-success` | `#00A651` | 성공, 무료 뱃지 |
| `$color-warning` | `#FFB800` | 별점 색상 |

### 8.2 타이포그래피

| 변수 | 값 |
|------|-----|
| `$font-size-xs` | 0.75rem (12px) |
| `$font-size-sm` | 0.875rem (14px) |
| `$font-size-base` | 1rem (16px) |
| `$font-size-md` | 1.125rem (18px) |
| `$font-size-lg` | 1.25rem (20px) |
| `$font-size-xl` | 1.5rem (24px) |
| `$font-size-2xl` | 2rem (32px) |
| `$font-size-3xl` | 2.5rem (40px) |

### 8.3 주요 믹스인

```scss
@include container          // max-width: 1200px, 가운데 정렬
@include flex-center        // display:flex + 가운데 정렬
@include flex-between       // display:flex + space-between
@include card-base          // 기본 카드 스타일 + 호버 효과
@include button-base        // 기본 버튼 스타일
@include text-ellipsis(n)   // n줄 말줄임 (1줄/다줄)
@include respond-to('md')   // max-width: 767px 미디어 쿼리
```

### 8.4 전역 주입

`vite.config.js`의 `css.preprocessorOptions.scss.additionalData`를 통해 `_variables.scss`와 `_mixins.scss`가 **모든 Vue SFC의 `<style lang="scss">` 블록에 자동 주입**됨. 별도 `@import` 불필요.

---

## 9. 반응형 브레이크포인트

| 이름 | 변수 | 기준 | 주요 변화 |
|------|------|------|---------|
| Mobile | `$breakpoint-sm` | ~575px | 단일 컬럼, 검색바 숨김 |
| Tablet | `$breakpoint-md` | ~767px | 2컬럼 그리드, 모바일 메뉴 |
| Laptop | `$breakpoint-lg` | ~1023px | 사이드바 숨김, 3컬럼 |
| Desktop | `$breakpoint-xl` | 1200px+ | 풀 레이아웃 |

---

## 10. 빌드 및 환경 설정

### 10.1 스크립트

```bash
npm run dev      # 개발 서버 실행 (http://localhost:5173)
npm run build    # 프로덕션 빌드 → dist/
npm run preview  # 빌드 결과 로컬 미리보기
```

### 10.2 Vite 설정 (`vite.config.js`)

```js
resolve.alias: {
  '@': 'src/'   // 절대 경로 별칭
}

css.preprocessorOptions.scss.additionalData:
  '@import "@/assets/scss/variables"; @import "@/assets/scss/mixins";'
```

### 10.3 빌드 출력 (프로덕션)

| 파일 | 크기 (gzip) |
|------|------------|
| `index.js` (Vue 코어 등) | ~43 kB |
| `CourseCard-*.js` (강의 데이터 포함) | ~6.7 kB |
| `CourseDetailView-*.js` | ~3.8 kB |
| `index.css` (공통 스타일) | ~2.0 kB |
| `CourseDetailView-*.css` | ~2.2 kB |
| **전체 합계** | **약 78 kB** |

> 라우트 기반 코드 스플리팅 적용 — 페이지별 JS/CSS 청크 자동 분리

---

## 부록: 사용자 플로우

```
홈 → [카테고리 클릭]
  → 강의 목록 (필터/정렬)
    → 강의 상세 (탭: 소개/커리큘럼/후기/강사)
      → 수강신청 (로그인 필요)
        → 쿠폰/결제수단 선택
          → 주문 완료

홈 → [이벤트 배너]
  → 이벤트 목록 → 이벤트 상세

헤더 → [로그인]
  → 로그인 폼 또는 소셜 로그인
  → 홈 또는 원래 페이지로 리다이렉트

헤더 → [회원가입]
  → 회원가입 폼 (유효성 검사 + 약관 동의)
  → 자동 로그인 → 홈
```
