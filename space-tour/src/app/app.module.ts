import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DestinationsComponent } from './destinations/destinations.component';
import { CrewComponent } from './crew/crew.component';
import { HomeComponent } from './home/home.component';
import { TechnologyComponent } from './technology/technology.component';
import { CrewListComponent } from './crew/crew-list/crew-list.component';
import { DestListComponent } from './destinations/dest-list/dest-list.component';
import { TechListComponent } from './technology/tech-list/tech-list.component';

@NgModule({
  declarations: [
    AppComponent,
    DestinationsComponent,
    CrewComponent,
    HomeComponent,
    TechnologyComponent,
    CrewListComponent,
    DestListComponent,
    TechListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
