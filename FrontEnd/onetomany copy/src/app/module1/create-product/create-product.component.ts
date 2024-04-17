import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { ProductType } from 'src/app/classes/product-type';
import { ProductserviceService } from 'src/app/services/productservice.service';
import { SenderserviceService } from 'src/app/services/senderservice.service';
import { PopupComponent } from '../component/popup/popup.component';
import { Branchnames } from 'src/app/classes/branchnames';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  productId!: number;
  productType: ProductType[] = [];
  price: any[] = [];
  isUpdate = false;
  initialordercount:number=0;
   labelName="Name";

  Branchnames: Branchnames[] = [];
  constructor(private fb: FormBuilder, private router: Router, private service: ProductserviceService, private route: ActivatedRoute, private dialog: MatDialog,private app:AppComponent,private sendservice:SenderserviceService) { }

  ngOnInit(): void {
    this.getbranches();
    this.getProductType();
    this.route.params.subscribe(val => {
      this.productId = val['id'];
      if (this.productId) {
        this.service.getbyid(this.productId).subscribe((res => {
          this.isUpdate = true;
          this.selectProductType(res.productusage);
          res.orders.forEach((order: any, index: number) => {
            this.AddOrder();
            this.getAddressArray(index).clear();
            order.addresslist.forEach((add: any) => {
              this.getAddressArray(index).push(this.addressRow());
            });
          });
          this.form.patchValue(res);
          const currentordercount = this.orderForm.length;
          if(this.isUpdate){
            for(this.initialordercount=0;this.initialordercount<currentordercount;this.initialordercount++)
            this.app.incrementNotificationCount();
          }
          this.sendservice.sendProductData(res);
        }));
      } else{
        this.AddOrder();
      }
    });
    
  }
  getbranches(){
    this.service.getbranches().subscribe((res: Branchnames[]) => {
      this.Branchnames= res;
    });
  }

  form = this.fb.group({
    id: [''],
    productname: ['', [Validators.required, CreateProductComponent.notAllowedString]],
    productusage: ['', Validators.required],
    branch: ['', Validators.required],
    orders: this.fb.array([])
  });

  public getProductType() {
    this.service.getProductType().subscribe((res: ProductType[]) => {
      this.productType = res;
    });
  }

  get orderForm() {
    return this.form.controls['orders'] as FormArray;
  }

  orderRow() {
    return this.fb.group({
      id: ['',Validators.required],
      rate:['',Validators.required],
      customername: ['',Validators.required],
      quantity: ['',Validators.required],
      addresslist: this.fb.array([this.addressRow()])
    })
  }
  addressRow() {
    return this.fb.group({
      id: [''],
      doorno: [''],
      street: ['']
    })
  }

  AddOrder() {
    this.orderForm.push(this.orderRow());
  }

  get fc() {
    return this.form.controls;
  }

  removeOrder(i: number) {
    if(i>0){
      const orderFormArray = this.orderForm;
      const idValue = orderFormArray.at(i).get('id')?.value;
      if (idValue) {
          this.app.decrementNotificationCount();
      }
      this.orderForm.removeAt(i);
    }
  }

  getAddressArray(index: number) {
    return this.orderForm.at(index).get('addresslist') as FormArray;
  }

  AddAddress(orderIndex: number) {
    const ref = this.dialog.open(PopupComponent, {
      width: '70%',
      data: {
        formVal: this.getAddressArray(orderIndex).value,
      }
    });
    ref.afterClosed().subscribe((data) => {
      console.log("afterclosed method is called");
      console.log(data);
      if (data) {
        this.getAddressArray(orderIndex).clear();
        data.addresslist.forEach((address: any) => {
          this.getAddressArray(orderIndex).push(this.fb.group({
            id: address.id,
            doorno: address.doorno,
            street: address.street
          }))
        });
      }
    })
  }

  onSubmit() {
    const formData = this.form.value;
    console.log(formData);
    this.service.createProduct(formData).subscribe(() => {
      this.router.navigate(['productlist/products']);
    });
  }

  static notAllowedString(control: AbstractControl): ValidationErrors | null {
    let controlvalue = control.value;
    if (controlvalue.trim() == "abc") {
      return { notAllowed: true }
    }
    else {
      return null;
    }
  }

  show() {
    console.log(this.orderForm);
  }
  selectProductType(value: any) {
    switch (value) {
      case 'Laptop':
        this.labelName = 'Laptop Name';
        break;
      case 'Mobile':
        this.labelName = 'Mobile Name';
        break;
      default:
        this.labelName = 'Name';
        break;
    }
  }
  addCart() {
    const formData = this.form.value;
    this.app.resettheNotification();
    formData.orders?.forEach((order: any) => {
        if (order.customername !== '' && order.rate !== '' && order.quantity !== '') {
            this.app.incrementNotificationCount();
        } 
    });
    this.sendservice.sendProductData(formData);
  }
  
}

