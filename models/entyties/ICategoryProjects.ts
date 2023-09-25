import {ICategory} from "~/models/entyties/IProjectFilter";

export interface IProject {
  id: number;
  title: string;
  description: string;
  image_dark: string;
  categories: ICategory[];
}
