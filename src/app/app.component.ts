import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { LoginComponent } from './login/login.component';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { StarRatingComponent } from './feature/star-rating/star-rating.component';
import { FeatureModule } from './feature/feature.module';
import { MoviesComponent } from './movies/movies.component';
import { NgModel } from '@angular/forms';




@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [HomeComponent, LoginComponent,MoviesComponent,StarRatingComponent,NewsComponent,NgbRatingModule, HttpClientModule, RouterLink, RouterLinkActive, RouterOutlet,]
})
export class AppComponent {
  title = 'AngularProject';
}
