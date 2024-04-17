import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { ProductserviceService } from '../services/productservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router,private productservice:ProductserviceService,private fb:FormBuilder) { }

  ngOnInit(): void {
  }
  loginForm=this.fb.group({
    email:['',Validators.required],
    password:['',Validators.required]
  })
  get loginform(){
    return this.loginForm.controls;
  }

  login(){
    const data= this.loginForm.value;
    if(data){
     const email=data.email;
     const password=data.password;
     if(email){
      this.productservice.checkvalidate({email,password}).subscribe(
        (res)=>{
          if(res){
              localStorage.setItem('user',email);
              console.log('Login Successful');
              this.router.navigate(['dashboard']);
          }else{
            console.log('Login failed');
          }
        }
      )
     }
   }
 }
}
