import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {

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

  menuRestau:any = [
    {

      id:"entree_froide",
      title:"ENTRÉE FROIDES",
      menu:[
        {
          name:"Salade tunisienne",
          price:"12",
          phraseDescription:""
        },
        {
          name:"Salade de capese",
          price:"18",
          phraseDescription:""
        },
        {
          name:"Salade méchouia",
          price:"13",
          phraseDescription:""
        },
        {
          name:"Salade niçoise",
          price:"14",
          phraseDescription:""
        },
        {
          name:"Salade César",
          price:"18",
          phraseDescription:""
        },
        {
          name:"Assiette Dar Ichkeul",
          price:"14",
          phraseDescription:""
        },
        {
          name:"Assiette de saumon fumé",
          price:"25",
          phraseDescription:""
        }
      ]

    },
    {

      id:"enter_chaude",
      title:"ENTRÉE CHAUDE",
      menu:[
        {
          name:"Soupe à l'agneau",
          price:"16",
          phraseDescription:""
        },
        {
          name:"Brik au thion",
          price:"6",
          phraseDescription:""
        },
        {
          name:"Brik à la viande",
          price:"7",
          phraseDescription:""
        }
      ]

    },
    {

      id:"nos_spec",
      title:"NOS SPÉCIALITÉS",
      menu:[
        {
          name:"Agneau à la gargoulette",
          price:"35",
          phraseDescription:""
        },
        {
          name:"Côtlette d'agneau grillée",
          price:"32",
          phraseDescription:""
        },
        {
          name:"Entrecôte grillé beurre",
          price:"40",
          phraseDescription:""
        },
        {
          name:"Filet de boeuf",
          price:"45",
          phraseDescription:""
        },
        {
          name:"Grillades mixtes",
          price:"39",
          phraseDescription:""
        },
        {
          name:"Cailles grillées",
          price:"28",
          phraseDescription:""
        },
        {
          name:"Escalope de poulet à la créme",
          price:"28",
          phraseDescription:""
        },
        {
          name:"Escalope de poulet panné",
          price:"25",
          phraseDescription:""
        },
        {
          name:"Ojja Merguez",
          price:"18",
          phraseDescription:""
        },
        {
          name:"Ojja chevrettes",
          price:"28",
          phraseDescription:""
        }
      ]

    },
    {

      id:"pates",
      title:"PÂTES",
      menu:[

        {
          name:"Nwasser au poulet fermier",
          price:"20",
          phraseDescription:""
        },
        {
          name:"Spaghettis Bolognaises",
          price:"19",
          phraseDescription:""
        }

      ]
    },
    {

      id:"boissons",
      title:"BOISSONS",
      menu:[

        {
          name:"Eau Minérale 1L",
          price:"3",
          phraseDescription:""
        },
        {
          name:"Eau gazeuse 1L",
          price:"3",
          phraseDescription:""
        },
        {
          name:"Soda",
          price:"4",
          phraseDescription:""
        },
        {
          name:"Jus d'Orange",
          price:"6",
          phraseDescription:""
        },
        {
          name:"Jus de fraise",
          price:"6",
          phraseDescription:""
        },
        {
          name:"Citronade",
          price:"4",
          phraseDescription:""
        },
        {
          name:"Boissons énergétiques",
          price:"8",
          phraseDescription:""
        },
        {
          name:"Nepresso",
          price:"4.5",
          phraseDescription:""
        }

      ]
    },
    {

      id:"desserts",
      title:"DESSERTS",
      menu:[

        {
          name:"Sorbet",
          price:"4",
          phraseDescription:""
        },
        {
          name:"Assiette de fruits (1pax)",
          price:"8",
          phraseDescription:""
        }

      ]
    }
  ]

  menu_1 = this.menuRestau[0].menu
  menu_2 = this.menuRestau[1].menu
  menu_3 = this.menuRestau[2].menu
  menu_4 = this.menuRestau[3].menu
  menu_5 = this.menuRestau[4].menu
  menu_6 = this.menuRestau[5].menu

  constructor() { }

  ngOnInit(): void {
  }

}
