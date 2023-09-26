<template>
  <div class="page-wrapper">
    <TheHeader />
    <Breadcrumbs />
    <Categories />
    <Projects />
  </div>
  <Form />
  <TheFooter />
</template>

<script setup lang="ts">
import TheHeader from "~/components/TheHeader.vue";
import Breadcrumbs from "~/components/Breadcrumbs.vue";
import Categories from "~/components/Categories.vue";
import Projects from "~/components/Projects.vue";
import Form from "~/components/Form.vue";
import TheFooter from "~/components/TheFooter.vue";
</script>

<style scoped>
.page-wrapper {
  font-family: "Rubik";
  margin: 0 auto;
  max-width: 1242px;
}
@media (max-width: 1236px) {
  .page-wrapper {
    width: 90%;
    margin: 0 auto;
  }
}
</style>
