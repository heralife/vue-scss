<template>
  <footer class="footer">
    <div class="footer__container">
      <div class="footer__grid">
        <div class="footer__brand">
          <span class="footer__logo">해커스<em>교육</em></span>
          <p class="footer__desc">
            대한민국 대표 교육 플랫폼<br />
            어학, 자격증, 취업까지 한 번에!
          </p>
          <div class="footer__social">
            <a href="#" aria-label="YouTube" class="footer__social-link">YT</a>
            <a href="#" aria-label="Instagram" class="footer__social-link">IG</a>
            <a href="#" aria-label="Blog" class="footer__social-link">BL</a>
          </div>
        </div>

        <div class="footer__links">
          <h4>강의 카테고리</h4>
          <router-link to="/courses/language">어학</router-link>
          <router-link to="/courses/certification">자격증</router-link>
          <router-link to="/courses/employment">취업</router-link>
        </div>

        <div class="footer__links">
          <h4>고객센터</h4>
          <a href="#">자주 묻는 질문</a>
          <a href="#">1:1 문의</a>
          <a href="#">공지사항</a>
        </div>

        <div class="footer__links">
          <h4>이용안내</h4>
          <a href="#">이용약관</a>
          <a href="#"><strong>개인정보처리방침</strong></a>
          <a href="#">환불규정</a>
        </div>
      </div>

      <div class="footer__bottom">
        <p>
          (주)해커스교육 | 대표: 홍길동 | 사업자등록번호: 123-45-67890<br />
          서울특별시 강남구 역삼로 123 해커스빌딩 | 고객센터: 02-1234-5678
        </p>
        <p class="footer__copyright">&copy; 2026 Hackers Education. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  background: $color-secondary;
  color: rgba(255, 255, 255, 0.8);
  padding: $spacing-2xl 0 $spacing-lg;
  margin-top: auto;

  &__container {
    @include container;
  }

  &__grid {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1fr;
    gap: $spacing-xl;

    @include respond-to('md') {
      grid-template-columns: 1fr 1fr;
    }

    @include respond-to('sm') {
      grid-template-columns: 1fr;
    }
  }

  &__logo {
    font-size: $font-size-xl;
    font-weight: $font-weight-bold;
    color: $color-white;

    em {
      font-style: normal;
      color: $color-primary-light;
    }
  }

  &__desc {
    margin-top: $spacing-sm;
    font-size: $font-size-sm;
    line-height: $line-height-base;
  }

  &__social {
    display: flex;
    gap: $spacing-sm;
    margin-top: $spacing-md;
  }

  &__social-link {
    @include flex-center;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.15);
    color: $color-white;
    font-size: $font-size-xs;
    font-weight: $font-weight-bold;
    transition: background $transition-fast;

    &:hover {
      background: $color-primary;
    }
  }

  &__links {
    display: flex;
    flex-direction: column;
    gap: $spacing-sm;

    h4 {
      color: $color-white;
      font-size: $font-size-sm;
      font-weight: $font-weight-semibold;
      margin-bottom: $spacing-xs;
    }

    a {
      font-size: $font-size-sm;
      color: rgba(255, 255, 255, 0.6);
      transition: color $transition-fast;

      &:hover {
        color: $color-white;
      }

      strong {
        font-weight: $font-weight-semibold;
      }
    }
  }

  &__bottom {
    margin-top: $spacing-xl;
    padding-top: $spacing-lg;
    border-top: 1px solid rgba(255, 255, 255, 0.15);
    font-size: $font-size-xs;
    color: rgba(255, 255, 255, 0.5);
    line-height: $line-height-base;
  }

  &__copyright {
    margin-top: $spacing-sm;
  }
}
</style>
