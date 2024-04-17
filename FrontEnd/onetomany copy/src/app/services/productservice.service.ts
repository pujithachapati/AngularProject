import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../classes/product';
import { ProductType } from '../classes/product-type';
import { Order } from '../classes/order';
import { Login } from '../classes/login';
import { Shop } from '../classes/shop';
import { Branchnames } from '../classes/branchnames';
import { RetailAndVendors } from '../classes/retail-and-vendors';
import { Type } from '../classes/type';
import { Componentlist } from '../classes/componentlist';

@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {

  private apiServerUrl:string = environment.apiBaseUrl;
  constructor(private httpClient: HttpClient) { }

  //FOR PRODUCTS
  public getProductList(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(`${this.apiServerUrl}/api/products`);
  }

  public createProduct(product: any): Observable<Product> {
    return this.httpClient.post<Product>(`${this.apiServerUrl}/api/products`, product);
  }
  public getbyid(id:number):Observable<any>{
    return this.httpClient.get<any>(`${this.apiServerUrl}/api/products/${id}`);
  }
  public deleteProduct(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.apiServerUrl}/api/products/${id}`);
  }
  
  public getProductType():Observable<ProductType[]>{
    return this.httpClient.get<ProductType[]>(`${this.apiServerUrl}/api/products/getproducttype`);
  }
  public getPricebyProductType(id:number):Observable<ProductType>{
    return this.httpClient.get<ProductType>(`${this.apiServerUrl}/api/products/getpricebytype/${id}`);
  }

  public getorderid(id:number):Observable<Order>{
    return this.httpClient.get<Order>(`${this.apiServerUrl}/api/products/order/${id}`);
  }

  checkvalidate(login: any): Observable<Login> {
    return this.httpClient.post<Login>(`${this.apiServerUrl}/api/products/validate`, login);
  }

  //FOR SHOPS

  public getShopList(): Observable<Shop[]> {
    return this.httpClient.get<Shop[]>(`${this.apiServerUrl}/api/shops`);
  }
  public createShop(shop: any): Observable<Shop> {
    return this.httpClient.post<Shop>(`${this.apiServerUrl}/api/shops`, shop);
  }
  public getbyshopid(id:number):Observable<any>{
    return this.httpClient.get<any>(`${this.apiServerUrl}/api/shops/${id}`);
  }
  public deleteShop(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.apiServerUrl}/api/shops/${id}`);
  }
  public getbranches():Observable<Branchnames[]>{
    return this.httpClient.get<Branchnames[]>(`${this.apiServerUrl}/api/products/getbranchname`);
  }
  public getproductbybranch(branch:number):Observable<any>{
    return this.httpClient.get<any>(`${this.apiServerUrl}/api/products/getproductsbybranch/${branch}`);
  }

  //FOR REATILANDVENDORS

  public getAllList(): Observable<RetailAndVendors[]> {
    return this.httpClient.get<RetailAndVendors[]>(`${this.apiServerUrl}/api/retailvendors/getAllList`);
  }
  public getVendorsList(type:string):Observable<RetailAndVendors[]>{
    return this.httpClient.get<RetailAndVendors[]>(`${this.apiServerUrl}/api/retailvendors/getVendors/${type}`);
  }
  public getRetailersList(type:string):Observable<RetailAndVendors[]>{
    return this.httpClient.get<RetailAndVendors[]>(`${this.apiServerUrl}/api/retailvendors/getRetailers/${type}`);
  }
  public createorupdate(RetailAndVendors:any):Observable<RetailAndVendors>{
    return this.httpClient.post<RetailAndVendors>(`${this.apiServerUrl}/api/retailvendors/saveuser`,RetailAndVendors)
  }
  public getbyretailerandvenderid(id:number):Observable<any>{
    return this.httpClient.get<any>(`${this.apiServerUrl}/api/retailvendors/getbyid/${id}`);
  }
  public deleteretailandvendo(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.apiServerUrl}/api/retailvendors/delete/${id}`);
  }

  public gettypes():Observable<Type[]>{
    return this.httpClient.get<Type[]>(`${this.apiServerUrl}/api/retailvendors/fetchtypes`);
  }

  public getsuggestions():Observable<any[]>{
    return this.httpClient.get<any[]>(`${this.apiServerUrl}/api/products/productsuggestions`);
  }

  //FOR COMPONENTS

  public getcomponents():Observable<Componentlist[]>{
    return this.httpClient.get<Componentlist[]>(`${this.apiServerUrl}/api/components`);
  }

}
