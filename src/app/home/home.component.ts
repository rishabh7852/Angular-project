import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { HttpClient } from '@angular/common/http';
import { CommonModule, NgFor } from '@angular/common';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { StarRatingComponent } from "../feature/star-rating/star-rating.component";
import {  Router } from '@angular/router';
import { FooterComponent } from "../footer/footer.component";



@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [HeaderComponent, NgFor, CommonModule, NgbRatingModule, StarRatingComponent, FooterComponent]
})
export class HomeComponent implements OnInit {

    
    trendingmovies:any
    theatresMovies: any;
    popularMovies: any

    constructor(private http: HttpClient, private router:Router ) { }

    ngOnInit(): void {
        this.getTrendingMovies();
        this.getTheatresMovies();
        this.getpopularMovies();
    }

    getTrendingMovies() {
        this.http.get('http://localhost:4200/assets/data/trendingMovies').subscribe((movie) => {
            this.trendingmovies = movie;
            console.log(this.trendingmovies);    

        });



    }
    getTheatresMovies() {
        this.http.get('http://localhost:4200/assets/data/theatremovies.json').subscribe((movie) => {
            this.theatresMovies = movie;
            console.log(this.theatresMovies);    

        });



    }
    getpopularMovies() {
        this.http.get('http://localhost:4200/assets/data/popularmovies.json').subscribe((movie) => {
            this.popularMovies = movie;
            console.log(this.popularMovies);    

        });
    }

    goToMovie(type:string, id:string){
        this.router.navigate(['movie',type,id]);

    }


}
