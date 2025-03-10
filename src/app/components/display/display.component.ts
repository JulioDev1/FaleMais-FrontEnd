import { Component, Input, OnInit } from '@angular/core';
import { ResponseBudgetDto } from '../../services/Model/ResponseDto';
import { CommonModule } from '@angular/common';
import { BudgetService } from '../../services/budget.service';

@Component({
  selector: 'app-display',
  imports: [CommonModule],
  templateUrl: './display.component.html',
  styleUrl: './display.component.css'
})
export class DisplayComponent implements OnInit {

  budgetData: ResponseBudgetDto | null = null;

  constructor(private budgetService: BudgetService) {}

  ngOnInit(): void {
    this.budgetService.budgetData$.subscribe(data => {
      this.budgetData = data;
    });
  }



}
