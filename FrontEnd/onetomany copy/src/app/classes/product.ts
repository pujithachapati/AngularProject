import { Branchnames } from "./branchnames";
import { Order } from "./order";

export class Product {
    id!:number;
    productname!:String;
    productusage!:String;
    branch!:number;
    orders: Order[] = [];
}
