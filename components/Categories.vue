<template>
  <div class="categories">
    <h2 class="category__title">Проекты</h2>
    <nav class="categories__navigation">
      <ul class="categories-list">
        <li
          v-for="category in categories"
          :key="category.id"
          class="categories-link"
          @click="changeCategory(category.id)"
        >
          {{ category.name }}
        </li>
      </ul>
    </nav>
  </div>
</template>
<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useProjectStore } from "~/stores/ProjectProducts";
const store = useProjectStore();
const { categories } = storeToRefs(store);
store.getCategories();
const changeCategory = (id: number) => {
  store.currentCategory = id;
};
</script>

<style>
.category__title {
  margin-top: 76px;
  font-weight: 500;
  font-size: 38px;
  color: #eef3ff;
}

.categories__navigation {
  margin-top: 78px;
}

.categories-list {
  display: flex;
  justify-content: space-between;
  list-style-type: none;
}

.categories-link {
  padding: 10px 29px;
  background-color: #2b2d3a;
  color: #eef3ff;
  font-weight: 300;
  font-size: 20px;
  border-radius: 7px;
  box-shadow: -5px 10px 60px 14px rgba(23, 27, 44, 0.75);
}
</style>
