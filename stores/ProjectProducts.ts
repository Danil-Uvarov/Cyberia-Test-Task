import {defineStore} from "pinia";
import {IProject} from "~/models/entyties/ICategoryProjects";
import {ICategory} from "~/models/entyties/IProjectFilter";

interface ProdutsState {
  projects: IProject[];
  categories: ICategory;
  currentCartegory: undefined;
}

export const useProjectStore = defineStore("products", {
  state: (): ProdutsState => ({
    categories: [],
    projects: [],
    currentCategory: undefined,
  }),
  getters: {},
  actions: {
    async getItem() {
      const data = await $fetch<{ items: IProject[] }>(
          "https://dev.backend.cyberia.studio/api/v1/projects"
      );
      console.log(data.items)
      this.projects = data.items;

    },
    async getCategories() {
      const items = await $fetch<{ items: ICategory[] }>(
          "https://dev.backend.cyberia.studio/api/v1/project-categories"
      );
      this.categories = items.items;

    },
  },
})
