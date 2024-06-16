import { Component, OnInit } from '@angular/core';
import {  Router, RouterLink, RouterLinkActive, RouterOutlet, } from '@angular/router';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive,RouterOutlet],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {

  constructor( private router: Router, private auth: AuthService){ }

  ngOnInit(): void {
    
  }

  closeApp(){
    this.auth.logout();

  }

}
