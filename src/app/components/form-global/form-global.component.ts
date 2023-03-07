import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api';
import { formatDate } from '@angular/common';

declare function datePickerManager({id,disabledDates,minDt,maxDt}:any):any

declare var t:any;

declare var $:any
@Component({
  selector: 'app-form-global',
  templateUrl: './form-global.component.html',
  styleUrls: ['./form-global.component.css']
})
export class FormGlobalComponent implements OnInit {

datesCompleted:boolean = false
  tabDate:any[]=[]
  suites:any[]=[]
  public testLengthPhone=false
  public  tabMax:any[]=[]    
  public maxResvation:Date = new Date();
  public todayDate:Date = new Date();
  public testLengthPr=false
  public DateArr: any
  public tabSuitesDisponn:any[]=[]

  public formResarevation:any
  arriver:any
  depart:any
 dateArrive:any
 dateFin:any
 adults=""
  childrens=""
  public selctAdults(e:any){
    this.adults=e.target.value

  }
  
  public selctEnfants(e:any){
    this.childrens=e.target.value
  }
  //date d'arrrivé // [min]="todayDate" class="date-picker-no-show" (dateChange)="this.getDateDebutValue($event,dateDebutMobile)"  [matDatepickerFilter]="DateNoDispoFilter2"
  // date de depare // [min]="DateArr" [max]="maxResvation" class="date-picker-no-show" (dateChange)="this.getDateFinValue($event,dateFinMobile)"
  DateNoDispoFilter2= (d: Date): boolean => {
    if(d !== null){
      const time=d.getTime();
      console.log(d,'hhhha')
     
      var tab:any[]=[]  
      tab=this.tabDate.map(ele=>new Date(formatDate(ele, 'MM/dd/yyyy', 'en')))
     
      return !tab.find(x=>x.getTime()==time);
      
    }
   
  else return true
   //!this.myHolidayDates.find(x=>x.getTime()==time);
  }
  async  check(){
    var i=0
    var j=0
  
   
    this.tabMax=[]
    this.tabSuitesDisponn=[]
    /*var d = new Date(new Date(d1)+"")
    
    var dt_Date = (d.getDate() < 10) ? '0' + d.getDate() : d.getDate();
    var dt_Month = ((d.getMonth()+1) < 10) ? '0' + (d.getMonth()+1) : (d.getMonth()+1);
    var dt_Year = (d.getFullYear() < 10) ? '0' + d.getFullYear() : d.getFullYear();

    var date_final = [dt_Date, dt_Month, dt_Year].join('/')
    

    dateInput.value = date_final+""
    this.arriver=date_final+""*/
    var Ar=this.dateArrive.value.toString()
  var fin=this.dateFin.value.toString()


  var d1=Ar.split('-').reverse().join('/')
  
  var d2=fin.split('-').reverse().join('/')
     
      console.log(new Date(d1),'valueee')
      

    
       
      this.DateArr=new Date(new Date(d1).setDate(new Date(d1).getDate() + 1));
      console.log( this.DateArr,"date d'arriver")
        this.suites.forEach(async (ele)=>{
          console.log(ele,'ele de suite')
        
          var tab:any[]=[]
          tab=Array.prototype.concat.apply([], ele.history).map(ele=>new Date (ele.slice(0,10)).getTime()).sort((a , b) => a-b);
          var revSuites={
            suite:ele.suit,
            tabDate:tab
          }
          console.log(revSuites , j+1, "revSuites")
           var test =revSuites.tabDate.some(ele=>ele  > this.DateArr.getTime())
          if(test ==true){
            var rev=revSuites.tabDate.find(ele=>ele  > this.DateArr.getTime())
            console.log(ele,'kaka')
            var obj={
              suite:ele.suit,
              reservationMax:new Date(rev)
            }
            console.log(obj,'kikou')
           
          
             
            
             console.log( i=i+1,"crono")
             console.log(rev,"ooooo")
           await  this.tabMax.push(obj)

             
                                   
            
          } 
          if( test ==false) 
          {
            console.log(i,"crono2")
            
             var obj1={
              suite:ele.suit,
              reservationMax:new Date('12/12/2027')
            }      
           await  this.tabMax.push(obj1)
          }
  
            
         

        
         
        })
        console.log(this.tabMax,"fin")
        console.log(this.tabMax,"fin2")
        console.log(this.maxResvation,"aaa") 
        console.log(this.tabMax.sort((a ,  b) => b.reservationMax.getTime()  - a.reservationMax.getTime()  ),'desd')
       this.maxResvation=this.tabMax.sort((a ,  b) => b.reservationMax.getTime()  - a.reservationMax.getTime()  )[0].reservationMax
         console.log(this.maxResvation,'bbb')
     
         this.tabSuitesDisponn=this.tabMax.filter(ele=>ele.reservationMax.getTime() >= new Date(d2).getTime())
         console.log(this.tabSuitesDisponn,"kk")
      
         
     this.apiService.formReservation={
      dateStrat:d1,
      dateFin:d2,
      childrens:this.childrens,
      adults:this.adults
     }

     
  }

  // getDateFinValue(e:any,dateInput:any){
    
    
  //   var d = new Date(e.target.value+"")
    
  //   var dt_Date = (d.getDate() < 10) ? '0' + d.getDate() : d.getDate();
  //   var dt_Month = ((d.getMonth()+1) < 10) ? '0' + (d.getMonth()+1) : (d.getMonth()+1);
  //   var dt_Year = (d.getFullYear() < 10) ? '0' + d.getFullYear() : d.getFullYear();

  //   var date_final = [dt_Date, dt_Month, dt_Year].join('/')
       
  //   dateInput.value = date_final+""
  //   this.depart=date_final+""
    
  //    console.log(this.tabSuitesDisponn)
  // }
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.dateArrive=document.getElementById("start-date")
    this.dateFin=document.getElementById("end-date")
    this.apiService.getSingleSuiteToute().subscribe((res:any)=>{
      var newArray = Array.prototype.concat.apply([], res);
      newArray=newArray.map(ele=>ele.slice(0,10))
      this.tabDate=newArray
    this.apiService.getAllSuites().subscribe(res=>{
      var obj:any
      obj=res
      this.suites=obj
      console.log(this.suites,"haboub")
      var k= 0
      this.apiService.getAllResvation().subscribe((res:any)=>{
        var newArray = Array.prototype.concat.apply([], res);
        newArray=newArray.map(ele=>ele.slice(0,10))
        console.log(newArray ,'aaaa')
        for(let i = 0; i< newArray.length; i++){
         
          console.log(newArray[i])
          if(newArray.filter(ele=>ele === newArray[i]).length  ==this.suites.length ){
            k=k+1
             
            this.tabDate.push(newArray[i]) 
          }           
      }  
      console.log(this.tabDate  ,'ooo')
     var tab=  this.tabDate.sort((a:any, b:any) =>new Date(a).getTime() - new Date(b).getTime());
     tab=tab.filter(ele=>new Date(ele).getTime()> new Date().getTime())
       console.log(tab,"&&")
       t=tab
       var t =tab.map(ele=>ele=new Date(ele))
      
      var inputs = [
        {
            id:"dateArrv",
            disabledDates: tab,// this.tabeDate => this.getSingleSuite()
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
    })

 
  })
    })
  }


}
