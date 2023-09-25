<template>
  <section class="projects">
    <div v-for="item in projects" :key="item.id" class="item__container item">
      <img :src="item.image" alt="" class="item-img" />
      <div class="project__image-item image">
        <img src="" alt="" class="item-logo" />
        <h3 class="image__title">{{ item.title }}</h3>
        <div class="image__description">{{ item.description }}</div>
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
  padding-top: 174px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  justify-content: center;
}

.item__container {
  position: relative;
}

.item-img {
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

.item-logo {
}

.image__title {
  font-size: 28px;
  font-weight: 500;
  color: #ffffff;
}

.image__description {
  margin-top: 7px;
  font-size: 14px;
  font-weight: 400;
  color: #ffffff;
}
</style>
