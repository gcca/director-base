import { Component, Input, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';


const noop = () => {};


export const VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => LineEditComponent),
  multi: true
};


let template = `
  <div>
    <label>{{label}}</label>
    <input type="text" [(ngModel)]="value">
  </div>
`;


@Component({ selector: 'line-edit', template, providers: [VALUE_ACCESSOR] })
export class LineEditComponent implements ControlValueAccessor {

  @Input()
  label: string = '';

  _value: string = '';

  private onTouchedCallback: () => void = noop;
  private onChangeCallback: (_: any) => void = noop;

  get value() { return this._value; }

  set value(v: any) {
    this._value = v;
    this.onChangeCallback(v);
  }

  writeValue(value: any) {
    this._value = value;
  }

  registerOnChange(fn: any) {
    this.onChangeCallback = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouchedCallback = fn;
  }

}
