import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-ajouter',
  templateUrl: './ajouter.component.html',
  styleUrls: ['./ajouter.component.scss']
})
export class AjouterComponent implements OnInit {
  // onSubmit(arg0: any) {
  // throw new Error('Method not implemented.');
  // }
  selected = 'option2';
  ajoutForm !: FormGroup;
  titleAlert: string = 'This field is required';
  post: any = '';


  constructor(private formBuilder: FormBuilder) {

  }

  ngOnInit(): void {
    this.createForm();
    console.log(this.ajoutForm.valid)
  }

  createForm() {
    this.ajoutForm = this.formBuilder.group({
      'id': [null, Validators.required],
      'type': [null, Validators.required],
      'etat': [null, Validators.required],
      'status': [null, Validators.required],
    });
  }

  SendData() {
    console.log(this.ajoutForm.value);
  }
}
