import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  Username = "";
  Password = "";
  errorMsg: any;

 constructor( private auth: AuthService, private router: Router){ }

  ngOnInit(): void{

  }
  login(){
    if(this.Username.trim().length === 0) {
      this.errorMsg = "username is required";
    } else if (this.Password.trim().length === 0) {
      this.errorMsg = "Password is required";
      
    } else {
      this.errorMsg = "";
      let res = this.auth.login(this.Username, this.Password);
      
      if (res === 200) {
        this.router.navigate(['Home'])
      }
      if (res === 403) {
        this.errorMsg = "Wrong Input"
      }

    }
  }

}
