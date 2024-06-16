import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 

  constructor(private router: Router) { }


  login(uname: string, pword: string){
    if (uname === 'Rishabh' && pword === '252525'){
      return 200; 
    } else {
      return 403;
    }
  }

  logout(){
    this.router.navigate(['login'])
  }

  RegisterForm(FirstName: string, LastName: string, Email: any, Password: any,PhoneNumber: any) {
    if (FirstName === '' && LastName === '' && Email ==='' && Password === '' && PhoneNumber === '') {
      return 200;
    } else{
      return 403;
    }
}






}
