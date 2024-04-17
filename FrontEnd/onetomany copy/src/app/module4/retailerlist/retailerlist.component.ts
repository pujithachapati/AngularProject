import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RetailAndVendors } from 'src/app/classes/retail-and-vendors';
import { ProductserviceService } from 'src/app/services/productservice.service';

@Component({
  selector: 'app-retailerlist',
  templateUrl: './retailerlist.component.html',
  styleUrls: ['./retailerlist.component.css']
})
export class RetailerlistComponent implements OnInit {

  retails: RetailAndVendors[] = [];
  displayedColumns: string[] = ['type', 'name','phoneno','address1','address2','aadhaarId', 'actions'];
  constructor(private productService:ProductserviceService,private router:Router) { }

  ngOnInit(): void {
    this.getretails();
  }

   getretails(){
    this.productService.getRetailersList('retailer').subscribe((data:RetailAndVendors[])=>{
      this.retails=data;
    })
  }
  updateretail(id:number){
    this.router.navigate(['createretailer/update',id]);
  }
  deleteretail(id:number){
    this.productService.deleteretailandvendo(id).subscribe(data=>{
      this.getretails();
    })
  }
  goTo(){
    this.router.navigate(['createretailer/create']);
  }
}
