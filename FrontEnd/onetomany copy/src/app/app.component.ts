import { Component, OnInit } from '@angular/core';
import { SenderserviceService } from './services/senderservice.service';
import { NavigationEnd, Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { ProductserviceService } from './services/productservice.service';
import { Product } from './classes/product';
import { Componentlist } from './classes/componentlist';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'onetomany';
  notificationcount: number = 0;
  showOverlay: boolean = false;
  productData: any;
  show:boolean=true;
  products: Product[] = [];
  filteredComponents:Componentlist[]=[];
  components:Componentlist[]=[];
  showNoRecordsMessage = false;
  siteLanguage:string = 'English';
  constructor(private translate :TranslateService,private senderservice:SenderserviceService,private router:Router,private fb:FormBuilder,private productservice:ProductserviceService) {
    translate.setDefaultLang('en');
  }
  changeLocale(locale :string){
    this.translate.use(locale);
  }
  ngOnInit(): void {
    this.productservice.getcomponents().subscribe(components=>{
      this.components=components;
    });
    this.searchForm.get('searchTerm')?.valueChanges.subscribe(() => {
      this.search();
    });
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.notificationcount = 0;
        this.productData=null;
        if(event.url =='/login' || event.url == '/'){
          this.show=false;
        }else{
          this.show=true;
        }
      }
    });
    this.senderservice.productData.subscribe(data=>{
      this.productData=data;
      if (this.productData) {
        this.Overlay();
      }
    })
  }
  searchForm=this.fb.group({
    searchTerm:['']
  })
  get searchform(){
    return this.searchForm.controls;
  }
  incrementNotificationCount() {
    this.notificationcount++;
  }
  decrementNotificationCount(){
    this.notificationcount--;
  }
  resettheNotification(){
    this.notificationcount=0;
  }
  Overlay(){
      this.showOverlay = true;
  }
  getTotalPrice(){
  let totalPrice = 0;
  let orderprice=0;
    if (this.productData) {
      for (const order of this.productData.orders) {
        orderprice = (order.quantity)*(order.rate)
        totalPrice += orderprice;
      }
    }
    return totalPrice;
  } 

  logout() {
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
  }
  search() {
    const searchTerm = this.searchform.searchTerm?.value;
      if (searchTerm) {
      const lowercaseSearchTerm = searchTerm.toLowerCase().trim();
      this.filteredComponents = this.components.filter(component => {
        return component.moduleName.toLowerCase().includes(lowercaseSearchTerm);
      });
    }
  }
  onComponentSelected(event:any) {
    const component:Componentlist=event.option.value;
    if(component.route){
      this.router.navigate([component.route]);
      this.searchform.searchTerm.setValue(component.moduleName)
   }
  }

}
