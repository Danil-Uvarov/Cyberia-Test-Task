<template>
  <div class="burger">
    <button class="burger__open-button" @click="open = !open">
      <span class="burger__button-line" />
    </button>

    <div v-if="open" class="burger-menu">
      <div class="burger__navigation-block">
        <nav class="burger__menu-navigation menu">
          <ul class="menu__list">
            <li class="menu__link">О нас</li>
            <li class="menu__link">Услуги</li>
            <li class="menu__link">Проекты</li>
            <li class="menu__link">Блог</li>
            <li class="menu__link">Контакты</li>
          </ul>
        </nav>

        <div class="burger__close-block">
          <span key="menu" class="burger__close menu" @click="open = !open" />
        </div>
      </div>
      <div class="burger__line"></div>
      <div class="burger__block-contacts contact">
        <h5 class="contact__title">Контакты:</h5>
        <a href="tel:+7 499 679 45 79" class="contact__number"
          >+7 499 679 45 79</a
        >
        <a href="mailto:hello@cyberia.ru" class="contact__email"
          >hello@cyberia.ru</a
        >
        <a href="" class="contact__address">Аносова 3Б, оф. 1</a>
      </div>
      <div class="burger__line"></div>
      <img src="/image/theme.png" alt="" class="burger__theme-image" />
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";

const open = ref(false);
interface props {
  navbarItems: object;
}
defineProps<props>();
</script>
<style>
[class*="contact"] {
  color: #9aa8ba;
  font-size: 18px;
  text-decoration: none;
}
.burger {
  display: none;
  --white: #ffff;
  position: relative;
}

.burger__button-block {
}

.burger__open-button {
  border: none;
  border-radius: 3px;
}

.burger__button-line {
  display: block;
  width: 24px;
  height: 3px;
  background-color: #eef3ff;
  position: relative;
  border-radius: 3px;
}

.burger__button-line::before {
  content: "";
  top: 10px;
  right: 0px;
  display: block;
  position: absolute;
  width: 24px;
  height: 3px;
  background-color: #eef3ff;
  border-radius: 3px;
}

.burger__button-line::after {
  content: "";
  bottom: 10px;
  right: 0px;
  display: block;
  position: absolute;
  width: 24px;
  height: 3px;
  background-color: #eef3ff;
  border-radius: 3px;
}

.burger-menu {
  overflow: auto;
  padding: 97px 92px 145px 145px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #24252f;
}
.burger__navigation-block {
  position: relative;
  display: flex;
  padding-bottom: 68px;
}
.burger__menu-navigation {
  padding: 34px 0 0 0;
  display: flex;
  flex-direction: column;
  color: #000000;
}

.menu__list {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.menu__link {
  list-style: none;
  color: var(--white);
}

.burger__close {
  width: 31px;
  height: 31px;
  opacity: 0.3;
}

.burger__close::before,
.burger__close::after {
  position: absolute;
  right: 0px;
  content: " ";
  height: 31px;
  width: 2px;
  background-color: #b7c6e7;
}

.burger__close:before {
  transform: rotate(45deg);
}

.burger__close:after {
  transform: rotate(-45deg);
}
.burger__line {
  margin: 0 auto;
  width: 100%;
  height: 2px;
  background-color: #2b2d3a;
}
.burger__block-contacts {
  padding-bottom: 68px;
  display: flex;
  flex-direction: column;
}
.contact__title {
  padding-top: 38px;
}
.contact__number {
  padding-top: 42px;
}
.contact__email {
  padding-top: 19px;
}
.contact__address {
  padding-top: 19px;
}
.line {
  width:;
}
.burger__theme-image {
  padding-top: 59px;
  width: 100%;
  height: 100%;
  max-width: 60px;
  max-height: 30px;
}
@media (max-width: 1024px) {
  .burger {
    display: block;
  }
}
</style>
