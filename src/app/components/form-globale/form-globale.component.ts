import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api';
import rooms from '../../data/room.json';
import { formatDate } from '@angular/common';
@Component({
  selector: 'app-form-globale',
  templateUrl: './form-globale.component.html',
  styleUrls: ['./form-globale.component.css']
})
export class FormGlobaleComponent implements OnInit {
  tabDate:any[]=[]
  suites:any[]=[]
  public testLengthPhone=false
  public  tabMax:any[]=[]    
  public maxResvation:Date = new Date();
  public todayDate:Date = new Date();
  public testLengthPr=false
  public DateArr: any
  public tabSuitesDisponn:any[]=[]
  arriver:any
  depart:any
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
  async  getDateDebutValue(date:any,dateInput:any){
    var i=0
    var j=0
  
   
    this.tabMax=[]
    this.tabSuitesDisponn=[]
    var d = new Date(date.target.value+"")
    
    var dt_Date = (d.getDate() < 10) ? '0' + d.getDate() : d.getDate();
    var dt_Month = ((d.getMonth()+1) < 10) ? '0' + (d.getMonth()+1) : (d.getMonth()+1);
    var dt_Year = (d.getFullYear() < 10) ? '0' + d.getFullYear() : d.getFullYear();

    var date_final = [dt_Date, dt_Month, dt_Year].join('/')
    

    dateInput.value = date_final+""
    this.arriver=date_final+""
      console.log("date")
      console.log(date.target.value,'valueee')
      

    
       
      this.DateArr=new Date(date.target.value.setDate(date.target.value.getDate() + 1));
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
     
   
      
   
    

     
  }

  getDateFinValue(e:any,dateInput:any){
    
    
    var d = new Date(e.target.value+"")
    
    var dt_Date = (d.getDate() < 10) ? '0' + d.getDate() : d.getDate();
    var dt_Month = ((d.getMonth()+1) < 10) ? '0' + (d.getMonth()+1) : (d.getMonth()+1);
    var dt_Year = (d.getFullYear() < 10) ? '0' + d.getFullYear() : d.getFullYear();

    var date_final = [dt_Date, dt_Month, dt_Year].join('/')
       
    dateInput.value = date_final+""
    this.depart=date_final+""
    this.tabSuitesDisponn=this.tabMax.filter(ele=>ele.reservationMax.getTime() >= e.target.value.getTime())
     console.log(this.tabSuitesDisponn)
  }
  constructor(private apiService: ApiService) { }

  ngOnInit() {

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
            console.log(k,'ooo') 
            this.tabDate.push(newArray[i]) 
          }           
      }  
      console.log(this.tabDate,'2')  
    })

 
  })

  }

}
