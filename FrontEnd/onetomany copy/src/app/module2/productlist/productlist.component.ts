import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from 'src/app/classes/product';
import { ProductserviceService } from 'src/app/services/productservice.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {

  products: Product[] = [];
  productSuggestions:Product[]=[];
  displayedColumns: string[] = ['productName', 'productType', 'actions'];
  constructor(private productService:ProductserviceService,private router:Router,private fb:FormBuilder) {}

  ngOnInit(): void {
    this.getProducts();
    // this.searchForm
    this.searchForm.get('searchTerm')?.valueChanges.subscribe(() => {
      this.search();
    });
  }
  searchForm=this.fb.group({
    searchTerm:['']
  })

  get searchform(){
    return this.searchForm.controls;
  }

  private getProducts() {
    this.productService.getProductList().subscribe((data: Product[]) => { 
      console.log(data);
      this.products = data;
    });
  }
  updateProduct(id:number){
    this.router.navigate(['createproduct/update',id]);
  }
  deleteProduct(id:number){
    this.productService.deleteProduct(id).subscribe(data=>{
      this.getProducts();
    })
  }
  goTo(){
    this.router.navigate(['createproduct/create']);
  }

  search(){
    const searchTerm = this.searchform.searchTerm?.value?.toLowerCase();
    if(searchTerm){
      this.productService.getProductList().subscribe((data: Product[]) => {
        this.products = data.filter(product => {
          return product.productname.toLowerCase().includes(searchTerm) || product.productusage.toLowerCase().includes(searchTerm);
        });
      });
      }else{
        this.getProducts();
      }
    }

}
