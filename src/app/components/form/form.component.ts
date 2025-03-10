import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputsComponent } from '../inputs/inputs.component';
import { SelectComponent } from "../select/select.component";
import { Plain } from '../../services/Model/Plains';
import { GetPlainsService } from '../../services/get-plains.service';
import { Ddd } from '../../services/Model/Ddd';
import { BudgetDto } from '../../services/Model/BudgetDto';
import { ResponseBudgetDto } from '../../services/Model/ResponseDto';
import { BudgetService } from '../../services/budget.service';

@Component({
  selector: 'app-form',
  imports: [ReactiveFormsModule, InputsComponent, SelectComponent],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {

  planos: { label: string; value: number }[] = [];
  origem: { label: string; value: string }[] = [];
  destino: { label: string; value: string }[] = [];

  
  private formBuilder = inject(FormBuilder)

  protected form = this.formBuilder.group({
    plano:["",Validators.required],
    origemDdd:["", Validators.required],
    destinoDdd:["",Validators.required],
    minutos:["",Validators.required]
  });

  constructor(private getPlains:GetPlainsService, private budgetService: BudgetService
  ){}
  
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
    await this.getOriginById();
    await this.getDestinoById();
  }

  async getOriginById(){
    const dddDbyPlains = await this.getPlains.getPlainById(1);

    this.origem = dddDbyPlains.map((ddd:Ddd)=>{
      return {
        label: ddd.ddd,
        value: ddd.ddd
      }
    })
  }
  async getDestinoById(){
    const dddDbyPlains = await this.getPlains.getPlainById(1);

    this.destino = dddDbyPlains.map((ddd:Ddd)=>{
      return {
        label: ddd.ddd,
        value: ddd.ddd
      }
    })
  }
  

  async buttonClick(){

    const budgetDto: BudgetDto = {
      plainId: Number(this.form.value.plano),
      dddSender: this.form.value.origemDdd as string,
      dddReceiver: this.form.value.destinoDdd as string,
      minutesQuantity: Number(this.form.value.minutos)
    }
    
    const doBudget:ResponseBudgetDto = await this.getPlains.gerateBudget(budgetDto );

    this.budgetService.setBudgetData(doBudget);

        
  }
}
