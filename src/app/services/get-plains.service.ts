import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

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
}
