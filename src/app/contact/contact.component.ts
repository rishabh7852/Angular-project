import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { AuthService } from '../services/auth.service';
import { FormsModule } from '@angular/forms';
import {  Router } from '@angular/router';
import { FooterComponent } from "../footer/footer.component";

@Component({
    selector: 'app-contact',
    standalone: true,
    templateUrl: './contact.component.html',
    styleUrl: './contact.component.css',
    imports: [HeaderComponent, FormsModule, FooterComponent]
})
export class ContactComponent implements OnInit {
    FirstName = "";
    LastName = "";
    errorMsg: any;
    errorLast: any;
    errorEmail:any;
    Email="";
    PhoneNumber ="";
    errorPhone:any;
    errorPassword: any
    Password ="";
      


   
    constructor(private auth:AuthService,private router:Router){ }
 
    ngOnInit(): void {
        
    }
    RegisterForm(){
        if(this.FirstName.trim().length === 0){
            this.errorMsg = "Name is Required*";
        } 
        if(this.LastName.trim().length === 0){
            this.errorLast= "*Last Name is Required";
        }
        if(this.Email.trim().length === 0){
            this.errorEmail = "Email is Required*";
        }
        if (this.PhoneNumber.trim().length === 0){
            this.errorPhone = "Phone Number is Required*";
        }
        if (this.Password.trim().length !< 7) {
            this.errorPassword = "Only six dight password*"
            
        }else{
            let redricate = this.auth.RegisterForm(this.FirstName, this.LastName,this.Email,this.Password,this.PhoneNumber,);

            if(redricate === 200) {
                this.router.navigate(['Home'])
            }

            
           
        }
        
    }
   









}
