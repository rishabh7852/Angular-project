import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { MoviesComponent } from './movies/movies.component';

export const routes: Routes = [
    {path : '', redirectTo: 'login', pathMatch: 'full'},

    {path: 'login', component: LoginComponent},

    {path: 'Home', component: HomeComponent},

    // {path: 'News/:type/:id', component: MoviesComponent},
    {path: 'movie/:type/:id', component: MoviesComponent},

    {path: 'Registration', component: ContactComponent},

    {path: 'about', component: AboutComponent},

    {path: '**', component: HomeComponent},



];
