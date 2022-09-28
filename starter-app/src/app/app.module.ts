import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ComponentsComponent } from './components/components.component';
import { AboutComponent } from './components/about/about.component';
import { CareersComponent } from './components/careers/careers.component';
import { IndexComponent } from './components/index/index.component';
import { LocationsComponent } from './components/locations/locations.component';
import { AppRoutingModule } from './components/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    ComponentsComponent,
    AboutComponent,
    CareersComponent,
    IndexComponent,
    LocationsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
