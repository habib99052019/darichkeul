import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css']
})
export class ActivitiesComponent implements OnInit {

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
      image:"assets/img/photos_new_content/les_slides/2d396e4f-86c9-4161-8d10-b06dded9ce67.jpg",
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
      image:"assets/img/photos_new_content/les_slides/178483159_751807848867108_6722969823734392856_n.jpg",
      description:"Nos randonnées accompagnées sont placées sous le signe de la convivialité et de l’exploration. Que vous ayez envie de bien-être, de découverte ou d’aventure, partez en petit groupe découvrir les richesses de la  région de Mateur .  Nos guides  partageront avec vous leurs mille et une connaissances de la resplendissante nature campagnarde.",
      period:"daily",
      start_at:"07",
      end_at:"08",
      position_image:"left"

    }

  ]

  constructor() { }

  ngOnInit(): void {
  }

}
