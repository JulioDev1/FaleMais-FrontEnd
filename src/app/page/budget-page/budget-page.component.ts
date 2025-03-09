import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { FormComponent } from "../../components/form/form.component";
import { DisplayComponent } from "../../components/display/display.component";

@Component({
  selector: 'app-budget-page',
  imports: [HeaderComponent, FormComponent, DisplayComponent],
  templateUrl: './budget-page.component.html',
  styleUrl: './budget-page.component.css'
})
export class BudgetPageComponent {

}
