import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api';
import rooms from "../../data/room.json"

declare var $:any;

@Component({
  selector: 'app-slider-form-reserv',
  templateUrl: './slider-form-reserv.component.html',
  styleUrls: ['./slider-form-reserv.component.css']
})
export class SliderFormReservComponent implements OnInit {

  step = 1

  constructor(private serv:ApiService) { }


  getPointer(){
    var rt = ""
    if(this.serv.isReservOpened){

      rt = "all"

    }else{
      rt = "none"
    }
    return rt
  }

  getOpacity(){

    var rt = ""

    if(this.serv.isReservOpened){

      rt = "1"

    }else{
      rt = "0"
    }

    return rt

  }

  nextStep(){
    if(this.listRoomsSelected.length > 0){
      this.step++
    }
  }
  previousStep(){
    this.step--
  }

  nextStepForm(s1:any,s2:any){

    s1.style.display = "none"
    s2.style.display = "flex"
    this.step++

  }

  previousStepForm(s1:any,s2:any){

    s2.style.display = "none"
    s1.style.display = "flex"
    this.step--
  }
  

  phoneScreen:any
  isMobile = false



  closeForm(form:any){
    this.serv.isReservOpened = false
  }

  roomsList:any[] = rooms

  listRoomsSelected:any = []

  roomSelected:any

  checkRoom(room:any){

    console.log(this.listRoomsSelected)

    if(!(this.listRoomsSelected.includes(room))){
      this.listRoomsSelected.push(room)
      this.roomSelected = document.getElementById("room-slide-"+room.id)
      this.roomSelected.style.backgroundColor="#e7c283"
      this.roomSelected.style.color="white"
    }else{
      for(var i = 0 ; i < this.listRoomsSelected.length ; i++){

          if(this.listRoomsSelected[i].id === room.id){
            this.listRoomsSelected.splice(i)
          }  

      }
      this.roomSelected = document.getElementById("room-slide-"+room.id)
      this.roomSelected.style.backgroundColor="transparent"
      this.roomSelected.style.color="transparent"
    }

  }

  stepForm:any


  closePcForm(e:any){

    if (e.target.className === 'form-reservation') {

      this.serv.isReservOpened = false

    }
  }


  ngOnInit(): void {

    $(document).ready(()=>{

      this.stepForm = document.getElementById("stepMobile2")

      this.stepForm.setAttribute("style","display: none;")


    })



    this.phoneScreen = window.matchMedia('(max-width: 700px)')

    if(this.phoneScreen.matches){

      this.isMobile = true

    }

    console.log(this.isMobile)

    setTimeout(()=>{
      this.serv.isReservOpened = true
    },5000)

  }

}
