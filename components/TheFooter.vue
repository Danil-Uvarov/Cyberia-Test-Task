<template>
  <footer class="footer">
    <div class="block__logo">
      <img src="/image/logo.png" alt="" class="logo__img" />
      <h6 class="footer__title">Web and machine learning developing company</h6>
    </div>
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
    <p class="footer__copyright">
      2022, digital-агентство Cyberia Положение о защите персональных данных
      Политика в отношении обработки и защиты персональных данных Оферта
      оказания услуг
    </p>
  </footer>
</template>

<script setup lang="ts"></script>

<style scoped>

[class*="contact"] {
  color: #eef3ff;
  font-size: 14px;
  text-decoration: none;
}
footer {
  padding-top: 130px;
  padding-bottom: 170px;
  max-width: 1242px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}

.block__logo {
}

.logo__img {
  width: 100%;
  max-width: 196px;
}

.footer__title {
  max-width: 207px;
  margin-top: 13px;
  font-size: 14px;
  font-weight: 400;
  color: #eef3ff;
}

.footer__block-contacts {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.contact {
}

.contact__number {
}

.contact__email {
}

.contact__address {
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
}
</style>
