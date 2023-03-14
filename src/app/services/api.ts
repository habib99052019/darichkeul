import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
//import { MatSnackBar } from '@angular/material/snack-bar';
import {environment} from "../../environments/environment"
import rooms from '../data/room.json';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  enfant:any
  adultes:any
  idRoom:any
  formReservation:any
  page: number = 1;
  public rooms = rooms;
  //public aboutcarousels = aboutcarousel;
  public roomdetails = rooms;
  //public roomcategory = roomcategory;
  //public author = authors;

  ApiPath = environment.API ;

  public route = "home"
  public dataRouteParam = ""

  isReservOpened = false
  isReservConfirmed = false

  roomsListFilter:any

  constructor(private http : HttpClient){} //private snackBar: MatSnackBar) { }


 getAllSuites(){

    return this.http.get(this.ApiPath+'/suits?today=true')

  }

  getAllResvation(){
    return this.http.get(this.ApiPath+'/reservations/check/room?room=all&front=true')

  }

  // Get Category
  // public getCategories(items: string | any[]) {
  //   var elems = roomcategory.filter((item: { id: string; }) => {
  //     return items.includes(item.id)
  //   });
  //   return elems;
  // }
  // Get Author
  // public getAuthor(items: string | any[]) {
  //   var elems = authors.filter((item: { id: string; }) => {
  //     return items.includes(item.id)
  //   });
  //   return elems;
  // }
  // Offers
  public sendEmail(form:any){
    this.http.post('https://heart-of-carthage-dubai.com/backend/email/send-mail-ichkel/',form).subscribe(res=>{
      console.log(res)})
  }
  public getOffer() {
    var elems = rooms.filter((item: { offer: boolean; }) => {
      return item.offer === true;
    });
    return elems;
  }
  // Related Room
  // public getRoomByCategory(items: string | any[]) {
  //   var elems = rooms.filter((room: { id: string; category: any[]; }) => { return parseInt(room.id) !== parseInt(this.route.snapshot.params.id) && room.category.some(r => items.includes(r)) });
  //   return elems;
  // }
  // Single Room
  public setRoom(id: any) {
    this.roomdetails = rooms.filter((item: { id: any; }) => { return item.id == id });
    return this.roomdetails
    }

  public getSingleSuite(title:string){
    return this.http.get(this.ApiPath+'/reservations/check/room?room='+title + '&front=true')

  }

  public getSingleSuiteToute(){
    return this.http.get(this.ApiPath+'/reservations/check/room?room='+"Toute la villa")

  }
  /*
  ngAfterContentInit(): void {
    this.setRoom(this.route.snapshot.params.id);
  }

  showNotification(colorName:any, text:any, placementFrom:any, placementAlign:any) {
    this.snackBar.open(text, '', {
      duration: 4000,
      verticalPosition: placementFrom,
      horizontalPosition: placementAlign,
      panelClass: colorName,
    });
  }

  //check available booking
  checkAvailableBooking(data : any){
    return this.http.post(this.ApiPath + '/booking', data)
  }

  // En ligne reservation and send email
  reservationEnligneAndSendEmail(data : any){
    return this.http.post("https://heart-of-carthage-dubai.com/backend/mail/send-mail6", data)
  }*/


}
