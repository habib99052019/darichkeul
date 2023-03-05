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
      title:"RESTAURANT",
      image:"assets/img/photos_new_content/new/restau2.png",
      //image:"assets/img/photos_new_content/les_salons/IMG_6891.jpg",
      description:"Le poulailler, la campagne, les cages… Chaque espace représente une ambiance champêtre et définit les caractéristiques propres de la vie agricole. Un défi des plus intéressants qui se relève merveilleusement grâce au jeu intense de couleurs, matériaux et textures.",
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

  constructor() { }

  ngOnInit(): void {
  }

}
