import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputsComponent } from '../inputs/inputs.component';
import { SelectComponent } from "../select/select.component";
import { Plain } from '../../services/Model/Plains';
import { GetPlainsService } from '../../services/get-plains.service';

@Component({
  selector: 'app-form',
  imports: [ReactiveFormsModule, InputsComponent, SelectComponent],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {

  planos: { label: string; value: number }[] = [];
  
  private formBuilder = inject(FormBuilder)

  protected form = this.formBuilder.group({
    origem:["", Validators.required],
    destino:["",Validators.required],
    plano:["",Validators.required],
    minutos:["",Validators.required]
  });

  constructor(private getPlains:GetPlainsService){}
  
  async ngOnInit():Promise<void>{
    try{
     await this.getAllPlains();
    }catch(error){
      console.log("Erro ao buscar planos",error)
  
    }
  }

  async getAllPlains(){
    const plains = await this.getPlains.getPlains();
    
    this.planos = plains.map((plano:Plain)=>{
      return {
        label: plano.nome,
        value: plano.id
      }
    })
  }
  buttonClick(){
    console.log(this.form.value);
  }
}
