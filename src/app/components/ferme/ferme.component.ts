import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ferme',
  templateUrl: './ferme.component.html',
  styleUrls: ['./ferme.component.css']
})
export class FermeComponent implements OnInit {

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
      title:"Agneau Bio",
      image:"assets/img/photos_new_content/ferme/IMG_6646.jpg",
      //image:"assets/img/photos_new_content/les_salons/IMG_6891.jpg",
      description:"Nos viandes sont entièrement naturelles provenant d’animaux élevés sans hormone, sans antibiotique et sans substitut animal.Dans notre ferme Nous sommes fiers de travailler sans relâche afin que nos animaux soient élevés dans un environnement respectant les standards du bien-être animal.",
      period:"daily",
      start_at:"07",
      end_at:"08",
      icon:"assets/img/photos_new_content/ferme/icon1.png",
      position_image:"left"
    },
    {
      title:"Frais et Propre",
      image:"assets/img/photos_new_content/ferme/IMG_6664.jpg",
      icon:"assets/img/photos_new_content/ferme/icon2.png",
      //image:"assets/img/photos_new_content/les_salons/IMG_6891.jpg",
      description:"En choisissant vos légumes et fruits de notre potager et de notre ferme agricole vous pouvez avoir confiance et comprendre ce que vous mangez, d'où vient le produit et la vie qu'il a vécue Nous pensons que les aliments biologiques sont meilleurs pour vous, meilleurs pour l'environnement, meilleurs pour les animaux et produisent une différence que vous pouvez goûter et apprécier.",
      period:"daily",
      start_at:"07",
      end_at:"08",
      position_image:"right"
    },
    {
      title:"Poulet et oeufs Bio",
      image:"assets/img/photos_new_content/ferme/IMG_6640.jpg",
      //image:"assets/img/photos_new_content/les_salons/IMG_6891.jpg",
      description:"Nos poules biologiques errent librement autour de notre verger et des poiriers biologiques. Elles ne mangeant que des aliments biologiques naturels et toutes les délicieuses larves qu'elles peuvent déterrer !",
      period:"daily",
      start_at:"07",
      end_at:"08",
      icon:"assets/img/photos_new_content/ferme/icon3.png",
      position_image:"left"
    }

  ]
  
  constructor() { }

  ngOnInit(): void {
  }

}
