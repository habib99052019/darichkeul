import { Component } from '@angular/core';

import {ApiService} from "./services/api"

import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  constructor(public serviceHelper:ApiService,private router: Router){}

  route = this.serviceHelper.route

  getRight(){

    if(this.serviceHelper.isReservConfirmed){
      return "3%"
    }else{
      return "0%"
    }

  }

  getOpacity(){

    if(this.serviceHelper.isReservConfirmed){
      return "1"
    }else{
      return "0"
    }

  }

  getPointer(){
    var rt = ""
    if(this.serviceHelper.isReservConfirmed){

      rt = "all"

    }else{
      rt = "none"
    }
    return rt
  }

  getComponent(route:any){

    this.router.navigate([route])

  }


  getRoute(r:any){

    this.router.navigate([r])

  }


}
