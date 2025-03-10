import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { BudgetDto } from './Model/BudgetDto';

@Injectable({
  providedIn: 'root'
})
export class GetPlainsService {

  private url = `${environment.api}`
  private headers: HeadersInit = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    "Content-Type": "application/json", 
  };
  constructor() { }

  async getPlains(){
    const response = await fetch(`${this.url}/Plano/Allplain`,{
      method: 'GET',
      headers: this.headers
    });
    const data = await response.json();
    return data;
  }

  async getPlainById(id: number){
    const response = await fetch(`${this.url}/Ddd/get-ddds-byPlainId?plainId=${id}`,{
      method: 'GET',
      headers: this.headers
    
    });
    const data = await response.json();
    return data;
  }
  async gerateBudget(budget:BudgetDto){
    const response = await fetch(`${this.url}/Plano/getBudgetPlain`,{
      method: 'POST',
      headers: this.headers,
      body:JSON.stringify(budget)
    });
    const data = await response.json();
    return data;
  }
}
