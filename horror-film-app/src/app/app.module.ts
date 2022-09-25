import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainMoviesComponent } from './components/main-movies/main-movies.component';
import { MoviePicsComponent } from './components/movie-pics/movie-pics.component';

@NgModule({
  declarations: [
    AppComponent,
    MainMoviesComponent,
    MoviePicsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
