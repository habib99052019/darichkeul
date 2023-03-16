import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators, FormGroup, FormGroupDirective, NgForm, FormArray } from '@angular/forms';
import { ApiService } from 'src/app/services/api';
@Component({
  selector: 'app-table-d-hote',
  templateUrl: './table-d-hote.component.html',
  styleUrls: ['./table-d-hote.component.css']
})
export class TableDHoteComponent implements OnInit {
  date:any
  public user= new FormGroup({

    nom :new FormControl('',[Validators.required ]),
    prenom : new FormControl('',[Validators.required ]),
    email :new FormControl('',[Validators.required, Validators.email ]),
    phone : new FormControl('',[Validators.required,Validators.minLength(7),Validators.maxLength(8) ]),
  })
  constructor(public api:ApiService) { }
 envoyer(){
  console.log(this.user.value)
  var text1=this.user.value.nom + " "  +this.user.value.prenom + " "+this.user.value.email+" " +this.user.value.phone+ " " +this.date.value
    this.api.sendEmail({
      text:text1,
      email:this.user.value.email
    }) 
    alert("votre réservation confirmer")
}
  ngOnInit(): void {
    this.date=document.getElementById("table")
  }

}
