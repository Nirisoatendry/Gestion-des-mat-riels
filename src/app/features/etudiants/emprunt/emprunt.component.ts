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

  constructor(private fb: FormBuilder , private _api : ApiService) { 
    this.empruntForm = this.fb.group({
      nom:['', Validators.required],
      prenom:['',Validators.required],
      niveau: ['',Validators.required],
      typeMateriel:['',Validators.required],
      RFID:['',Validators.required],
      status:['',Validators.required], 
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
    this._api.emprunt(this.empruntForm.value).subscribe(data=>console.log(data));
  }
  ngOnInit(): void {
  }

}
