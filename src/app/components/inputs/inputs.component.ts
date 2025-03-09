import { Component, inject, input } from '@angular/core';
import { FormsModule, NgControl } from '@angular/forms';

@Component({
  selector: 'app-inputs',
  imports: [FormsModule],
  template:`
    <div class="input-group">
        <label >{{ label() }}</label>
        <input 
            type="text" 
            [(ngModel)]="inputValue" 
            (focus)="onTouched && onTouched()"
            (input)="onChange && onChange(inputValue)"
        />
    </div>
  `,
  styleUrl: './inputs.component.css'
})
export class InputsComponent {
  label = input.required();
  inputValue = '';
   
  private ngControl = inject(NgControl,{optional:true});
  protected onTouched?: ()=>{}
  protected onChange?: (value: string) => void

  constructor() {
    if (this.ngControl) this.ngControl.valueAccessor = this;
  }

  writeValue(obj: string): void {
   console.log(obj);
    this.inputValue = obj;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
  }
}
