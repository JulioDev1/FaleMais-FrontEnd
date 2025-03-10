import { CommonModule } from '@angular/common';
import { Component, inject, Input, input } from '@angular/core';
import { FormsModule, NgControl } from '@angular/forms';

@Component({
  selector: 'app-select',
  imports: [FormsModule, CommonModule],
  templateUrl:'./select.component.html',
  styleUrl: './select.component.css'
})


export class SelectComponent {
  @Input() label: string = '';
  @Input() options: { label: string; value: any }[] = [];

  selectedValue: string = '';

  private ngControl = inject(NgControl, { optional: true });
  protected onTouched?: () => void;
  protected onChange?: (value: string) => void;

  constructor() {
    if (this.ngControl) this.ngControl.valueAccessor = this;
  }

  writeValue(obj: string): void {
    this.selectedValue = obj;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {}
}