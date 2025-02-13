import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-residence',
  templateUrl: './add-residence.component.html',
  styleUrls: ['./add-residence.component.css']
})
export class AddResidenceComponent {

  addForm= new FormGroup({
    name: new FormControl('', Validators.required),
    address: new FormControl('', [Validators.required, Validators.maxLength(20)]),
    image: new FormControl(''),
    status: new FormControl('')
  });

  get name(){
    return this.addForm.get('name');
  }

  get address(){
    return this.addForm.get('address');
  }
  SaveResidence(F:FormGroup){
    console.log(F);
  
  }}
