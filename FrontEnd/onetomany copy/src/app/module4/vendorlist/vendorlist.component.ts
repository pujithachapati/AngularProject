import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RetailAndVendors } from 'src/app/classes/retail-and-vendors';
import { ProductserviceService } from 'src/app/services/productservice.service';

@Component({
  selector: 'app-vendorlist',
  templateUrl: './vendorlist.component.html',
  styleUrls: ['./vendorlist.component.css']
})
export class VendorlistComponent implements OnInit {

  vendors: RetailAndVendors[] = [];
  displayedColumns: string[] = ['type', 'name','phoneno','address1','address2','aadhaarId', 'actions'];
  constructor(private productService:ProductserviceService,private router:Router) { }

  ngOnInit(): void {
    this.getvendors();
  }

  private getvendors(){
    this.productService.getVendorsList('vendor').subscribe((data:RetailAndVendors[])=>{
      this.vendors=data;
    })
  }
  updatevendor(id:number){
    this.router.navigate(['createretailer/update',id]);
  }
  deletevendor(id:number){
    this.productService.deleteretailandvendo(id).subscribe(data=>{
      this.getvendors();
    })
  }
  goTo(){
    this.router.navigate(['createretailer/create']);
  }

}
