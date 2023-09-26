<template>
  <footer class="footer">
    <div class="footer__body">
      <div class="footer__block-wrapper">
        <div class="block__logo">
          <img src="/image/logo.png" alt="" class="logo__img" />
          <h6 class="footer__title">
            Web and machine learning developing company
          </h6>
        </div>
        <div class="navigation__wrapper">
          <div class="footer__block-contacts contact">
            <a href="tel:+7 499 679 45 79" class="contact__number"
              >+7 499 679 45 79</a
            >
            <a href="mailto:hello@cyberia.ru" class="contact__email"
              >hello@cyberia.ru</a
            >
            <a href="" class="contact__address">Аносова 3Б, оф. 1</a>
          </div>
          <nav class="footer__block-navigation navigation">
            <ul class="navigation__list">
              <li><a href="" class="navigation__link">Главная</a></li>
              <li><a href="" class="navigation__link">Услуги</a></li>
              <li><a href="" class="navigation__link">Проекты</a></li>
            </ul>
            <ul class="navigation__list">
              <li><a href="" class="navigation__link">Блог</a></li>
              <li><a href="" class="navigation__link">О нас</a></li>
              <li><a href="" class="navigation__link">Команда</a></li>
            </ul>
          </nav>
        </div>
      </div>
      <p class="footer__copyright">
        <span>2022, digital-агентство Cyberia </span>
        <span>Положение о защите персональных данных </span>
        <span>Политика в отношении обработки и защиты персональных данных</span>
        Оферта оказания услуг
      </p>
    </div>
  </footer>
</template>

<script setup lang="ts"></script>

<style scoped>
[class*="contact"] {
  color: #eef3ff;
  font-size: 14px;
  text-decoration: none;
}
.footer {
  font-family: "Open Sans";
  padding: 130px 64px 170px 64px;
  width: 100%;
}
.footer__body {
  max-width: 1242px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}
.footer__block-wrapper {
  width: 100%;
  max-width: 770px;
  display: flex;
  justify-content: space-between;
}
.block__logo {
  max-width: 196px;
}

.logo__img {
  max-width: 196px;
}

.footer__title {
  max-width: 207px;
  margin-top: 13px;
  font-size: 14px;
  font-weight: 400;
  color: #eef3ff;
}
.navigation__wrapper {
  width: 100%;
  display: flex;
  justify-content: space-between;
  max-width: 388px;
}

.footer__block-contacts {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.footer__block-navigation {
  display: flex;
  justify-content: center;
  gap: 87px;
}

.navigation__list {
  display: flex;
  flex-direction: column;
  gap: 20px;
  list-style: none;
}

.navigation__link {
  text-decoration: none;
  font-size: 14px;
  font-weight: 400;
  color: #eef3ff;
}

.footer__copyright {
  max-width: 359px;
  font-size: 14px;
  font-weight: 400;
  color: #eef3ff;
}
@media (max-width: 1024px) {
  .footer__body {
    flex-direction: column;
    align-items: center;
  }
  .footer__copyright {
    color: #eef3ff;
    font-size: 16px;
    line-height: 22px;
    text-align: center;
    padding-top: 56px;
    max-width: 532px;
    display: flex;
    flex-direction: column;
  }
}
@media (max-width: 720px) {
  .footer {
    padding: 30px 30px 37px 30px;
  }
  .footer__block-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .block__logo {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .footer__title {
    text-align: center;
  }
  .navigation__wrapper {
    padding-top: 38px;
    max-width: 267px;
  }
  .footer__block-navigation {
    gap: 56px;
  }
  .navigation__wrapper {
    max-width: 313px;
    justify-content: space-between;
  }
}
</style>
