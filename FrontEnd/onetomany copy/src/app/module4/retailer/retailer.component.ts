import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Type } from 'src/app/classes/type';
import { ProductserviceService } from 'src/app/services/productservice.service';

@Component({
  selector: 'app-retailer',
  templateUrl: './retailer.component.html',
  styleUrls: ['./retailer.component.css']
})
export class RetailerComponent implements OnInit {

  types:Type[]=[];
  RVid!:number;
  isupdateActive:boolean=false;
  constructor(private productservice:ProductserviceService,private fb:FormBuilder,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.gettypes()
    this.route.params.subscribe(val=>{
      this.RVid=val['id'];
      if(this.RVid){
        this.productservice.getbyretailerandvenderid(this.RVid).subscribe((response:any)=>{
          this.isupdateActive=true;
          this.retailform.patchValue(response);
        });
      }
    });
  }

  retailform=this.fb.group({
    id:[''],
    type:[''],
    name:[''],
    phoneno:[''],
    address1:[''],
    address2:[''],
    aadhaarId:['']
  })
  gettypes(){
    this.productservice.gettypes().subscribe(data=>{
      this.types=data;
    })
  }
  onSubmit(){
    const formData=this.retailform.value;
    console.log(formData);
    this.productservice.createorupdate(formData).subscribe(()=>{
      this.router.navigate(['createretailer/retailerlist']);
    });
  }

}
