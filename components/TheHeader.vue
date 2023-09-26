<template>
  <header class="header">
    <img src="/image/logo.png" alt="" class="header__logo" />
    <nav class="header__menu menu">
      <ul class="menu__list">
        <li class="menu__link">О нас</li>
        <li class="menu__link">Услуги</li>
        <li class="menu__link">Проекты</li>
        <li class="menu__link">Блог</li>
        <li class="menu__link">Контакты</li>
      </ul>
    </nav>
    <div class="header__theme">
      <img src="/image/theme.png" alt="" />
    </div>
    <Burger />
  </header>
</template>

<script setup lang="ts">
import Burger from "./menu/burger.vue";
</script>
<style scoped>
.header {
  padding-top: 75px;
  display: flex;
  width: 100%;
  align-items: center;
}

.header__logo {
  cursor: pointer;
  width: 131px;
  height: 28px;
}
.header__logo:hover {
  padding-bottom: 5px;
  transition: 0.5s;
  border-bottom: 1px solid #2d76f9;
}

.header__menu {
  margin-left: 191px;
  width: 100%;
}

.menu__list {
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.menu__link {
  cursor: pointer;
  font-weight: 300;
  font-size: 18px;
  list-style: none;
  color: #eef3ff;
  padding-bottom: 2px;
}

.menu__link:hover {
  transition: 0.5s;
  border-bottom: 1px solid #2d76f9;
}

.header__theme {
  margin-left: 67px;
  width: 60px;
  height: 30px;
}
@media (max-width: 1024px) {
  .header {
    justify-content: space-between;
  }
  .header__theme {
    display: none;
  }
  .header__menu {
    display: none;
  }
}
</style>
