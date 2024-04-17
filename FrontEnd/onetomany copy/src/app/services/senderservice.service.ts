import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SenderserviceService {

  private productdatasubject = new BehaviorSubject<any>(null);
  public productData=this.productdatasubject.asObservable();
  constructor() { }
  
  sendProductData(data:any){
    console.log(data);
    this.productdatasubject.next(data);
  }
}
