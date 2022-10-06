import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { IndexComponent } from "./index/index.component";
import { AboutComponent } from "./about/about.component";
import { CareersComponent } from "./careers/careers.component";
import { LocationsComponent } from "./locations/locations.component";

//define Routes 
const routes: Routes = [
    {path: "", redirectTo: "index", pathMatch: "full"},
    {path: "index", component: IndexComponent},
    {path: "about", component: AboutComponent},
    {path: "careers", component: CareersComponent},
    {path: "locations", component: LocationsComponent}
]

//set up the actual module configuration
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]

})

export class AppRoutingModule {}
