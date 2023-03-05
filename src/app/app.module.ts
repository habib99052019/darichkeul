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
import { FormReservationComponent } from './components/form-reservation/form-reservation.component';
import { FormsModule,ReactiveFormsModule } from "@angular/forms";
import { FermeComponent } from './components/ferme/ferme.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatNativeDateModule,MAT_DATE_LOCALE} from '@angular/material/core'
import {MatDatepickerModule} from '@angular/material/datepicker';
import { FormGlobaleComponent } from './components/form-globale/form-globale.component'


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
    FormReservationComponent,
    FermeComponent,
    FormGlobaleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NoopAnimationsModule,
    MatDatepickerModule, 
    MatNativeDateModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
