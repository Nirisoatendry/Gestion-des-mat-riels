import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-emprunt',
  templateUrl: './emprunt.component.html',
  styleUrls: ['./emprunt.component.scss']
})
export class EmpruntComponent implements OnInit {
 empruntForm: any;

  constructor(private fb: FormBuilder) { 
    this.empruntForm = this.fb.group({
      nom:['', Validators.required],
      prenom:['',Validators.required],
      niveau: ['',Validators.required],
      typeMateriel:['',Validators.required],
      idEtudiant:['',Validators.required],
      idMateriel:['',Validators.required]
    })
  }

  saveData(){
    if(this.empruntForm.dirty && this.empruntForm.valid){
      alert(
        `Name: ${this.empruntForm.value.nom}
        Prename: ${this.empruntForm.value.prenom}`
      )
    }
  }
  ngOnInit(): void {
  }

}
