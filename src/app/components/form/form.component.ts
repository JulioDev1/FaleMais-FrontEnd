import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputsComponent } from '../inputs/inputs.component';

@Component({
  selector: 'app-form',
  imports: [ReactiveFormsModule, InputsComponent],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {

  private formBuilder = inject(FormBuilder)


  protected form = this.formBuilder.group({
    origem:["", Validators.required],
    destino:["",Validators.required],
    plano:["",Validators.required],
    minutos:["",Validators.required]
  });


  buttonClick(){
    console.log(this.form.value);
  }
}
