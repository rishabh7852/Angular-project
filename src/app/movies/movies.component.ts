import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { StarRatingComponent } from "../feature/star-rating/star-rating.component";
import { CommonModule, NgFor } from '@angular/common';

@Component({
    selector: 'app-movies',
    standalone: true,
    templateUrl: './movies.component.html',
    styleUrl: './movies.component.css',
    imports: [HeaderComponent, StarRatingComponent,CommonModule,NgFor]
})
export class MoviesComponent implements OnInit {

  type = '';
  id = '';
  url = '';
  movies: any;
  movie : any;
 

  constructor(private route: ActivatedRoute, private http: HttpClient){ }

  ngOnInit(): void {
    this .type = this.route.snapshot.params['type'];
    this.id = this.route.snapshot.params['id'];
    if (this.type === 'trendingmovies') {
      this.url = 'http://localhost:4200/assets/data/trendingMovies';
    }
    if (this.type === 'theatresMovies') {
      this.url = 'http://localhost:4200/assets/data/theatremovies.json';
    }
    if (this.type === 'popularMovies') {
      this.url = 'http://localhost:4200/assets/data/popularmovies.json';
    }
    this.getMovie();
    
  }
  getMovie(){
    this.http.get(this.url).subscribe((movies) => {
      this.movies = movies;
      let index = this.movies.findIndex((movie: { id: string; }) => movie.id == this.id);

      if (index > -1) {
        this.movie = this.movies[index];

      }

    });

  }

}
