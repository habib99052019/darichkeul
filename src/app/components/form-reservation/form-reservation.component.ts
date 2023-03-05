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
  selector: 'app-form-reservation',
  templateUrl: './form-reservation.component.html',
  styleUrls: ['./form-reservation.component.css']
})
export class FormReservationComponent implements OnInit {
  public testLengthPhone=false
  public tabPresonnes:any[]=[]
  public maxResvation:Date = new Date();
  public todayDate:Date = new Date();
 public DateArr:Date = new Date();
 public DateArr2:Date = new Date();
 public tabDate:any[]=[]
 public tarif:any

  // date ariv /// [min]="todayDate" class="date-picker-no-show" (dateChange)="this.getDateDebutValue($event,dateDebutMobile)" [matDatepickerFilter]="DateNoDispoFilter" 
  //date fin// [min]="DateArr2" [max]="maxResvation" class="date-picker-no-show" (dateChange)="this.getDateFinValue($event,dateFinMobile)" [matDatepickerFilter]="DateNoDispoFilter" 
 
  getDateDebutValue(e:any,dateInput:any){

    var date = Date.parse(e.target.value+"")
    
    var d = new Date(e.target.value+"")
    
    var dt_Date = (d.getDate() < 10) ? '0' + d.getDate() : d.getDate();
    var dt_Month = ((d.getMonth()+1) < 10) ? '0' + (d.getMonth()+1) : (d.getMonth()+1);
    var dt_Year = (d.getFullYear() < 10) ? '0' + d.getFullYear() : d.getFullYear();

    var date_final = [dt_Date, dt_Month, dt_Year].join('/')

    dateInput.value = date_final+""
    
    this.DateArr=e.target.value
    
    this.DateArr2 = new Date(e.target.value.setDate(e.target.value.getDate() + 1));
          
    console.log(this.DateArr2 ,"rrrr")
    this.tabDate.sort((a, b) => a.getTime() - b.getTime());
    if(this.tabDate.some(ele=>ele>this.DateArr.getTime())==true){
      
      this.maxResvation=this.tabDate.find(ele=>ele>this.DateArr.getTime())
      console.log(this.maxResvation,'max')
    }  
    if(this.tabDate.some(ele=>ele>this.DateArr.getTime())==false ){
      this.maxResvation=new Date("12/12/2028");
      console.log(this.maxResvation,"max2")
    }
  }

  getDateFinValue(e:any,dateInput:any){

    var date = Date.parse(e.target.value+"")
    
    var d = new Date(e.target.value+"")
    
    var dt_Date = (d.getDate() < 10) ? '0' + d.getDate() : d.getDate();
    var dt_Month = ((d.getMonth()+1) < 10) ? '0' + (d.getMonth()+1) : (d.getMonth()+1);
    var dt_Year = (d.getFullYear() < 10) ? '0' + d.getFullYear() : d.getFullYear();

    var date_final = [dt_Date, dt_Month, dt_Year].join('/')

    dateInput.value = date_final+""

  }
  titleRoom:any
  roomList = rooms
  public a:any


  datesCompleted:boolean = false

  constructor(private apiService: ApiService,public route: ActivatedRoute) { }

 

  getRoomDetails(items:any){

    var id  = parseInt(this.route.snapshot.params['id'])
     
    items.map((item:any)=>{

      if(item.id === id){
        //this.room_selected.push(item)
        this.titleRoom=item.title
        //this.tabPresonnes=item.prixChambres

      }

    })

  }


  setFormatDate(date:any){

    var d = new Date(date+"")
    
    var dt_Date = (d.getDate() < 10) ? '0' + d.getDate() : d.getDate();
    var dt_Month = ((d.getMonth()+1) < 10) ? '0' + (d.getMonth()+1) : (d.getMonth()+1);
    var dt_Year = (d.getFullYear() < 10) ? '0' + d.getFullYear() : d.getFullYear();

    return [dt_Date, dt_Month, dt_Year].join('-')

  }

  dateArrInput:any

  getValue(e:any){
    console.log(e.target.value)
  }

  toDay = new Date()
  nextDate = new Date("3-25-2023")

  ngOnInit(): void {

    this.getRoomDetails(this.roomList)

    this.apiService.getSingleSuite(this.titleRoom).subscribe((resp:any)=>{

      var newArray = Array.prototype.concat.apply([], resp);
     
      for(let i = 0; i< newArray.length; i++){
          this.tabDate.push( this.setFormatDate(new Date(newArray[i].slice(0,10))))
      }

      this.tabDate = this.tabDate.map((ele:any)=>new Date(this.setFormatDate(ele)))
    })

    var inputs = [
      {
          id:"dateArrv",
          disabledDates:this.tabDate,// this.tabeDate => this.getSingleSuite()
          minDt:new Date(),// 
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

  }

}
