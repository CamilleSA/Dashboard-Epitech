import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignInComponent } from '../../components/sign-in/sign-in.component';
import { SignUpComponent } from '../../components/sign-up/sign-up.component';
import { DashboardComponent } from '../../components/dashboard/dashboard.component';
import { ForgotPasswordComponent } from '../../components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from '../../components/verify-email/verify-email.component';
import { WeatherComponent} from '../../components/weather/weather.component';
import { DisplayWeatherComponent} from '../../components/display-weather/display-weather.component';
import {MoviesComponent} from '../../components/movies/movies.component';
import { AuthGuard } from "../../shared/guard/auth.guard";
import {ExchangeComponent} from '../../components/exchange/exchange.component';
import {NewsComponent} from '../../components/news/news.component';
import {GithubComponent} from '../../components/github/github.component';
import {RepogithubComponent} from '../../components/repogithub/repogithub.component';
import {YoutubeSearchComponent} from '../../components/youtube-search/youtube-search.component';
import {SearchInputComponent} from '../../components/search-input/search-input.component';
import {DashboarduserComponent} from '../../components/dashboarduser/dashboarduser.component';
import {SearchMovieComponent} from '../../components/search-movie/search-movie.component';
import {AboutJsonComponent} from '../../components/about-json/about-json.component';
import {WeatherTrueComponent} from '../../components/weather-true/weather-true.component';
import {CalculatorComponent} from '../../components/calculator/calculator.component';

const routes: Routes = [
  { path: '', redirectTo: '/sign-in', pathMatch: 'full'},
  { path: 'sign-in', component: SignInComponent},
  { path: 'register-user', component: SignUpComponent},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'verify-email-address', component: VerifyEmailComponent },
  { path: 'weather', component: WeatherComponent },
  { path: 'display-weather', component: DisplayWeatherComponent },
  { path: 'movies', component: MoviesComponent },
  { path: 'exchange', component: ExchangeComponent },
  { path: 'news', component: NewsComponent },
  { path: 'githubrepo', component: RepogithubComponent },
  { path: 'youtube', component: YoutubeSearchComponent },
  { path: 'input', component: SearchInputComponent },
  { path: 'search-movie', component: SearchMovieComponent },
  { path: 'userdash', component: DashboarduserComponent, canActivate: [AuthGuard]},
  { path: 'about.json', component: AboutJsonComponent },
  { path: 'weather-true', component: WeatherTrueComponent },
  { path: 'calculator', component: CalculatorComponent },
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
