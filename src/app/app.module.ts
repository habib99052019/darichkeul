import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ApiService } from './services/api';
import { HttpClientModule } from '@angular/common/http';
import { ContactComponent } from './components/contact/contact.component';
import { HeaderComponent } from './components/header/header.component';
import { RoomGridComponent } from './components/room-grid/room-grid.component';
import { RoomDetailsComponent } from './components/room-details/room-details.component';
import { RestaurantComponent } from './components/restaurant/restaurant.component';
import { ActivitiesComponent } from './components/activities/activities.component';
import { FermeComponent } from './components/ferme/ferme.component';
import { FormGlobalComponent } from './components/form-global/form-global.component';
import { FormRoomDetailsComponent } from './components/form-room-details/form-room-details.component';
import { SliderFormReservComponent } from './components/slider-form-reserv/slider-form-reserv.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableDHoteComponent } from './components/table-d-hote/table-d-hote.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    HeaderComponent,
    RoomGridComponent,
    RoomDetailsComponent,
    RestaurantComponent,
    ActivitiesComponent,
    FermeComponent,
    FormGlobalComponent,
    FormRoomDetailsComponent,
    SliderFormReservComponent,
    TableDHoteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
