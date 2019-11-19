import {Category} from "models/category";

export default interface Group {
    group: string;
    categories: Array<Category>;
}