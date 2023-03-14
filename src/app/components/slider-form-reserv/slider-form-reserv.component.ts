import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api';
import rooms from "../../data/room.json"
import { FormControl, FormGroup , Validators } from '@angular/forms'


declare var $:any;

@Component({
  selector: 'app-slider-form-reserv',
  templateUrl: './slider-form-reserv.component.html',
  styleUrls: ['./slider-form-reserv.component.css']
})
export class SliderFormReservComponent implements OnInit {

  formReserv = new FormGroup({
    nom: new FormControl('',[Validators.required]),
    prenom: new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.required,Validators.email]),
    mobile: new FormControl('',[Validators.required,Validators.min(8)]),
  });

  formReservMobile = new FormGroup({
    Nom: new FormControl('',[Validators.required]),
    Prenom: new FormControl('',[Validators.required]),
    Email: new FormControl('',[Validators.required,Validators.email]),
    Mobile: new FormControl('',[Validators.required,Validators.min(8)]),
  });

  checkPhone = true

  validPhone(e:any){

    if((e.target.value).length < 8){

      this.checkPhone = false

    }else{

      this.checkPhone = true

    }

  }


  step = 1

  constructor(public serv:ApiService) { }


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

  nextStep(s1:any,s2:any){
    if(this.listRoomsSelected.length > 0){
      this.step++
      s1.style.display = "none"
      s2.style.display = "flex"
    }
  }
  previousStep(s1:any,s2:any){
    this.step--
    s2.style.display = "none"
    s1.style.display = "block"
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

  roomsList:any = rooms

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

    if (e.target.className === 'form-reservation' || e.target.className === "close-btn") {

      this.serv.isReservOpened = false

    }
  }

  confirmReservation(){
    var text1=this.formReserv.value.nom + " "  +this.formReserv.value.prenom + " "+this.formReserv.value.email+" " +this.formReserv.value.mobile
    var text2=this.formReservMobile.value.Nom + " "  +this.formReservMobile.value.Prenom + " "+this.formReservMobile.value.Email+" " +this.formReservMobile.value.Mobile
    var text3=this.serv.formReservation.toString()
    var text=text1 +" " +text2 + " " +  JSON.stringify(this.serv.formReservation);
    var email=this.formReserv.value.email+""+this.formReservMobile.value.Email+""
    console.log(text)
    console.log(email)
    this.serv.sendEmail({
      email:email,
      text:text
    })
    this.serv.isReservConfirmed = true

    setTimeout(()=>{
      this.serv.isReservConfirmed = false
    },3300)
  }


  ngOnInit(): void {

    $(document).ready(()=>{

      this.stepForm = document.getElementById("stepTwo")

      // this.stepForm.setAttribute("style","display: none;")

      this.stepForm = document.getElementById("stepTwoMobile")

      // this.stepForm.setAttribute("style","display: none;")


    })



    this.phoneScreen = window.matchMedia('(max-width: 700px)')

    if(this.phoneScreen.matches){

      this.isMobile = true

    }

  }

}
