import { Product } from "../core/products/product.model";

export class Menu{
    id:number;
    name:string;
    ingredients:Product[];
    costPrice:number;
    sellPrice:number;
}