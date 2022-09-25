import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SuvsComponent } from './components/suvs/suvs.component';
import { SedansComponent } from './components/sedans/sedans.component';
import { LuxuryComponent } from './components/luxury/luxury.component';

@NgModule({
  declarations: [
    AppComponent,
    SuvsComponent,
    SedansComponent,
    LuxuryComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

