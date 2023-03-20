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
      title:"PISCINE",
      //image:"https://blog.cap-adrenaline.com/wp-content/uploads/2022/03/equipement-cours-equitation.jpg",
      image:"assets/img/photos_new_content/piscine/08cb2d96-006c-4661-bec5-add6dc13cbd5.jfif",
      description:"En famille, en couple ou seul, venez profiter de la piscine extérieure. Vous pouvez vous prélasser sous le soleil, accompagné d’un livre et d’une boisson rafraîchissante. Durant la saison estivale ou les journées ensoleillées, accordez-vous un moment de pur farniente au bord de notre piscine.",
      period:"daily",
      start_at:"07",
      end_at:"08",
      position_image:"right"

    },
    {
      title:"EQUITATION",
      //image:"https://blog.cap-adrenaline.com/wp-content/uploads/2022/03/equipement-cours-equitation.jpg",
      image:"assets/img/photos_new_content/equitation/169819305_740302160017677_5655585245396388206_n.jpg",
      description:"Nous proposons  des balades dans notre ferme et aussi dans les collines avoisinantes.Nos adorables chevaux feront plaisir à toute notre clientèle.Venez en famille, entre amis, ou en amoureux… Les balades sont ouvertes à tous ; enfants, adolescents, adultes, débutants, cavaliers chevronnés pour débutants.",
      period:"daily",
      start_at:"07",
      end_at:"08",
      position_image:"left"

    },
    {
      title:"TENNIS",
      //image:"https://blog.cap-adrenaline.com/wp-content/uploads/2022/03/equipement-cours-equitation.jpg",
      image:"assets/img/photos_new_content/tennis/IMG_6716.jpg",
      description:" Pour une activité plus intense, notre court de tennis vous attend. Vous pouvez profiter du soleil tout en dépensant agréablement votre énergie.",
      period:"daily",
      start_at:"07",
      end_at:"08",
      position_image:"right"

    },
    {
      title:"RANDONNÉE",
      //image:"https://blog.cap-adrenaline.com/wp-content/uploads/2022/03/equipement-cours-equitation.jpg",
      image:"assets/img/photos_new_content/new/rondonné3.jpg",
      description:"Nos randonnées accompagnées sont placées sous le signe de la convivialité et de l’exploration. Que vous ayez envie de bien-être, de découverte ou d’aventure, partez en petit groupe découvrir les richesses de la  région de Mateur .  Nos guides  partageront avec vous leurs mille et une connaissances de la resplendissante nature campagnarde.",
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
    var ku=0
  var tabNouveaux:any=[]
    this.tabMax=[]
    this.tabSuitesDisponn=[]
    var Ar=this.dateArrive.value.toString()
  var fin=this.dateFin.value.toString()


  var t1=Ar.split('/')
  var t2=fin.split('/')
 var  d1=t1[1]+"/"+t1[0]+"/"+t1[2]
 var  d2=t2[1]+"/"+t2[0]+"/"+t2[2]



   
    console.log(this.suites)
      this.DateArr=new Date(new Date(d1).setDate(new Date(d1).getDate() + 1));
      

        this.suites.forEach(async (ele)=>{

          console.log(i+1,'ele de suite')

          var tab:any[]=[]
          tab=Array.prototype.concat.apply([], ele.history).map(ele=>ele.slice(0,10));
           var tab2=tab.map(ele=>new Date(ele).getTime()).sort((a , b) => a-b)
            console.log(tab,'rryuoppop')
          var  revSuites={
            suite:ele.suit,
            tab:tab,
           
           // tabDate:tab2
            
          }
           var dateDep=Ar.split("/").reverse().join("-")
          //  var test =revSuites.tabDate.some(ele=>ele  > this.DateArr.getTime())
           console.log(dateDep,"erty")
           console.log(revSuites.tab,'nn')
        
          if( revSuites.tab.filter(ele=>ele ==dateDep).length == 0){
         //   var rev=revSuites.tabDate.find(ele=>ele  > this.DateArr.getTime())
         
        var  revSuitesUpdate=   {
          suite:ele.suit,
          tabDate:revSuites.tab,
          tab2:revSuites.tab.map(ele=>new Date(ele).getTime()).sort((a , b) => a-b).filter(ele=> ele >new Date(dateDep).getTime()),
          tab3:revSuites.tab.sort((a,b)=>new Date(a).getTime()- new Date(b).getTime()).filter(ele=>(new Date(ele).getTime()>new Date(dateDep).getTime()))
      }
          tabNouveaux.push(revSuitesUpdate)


         




           }
         






        })
        for (let i = 0; i < tabNouveaux.length; i++) {
             console.log(new Date(tabNouveaux[i].tab3[0]),tabNouveaux[i].suite.title,new Date(tabNouveaux[i].tab3[0]).getTime(),"ppo")
             console.log(new Date(d2),new Date(d2).getDate(),"ppot")
         if(new Date(tabNouveaux[i].tab3[0]).getTime()> new Date(fin.split("/").reverse().join("-")).getTime()  )
           {
            this.tabSuitesDisponn.push(tabNouveaux[i])
           }
        }
       console.log(this.tabSuitesDisponn,'rrry')

      
      
      var roomsList:any = []
        var roomsFiltered = this.tabSuitesDisponn.map((room:any)=>room.suite)

        roomsFiltered.map((r:any)=>{

          roomsList.push(rooms.find((room:any)=> room.title === r.title))

        })
        
        this.apiService.roomsListFilter = roomsList

        this.checkIn = document.getElementById("checkin")
        this.checkOut = document.getElementById("checkout")
        this.adult = document.getElementById("ad")
        this.children = document.getElementById("en")

        if(this.checkIn.value === "" || this.checkOut.value === "" ){
          alert("Tous les champs sont obligatoires")
        }else{
          this.apiService.isReservOpened = true
        }

        this.apiService.formReservation={
          dateStrat:this.dateArrive.value.toString(),
          dateFin:this.dateFin.value.toString(), 
          childrens:this.apiService.enfant.value,
          adults:this.apiService.adultes.value
         }
    console.log(this.apiService.formReservation,"jjjj")

    

  }

  checkIn:any
  checkOut:any
  adult:any
  children:any

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
