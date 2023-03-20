import { Component, OnInit } from '@angular/core';
import { formatDate } from '@angular/common';
import { ApiService } from '../../services/api';
import { FormBuilder, FormControl, Validators, FormGroup, FormGroupDirective, NgForm, FormArray } from '@angular/forms';
import rooms from '../../data/room.json';
import { ActivatedRoute } from '@angular/router';

declare const parseData: any;

@Component({
  selector: 'app-form-room-details',
  templateUrl: './form-room-details.component.html',
  styleUrls: ['./form-room-details.component.css']
})
export class FormRoomDetailsComponent implements OnInit {


  tabInput:any[]=[]
  step = 1
  presonnesMax:any
  dateArriver:any
  dateFin:any
  formResrevation:any
    tabDate:any = []
    tabDates:any = []
    titleRoom:any
    roomList = rooms
    public a=""
    adults:any
    childrens:any
    public testLengthPhone=true
    public user= new FormGroup({

      nom :new FormControl('',[Validators.required ]),
      prenom : new FormControl('',[Validators.required ]),
      email :new FormControl('',[Validators.required, Validators.email ]),
      phone : new FormControl('',[Validators.required,Validators.minLength(7),Validators.maxLength(8) ]),
    })
  validPhone(e:any){
    console.log(e.target.value)
     var e= e.target.value
    if(e.length !=8){

      console.log(e.target.value)
      console.log(this.testLengthPhone)
      this.testLengthPhone=true
    }
  }
    // public selctAdults(e:any){
    //   this.adults=e.target.value

    // }

    // public selctEnfants(e:any){
    //   this.childrens=e.target.value
    // }

    getRoomDetails(items:any){
        this.route.params.subscribe(params => {
          const roomId = params['id'];
          items.map((item:any)=>{
            if(item.id === parseInt(roomId)){
              this.titleRoom=item.title
              this.presonnesMax=item.presonneMax
              console.log(item.title)
            }
          }) // should log "1" in this case
        });
      var id  = parseInt(this.apiService.idRoom)


    }

    constructor(private apiService: ApiService,public route: ActivatedRoute) { }

  nextStep(){
    this.dateArriver=document.getElementById('start-date')
    this.dateFin=document.getElementById('end-date')
    
        this.adults=document.getElementById("ad")
        this.childrens=document.getElementById("en")
      var test= Number(this.adults.value)+ Number(this.childrens.value)
      
      console.log( test )
      if(test>this.presonnesMax){
        alert("les nombres des personnes sont supérieur a la capacité de suites veuiller choisir d'autres suites ")
      }
      else{
        this.checkIn = document.getElementById("start-date")
        this.checkOut = document.getElementById("end-date")
        this.adult = document.getElementById("ad")
        this.children = document.getElementById("en")

        if(this.checkIn.value === "" || this.checkOut.value === "" ){
          alert("Tous les champs sont obligatoires")
        }else{
          this.step++
          this.apiService.formReservation={
            dateStrat:this.dateArriver.value,
            dateFin:this.dateFin.value,
            childrens:this.childrens.value,
            adults:this.adults.value,
           }
        }
        
      }
      }
    
  previousStep(){
    this.step--
  }

  checkIn:any
  checkOut:any
  adult:any
  children:any

  confirmer(){
    if(!this.user.valid){
      alert("tout les champ obligatoires")
    }
    if(this.user.valid){

      var text1=this.user.value.nom + " "  +this.user.value.prenom + " "+this.user.value.email+" " +this.user.value.phone
      var text=text1 + " "+this.titleRoom+" " +  JSON.stringify(this.apiService.formReservation);
      var email=this.user.value.email
      console.log(text)
      console.log(email)
      this.apiService.sendEmail({
        email:email,
        text:text
      })
      this.apiService.isReservConfirmed = true

      setTimeout(()=>{
        this.apiService.isReservConfirmed = false
      },3300)
    }

  }


  ngOnInit(): void {
    this.dateArriver=document.getElementById('start-date')
    this.dateFin=document.getElementById('end-date')
  
        this.getRoomDetails(this.roomList)
        this.apiService.getSingleSuite(this.titleRoom).subscribe((resp:any)=>{
          console.log(this.titleRoom)
          var newArray = Array.prototype.concat.apply([], resp);

          for(let i = 0; i< newArray.length; i++){
              this.tabDates.push(new Date(newArray[i].slice(0,10)))
              this.tabDate.push(newArray[i].slice(0,10))
          }
          var tab=  this.tabDate.sort((a:any, b:any) =>new Date(a).getTime() - new Date(b).getTime());
          tab = tab.filter((ele:any)=>new Date(ele).getTime()> new Date().getTime())
          this.tabInput=tab
          console.log('this.tabInput', this.tabInput)
          localStorage.setItem('Toclose',JSON.stringify({disabledDates:this.tabInput ,minDt: null,maxDt: null}))
          parseData()
        })
      }
}
