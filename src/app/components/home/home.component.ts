import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api';
import rooms from '../../data/room.json';
import { formatDate } from '@angular/common';

declare const parseDataGlobal: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
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
  suits = rooms;
  tabToJS : string[] = []

  testimonials = [

    {

      name:"Mohamed Amous",
      profession:"Founder, qux co.",
      image:"assets/img/testimonial/01.png",
      rating:5,
      description:"Nous avons passé le week-end dernier un séjour en famille dans cette merveilleuse maison d hotes. L'accueil et le service sont à la hauteur de ce site exceptionnel."

    },
    {

      name:"Sarra Mihoub",
      profession:"Founder, hilix",
      image:"assets/img/testimonial/02.png",
      rating:5,
      description:"Une belle surprise sur la région de Bizerte pour moi j'adore l'endroit reste à voir sur place 😍."

    },
    {

      name:"Ahlem Amara",
      profession:"Founder, Condo",
      image:"assets/img/testimonial/03.png",
      rating:5,
      description:"un endroit féérique et un service hors norme, top."

    },
    {

      name:"Khédija Siala Bouassida",
      profession:"Founder, hilix",
      image:"assets/img/testimonial/04.png",
      rating:5,
      description:"On a fait l'expérience et c'était Magnifique vraiment exceptionnel."

    }

  ]

  actsList:any = [

    {
      title:"RESTAURANT",
      //image:"https://www.hotel-montana.ch/bilder/hauptbilder/restaurant-bar/_1200xAUTO_crop_center-center_100_none/2210_Scala-4.jpg",
      image:"assets/img/photos_new_content/new/restau2.png",
      description:"Spa center inilla duiman at elit finibus viverra nec a lacus themo the drudea seneoice misuscipit non sagie the fermen. Viverra tristique jusio the ivite dianne onen nivami acsestion augue artine.",
      period:"daily",
      start_at:"07",
      end_at:"08",
      position_image:"left"
    },
    {
      title:"PISCINE",
      //image:"https://blog.cap-adrenaline.com/wp-content/uploads/2022/03/equipement-cours-equitation.jpg",
      image:"assets/img/photos_new_content/les_slides/2d396e4f-86c9-4161-8d10-b06dded9ce67.jpg",
      description:"",
      period:"daily",
      start_at:"07",
      end_at:"08",
      position_image:"right"

    },
    {
      title:"EQUITATION",
      //image:"https://blog.cap-adrenaline.com/wp-content/uploads/2022/03/equipement-cours-equitation.jpg",
      image:"assets/img/photos_new_content/equitation/169819305_740302160017677_5655585245396388206_n.jpg",
      description:"Nous proposons  des balades  en montagne dans la région de Mateur.  Ce sont des chevaux adorables pour tous niveaux et tous âges ! Venez en famille, entre amis, ou même en amoureux…",
      period:"daily",
      start_at:"07",
      end_at:"08",
      position_image:"left"

    },
    {
      title:"TENNIS",
      //image:"https://blog.cap-adrenaline.com/wp-content/uploads/2022/03/equipement-cours-equitation.jpg",
      image:"assets/img/photos_new_content/tennis/IMG_6716.jpg",
      description:"",
      period:"daily",
      start_at:"07",
      end_at:"08",
      position_image:"right"

    },
    {
      title:"RANDONNÉE",
      //image:"https://blog.cap-adrenaline.com/wp-content/uploads/2022/03/equipement-cours-equitation.jpg",
      image:"assets/img/photos_new_content/les_slides/178483159_751807848867108_6722969823734392856_n.jpg",
      description:"Nos randonnées accompagnées sont placées sous le signe de la convivialité et de l’exploration. Que vous ayez envie de bien-être, de découverte ou d’aventure,Partez en petit groupe découvrir les richesses d’une région ou d’un massif. Nos guides locaux, experts de leurs territoires et amoureux de la nature partageront avec vous leurs mille et une connaissances.",
      period:"daily",
      start_at:"07",
      end_at:"08",
      position_image:"left"

    }

  ]



  v:any

  getValue(){

    this.v = document.getElementById("dateIn")

    alert(this.v.value)

  }


  getComponentWithParam(routeParam:any){

    const paramId = routeParam.split("/")

    return paramId

  }



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
    var Ar=this.dateArrive.value.toString()
  var fin=this.dateFin.value.toString()


  var d1=Ar.split('-').reverse().join('/')

  var d2=fin.split('-').reverse().join('/')

      console.log(new Date(d1),'valueee')




      this.DateArr=new Date(new Date(d1).setDate(new Date(d1).getDate() + 1));
        this.suites.forEach(async (ele)=>{
          console.log(ele,'ele de suite')

          var tab:any[]=[]
          tab=Array.prototype.concat.apply([], ele.history).map(ele=>new Date (ele.slice(0,10)).getTime()).sort((a , b) => a-b);
          var revSuites={
            suite:ele.suit,
            tabDate:tab
          }
           var test =revSuites.tabDate.some(ele=>ele  > this.DateArr.getTime())
          if(test ==true){
            var rev=revSuites.tabDate.find(ele=>ele  > this.DateArr.getTime())
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
        var roomsList:any = []
        var roomsFiltered = this.tabSuitesDisponn.map((room:any)=>room.suite)

        roomsFiltered.map((r:any)=>{

          roomsList.push(rooms.find((room:any)=> room.title === r.title))

        })
        
        this.apiService.roomsListFilter = roomsList

        this.apiService.isReservOpened = true

        this.apiService.formReservation={
          dateStrat:d1,
          dateFin:d2,
          childrens:this.apiService.enfant.value,
          adults:this.apiService.adultes.value
         }
    console.log(this.apiService.formReservation,"jjjj")

    

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
    this.dateArrive=document.getElementById("checkin")
    this.dateFin=document.getElementById("checkout")
    this.apiService.adultes=document.getElementById("ad")
    this.apiService.enfant=document.getElementById("en")
    this.apiService.getSingleSuiteToute().subscribe((res:any)=>{
      var newArray = Array.prototype.concat.apply([], res);
      newArray=newArray.map(ele=>ele.slice(0,10))
      this.tabDate=newArray
    this.apiService.getAllSuites().subscribe((res: any)=>{
      var obj:any
      obj=res
      this.suites=obj
      var k= 0
      this.apiService.getAllResvation().subscribe((res:any)=>{
        var newArray = Array.prototype.concat.apply([], res);
        newArray=newArray.map(ele=>ele.slice(0,10))
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
       this.tabToJS = tab;
       t=tab
       var t =tab.map(ele=>ele=new Date(ele))
       localStorage.setItem('TocloseGlobal',JSON.stringify({disabledDatesGlobal:tab ,minDt: null,maxDt: null}))
      })
  })
    })
    parseDataGlobal()
  }
}
