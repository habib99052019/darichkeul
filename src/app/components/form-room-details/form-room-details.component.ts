import { Component, OnInit } from '@angular/core';
import { formatDate } from '@angular/common';
import { ApiService } from '../../services/api';
import rooms from '../../data/room.json';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormControl, Validators, FormGroup, FormGroupDirective, NgForm, FormArray } from '@angular/forms';


declare function datePickerManager({id,disabledDates,minDt,maxDt}:any):any

declare var t:any;

declare var $:any

@Component({
  selector: 'app-form-room-details',
  templateUrl: './form-room-details.component.html',
  styleUrls: ['./form-room-details.component.css']
})
export class FormRoomDetailsComponent implements OnInit {
 
  
  tabInput:any[]=[]
  step = 1
  dateArriver:any
  dateFin:any
  formResrevation:any
    tabDate:any = []
    tabDates:any = []
    titleRoom:any
    roomList = rooms
    public a=""
    adults=""
    childrens=""
    public testLengthPhone=false
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
    public selctAdults(e:any){
      this.adults=e.target.value
  
    }
    
    public selctEnfants(e:any){
      this.childrens=e.target.value
    }

    getRoomDetails(items:any){

      var id  = parseInt(this.apiService.idRoom)
       
      items.map((item:any)=>{
  
        if(item.id === id){
          //this.room_selected.push(item)
          this.titleRoom=item.title
          //this.tabPresonnes=item.prixChambres
  
        }
  
      })
  
    }
  
    constructor(private apiService: ApiService,public route: ActivatedRoute) { }

  nextStep(){
    this.step++
    this.apiService.formReservation={
      dateStrat:this.dateArriver.value,
      dateFin:this.dateFin.value,
      childrens:this.childrens,
      adults:this.adults
     }
  }
  previousStep(){
    this.step--
  }

  confirmer(){
    alert("successfully!")
  }

  getFn(){
    alert("hello")
  }

  ngOnInit(): void {
    this.dateArriver=document.getElementById('start-date')
    this.dateFin=document.getElementById('end-date')
        this.getRoomDetails(this.roomList)
        this.apiService.getSingleSuite(this.titleRoom).subscribe((resp:any)=>{
          console.log(this.titleRoom)
          var newArray = Array.prototype.concat.apply([], resp);
         
          for(let i = 0; i< newArray.length; i++){
            console.log(newArray[i])
              this.tabDates.push(new Date(newArray[i].slice(0,10)))
              this.tabDate.push(newArray[i].slice(0,10))
          }
    
          var tab=  this.tabDate.sort((a:any, b:any) =>new Date(a).getTime() - new Date(b).getTime());
     tab = tab.filter((ele:any)=>new Date(ele).getTime()> new Date().getTime())
          console.log(tab)
         
          var inputs = [
            {
                id:"dateArrv",
                disabledDates:this.tabDate ,// this.tabeDate => this.getSingleSuite()
                minDt: tab,// 
                maxDt:null
            }
          ]
      
          inputs.forEach((input:any)=>{
            datePickerManager(input)
          })
      
          $(document).ready(()=>{
      
            console.log($("#dateDeb"))
            $("#dateDeb").attr("min","2023-03-08")
            $("#dateDeb").attr("max","2023-03-16")
            
          })
      
        })
      
    
     
      }

}
