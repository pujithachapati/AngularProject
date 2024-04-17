import { Address } from "./address";
import { Product } from "./product";

export class Order {
    customername!:String;
    rate!:number;
    quantity!:number;
    addresslist:Address[] = [];
    product!:Product;
}
