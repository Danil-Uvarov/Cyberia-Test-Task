<template>
  <ul class="breadcrumbs">
    <li class="breadcrumbs__link-main">Главная /</li>
    <li class="breadcrumbs__link-project">Проекты</li>
  </ul>
</template>

<script setup lang="ts"></script>
<style>
.breadcrumbs {
  list-style-type: none;
  display: flex;
  gap: 5px;
  margin-top: 110px;
}

.breadcrumbs__link-main {
  color: rgb(196, 210, 227);
}

.breadcrumbs__link-project {
  color: rgb(97, 101, 128);
}
</style>