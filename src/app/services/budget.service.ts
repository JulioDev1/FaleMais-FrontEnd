import { Injectable } from '@angular/core';
import { ResponseBudgetDto } from './Model/ResponseDto';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BudgetService {

  constructor() { }

  private budgetDataSubject = new BehaviorSubject<ResponseBudgetDto | null>(null);
  budgetData$ = this.budgetDataSubject.asObservable(); // Expor como Observable

  setBudgetData(data: ResponseBudgetDto) {
    this.budgetDataSubject.next(data);
  }
}
