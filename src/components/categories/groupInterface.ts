import Category from "./categoryInterface";

export default interface Group {
    group: string;
    categories: Array<Category>;
}