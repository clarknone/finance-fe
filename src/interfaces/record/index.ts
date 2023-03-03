import { ICategory } from "../category";

export interface IRecord {
  description: string;
  category: ICategory;
  amount: number;
  createdAt: string;
  id: string;
}
