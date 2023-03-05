import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import rooms from '../../data/room.json';

declare var $:any


@Component({
  selector: 'app-room-details',
  templateUrl: './room-details.component.html',
  styleUrls: ['./room-details.component.css']
})
export class RoomDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }


  routeSub:any
  titleRoom:any
  roomList = rooms
  room_selected:any = []


  getRoomDetails(items:any){

    var id  = parseInt(this.route.snapshot.params['id'])
     
    items.map((item:any)=>{

      if(item.id === id){
        this.room_selected.push(item)
        this.titleRoom=item.title
        //this.tabPresonnes=item.prixChambres

      }

    })

  }

  owlCarouselBg:any

  createSlide(image:any){

    this.owlCarouselBg = document.getElementById("owlCarouselBg")


    var slide = document.createElement("div")

    slide.setAttribute("class","text-center item bg-img")

    slide.setAttribute("style","background-image: url('"+image+"');")
    slide.setAttribute("data-overlay-dark","3")

    this.owlCarouselBg.appendChild(slide)

  }

  toForm(form:any){
    form.scrollIntoView({ behavior: 'smooth' })
  }


  ngOnInit(): void {
    
    this.getRoomDetails(this.roomList)

    this.room_selected[0].sliderimage.map((s:any)=>{

      this.createSlide(s)

    })

    /*this.routeSub = this.route.queryParams.subscribe(params => {
      console.log(params);
      console.log(+params['id']);
    });*/
  }

}
