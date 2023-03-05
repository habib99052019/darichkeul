import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api';
import rooms from '../../data/room.json';

@Component({
  selector: 'app-room-grid',
  templateUrl: './room-grid.component.html',
  styleUrls: ['./room-grid.component.css']
})
export class RoomGridComponent implements OnInit {

  suits = rooms;
  
  constructor(private apiService: ApiService) { }



  ngOnInit() {
    /*this.apiService.getAllSuites()
    .pipe()
    .subscribe((data: any) => {
      this.suits = data;
    });*/
  }

}
