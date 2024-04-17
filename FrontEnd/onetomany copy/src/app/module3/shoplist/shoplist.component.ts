import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Shop } from 'src/app/classes/shop';
import { ProductserviceService } from 'src/app/services/productservice.service';

@Component({
  selector: 'app-shoplist',
  templateUrl: './shoplist.component.html',
  styleUrls: ['./shoplist.component.css']
})
export class ShoplistComponent implements OnInit {

  shops: Shop[] = [];
  displayedColumns: string[] = ['shopId', 'shopname', 'actions'];
  constructor(private productService:ProductserviceService,private router:Router) {}

  ngOnInit(): void {
    this.getshops();
  }

  private getshops() {
    this.productService.getShopList().subscribe((data: Shop[]) => { 
      console.log(data);
      this.shops = data;
    });
  }
  updateShop(id:number){
    this.router.navigate(['createshop/update',id]);
  }
  deleteShop(id:number){
    this.productService.deleteShop(id).subscribe(data=>{
      this.getshops();
    })
  }
  goTo(){
    this.router.navigate(['createshop/shop']);
  }
}
