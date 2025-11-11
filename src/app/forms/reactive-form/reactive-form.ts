import { Component , OnInit} from '@angular/core';
// import them to create a reactive form
import {FormControl, FormGroup, ReactiveFormsModule, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  imports: [ReactiveFormsModule,],
  templateUrl: './reactive-form.html',
  styleUrl: './reactive-form.css',
})
export class ReactiveForm {

  trainerForm = new FormGroup
  (
    {
      name : new FormControl(''),
      email : new FormControl(''),
      password : new FormControl(''),
    }
  )

  constructor ( private fb : FormBuilder){}

  // ngOnInit(): void {
  //   this.trainingForm = this.fb.group({
  //     course : [''],
      
  //   })
  // }

  // trainingForm = this.fb.group({

  // })

  submit()
  {
    console.log(this.trainerForm.value);
  }
}
