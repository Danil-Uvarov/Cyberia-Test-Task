<template>
  <section class="projects">
    <div class="project__wrapper">
      <div v-for="item in projects" :key="item.id" class="item__container item">
        <div class="item__bacground"></div>
        <img :src="item.image" alt="" class="item__background-img" />
        <div class="project__image-item image">
          <img src="image/icon.svg" alt="" class="item__icon-img" />
          <h3 class="image__title">{{ item.title }}</h3>
          <div class="image__description">{{ item.description }}</div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useProjectStore } from "~/stores/ProjectProducts";

const store = useProjectStore();
store.getItem();
const { projects } = storeToRefs(store);
</script>
<style>
.projects {
  width: 100%;
}

.project__wrapper {
  margin: 0 auto;
  padding: 174px 0 424px 0;
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
}
.item__container {
  position: relative;
}
.item__bacground {
  background: linear-gradient(1turn, #090b21, rgba(49, 51, 65, 0) 100.42%);
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.item__background-img {
  width: 100%;
  max-width: 387px;
  object-fit: contain;
  background-image: linear-gradient(#090b21, #ffffff);
}

.project__image-item {
  position: absolute;
  bottom: 29px;
  left: 29px;
}

.item__icon-img {
  width: 24px;
  height: 24px;
}

.image__title {
  margin-top: 8px;
  font-size: 28px;
  font-weight: 500;
  color: #ffffff;
}

.image__description {
  font-family: "Open Sans";
  margin-top: 7px;
  font-size: 14px;
  font-weight: 400;
  color: #ffffff;
}
@media (max-width: 1240px) {
  .project__wrapper {
    max-width: 835px;
    justify-content: space-between;
    padding: 52px 0 86px 0;
  }
}
@media (max-width: 910px) {
  .project__wrapper {
    max-width: 330px;
    padding: 97px 0 227px 0;
  }
}
</style>
