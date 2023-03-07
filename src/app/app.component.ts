import { Component } from '@angular/core';

import {ApiService} from "./services/api"

import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  constructor(private serviceHelper:ApiService,private router: Router){}

  route = this.serviceHelper.route

  getComponent(route:any){

    this.router.navigate([route])

  }


  getRoute(r:any){

    this.router.navigate([r])

  }


}
