import { Component, Inject, OnInit } from '@angular/core';
import { FormArray, FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ProductserviceService } from 'src/app/services/productservice.service';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data:any,private ref:MatDialogRef<PopupComponent>,private fb:FormBuilder,private service:ProductserviceService) { }

  ngOnInit(): void {
    if(this.data.formVal !== null){
      let address = this.data.formVal;
       this.addresslist.clear();
        for(let i =0;i<address.length;i++){
          this.addresslist.push(this.addressRow());
        }
        this.addresslist.patchValue(address);
    }
  }

  addressform = this.fb.group({
    addresslist: this.fb.array([this.addressRow()])
  });
  

  get addresslist(){
    return this.addressform.get('addresslist') as FormArray;
  }

  addressRow(){
    return this.fb.group({
      id:[''],
      doorno:[''],
      street:['']
    })
  }

  addAddress(){
    this.addresslist.push(this.addressRow());
  }

  removeAddress(index:number){
    this.addresslist.removeAt(index);
  }

  onSubmit(){
    const addressdata=this.addressform.value;
    this.ref.close(addressdata);
  }

  close(){
    this.ref.close();
  }

}
