import { ApiService } from 'src/app/core/services/api.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-emprunt',
  templateUrl: './emprunt.component.html',
  styleUrls: ['./emprunt.component.scss']
})
export class EmpruntComponent implements OnInit {
 empruntForm !: FormGroup;
 RFID :string ="";
  constructor(private fb: FormBuilder , private _api : ApiService) { 
    this.empruntForm = this.fb.group({
      nom:['', Validators.required],
      prenom:['',Validators.required],
      niveau: ['',Validators.required],
      typeMateriel:['',Validators.required],
      RFID:['',Validators.required],
      action:['',Validators.required], 
      id_materiel:['',Validators.required]
    })
  }

  onSubmit(){
    // if(this.empruntForm.dirty && this.empruntForm.valid){
    //   alert(
    //     `Name: ${this.empruntForm.value.nom}
    //     Prename: ${this.empruntForm.value.prenom}`
    //   )
    // }
    console.log(this.empruntForm.value)
    let dataForm  = {...this.empruntForm.value,id_materiel:parseInt(this.empruntForm.value.id_materiel)}
    this._api.emprunt(dataForm).subscribe(data=>console.log(data));
  }
  ngOnInit(): void {
  }
  searchEtudiant(){

  }
}
