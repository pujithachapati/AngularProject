import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder } from '@angular/forms';
import { MatDatepicker } from '@angular/material/datepicker';
import { ActivatedRoute, Router } from '@angular/router';
import { Branchnames } from 'src/app/classes/branchnames';
import { Product } from 'src/app/classes/product';
import { ProductserviceService } from 'src/app/services/productservice.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  Branchnames: Branchnames[] = [];
  products:any[]=[];
  shopId!:number;
  isUpdate:boolean=false;

  constructor(private fb:FormBuilder,private router:Router,private service:ProductserviceService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.getbranches();
    this.route.params.subscribe(val => {
      this.shopId = val['id'];
      if (this.shopId) {
        this.service.getbyshopid(this.shopId).subscribe((res => {
          this.isUpdate = true;
          res.branchlist.forEach((branch:any,index:number) => {
            this.addbranch();
            this.selectProduct(index,branch.branch);
          });
          this.shopForm.patchValue(res);
          console.log(res);
        }));
      } else{
        this.addbranch();
      }
    });
    
  }
  shopForm=this.fb.group({
    id:[''],
    shopId:[''],
    shopname:[''],
    branchlist:this.fb.array([])
  });

  get shopform(){
    return this.shopForm.controls
  }

  addbranch(){
    this.branchForm.push(this.branchrow());
  }
  branchrow(){
    return this.fb.group({
      id: [''],
      branch:[''],
      product:[''],
      deliverydate:['']
    })
  }
  get branchForm() {
    return this.shopForm.controls['branchlist'] as FormArray;
  }
  removebranch(i:number){
    return  this.branchForm.removeAt(i);
  }
  onSubmit(){
    const formData = this.shopForm.value;
    console.log(formData);
    this.service.createShop(formData).subscribe(() => {
      this.router.navigate(['createshop/list']);
    });

  }
  public getbranches() {
    this.service.getbranches().subscribe((res: Branchnames[]) => {
      this.Branchnames= res;
      console.log(res);
    });
  }
   selectProduct(i:number,selectVal:any){
    this.service.getproductbybranch(selectVal).subscribe(response=>{
      //this.products =response;
      console.log("response----",response);
      this.products[i]=response;
    })

  }
}
  
