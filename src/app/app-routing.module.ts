import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoomGridComponent } from "./components/room-grid/room-grid.component";
import { HomeComponent } from "./components/home/home.component";
import { AboutComponent } from "./components/about/about.component";
import { ActivitiesComponent } from "./components/activities/activities.component";
import { ContactComponent } from "./components/contact/contact.component";
import { RestaurantComponent } from "./components/restaurant/restaurant.component";
import { RoomDetailsComponent } from "./components/room-details/room-details.component";
import { FermeComponent } from "./components/ferme/ferme.component";

const routes: Routes = [

  {path: '', component: HomeComponent },
  {path: 'about', component: AboutComponent },
  {path: 'activités', component: ActivitiesComponent },
  {path: 'contact', component: ContactComponent },
  {path: 'restaurant', component: RestaurantComponent },
  {path: 'rooms', component: RoomGridComponent },
  {path: 'room/:id', component: RoomDetailsComponent },
  {path: 'ferme', component: FermeComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
