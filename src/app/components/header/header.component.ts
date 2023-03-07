import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private apiService: ApiService) { }


  getComponent(route:any){

    this.apiService.route = route
    console.log(this.apiService.route)

  }

  ngOnInit(): void {
  }

}
