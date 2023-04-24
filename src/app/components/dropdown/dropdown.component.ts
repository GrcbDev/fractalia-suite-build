import { Component, ElementRef, EventEmitter, HostListener, Input, OnInit, Output, Renderer2, ViewChild } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { DropdownInterface } from './shared/dropdown-interface';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: DropdownComponent,
      multi: true,
    },
  ],
})
export class DropdownComponent implements ControlValueAccessor  {
  @Input() items: DropdownInterface[] = [];
  @Input() placeholder: string = 'Seleccione';
  @Input() id = 'select-default';
  @Input() initValue: string = '';

  isOpen = false;

  @Output() onchange = new EventEmitter();

  @ViewChild('toggleButton') toggleButton: ElementRef;
  @ViewChild('menu') menu: ElementRef;

  itemSelected: DropdownInterface = {
    key: '',
    value: '',
  };

  @HostListener('click', ['$event']) onBlur(event: any) {
    this.onTouch();
  }


  onChange: any = () => {}
  onTouch: any = () => {}
  _value = null;
  constructor(private renderer: Renderer2) {
    this.renderer.listen('window', 'click', (e: Event) => {
      if (
        this.isOpen
        && this.toggleButton
        && !this.toggleButton.nativeElement.contains(e.target)
        && !this.menu.nativeElement.contains(e.target)
      ) {
        this.isOpen = false;
      }
    });
  }

  ngOnInit() {
  }


  ngOnChanges() {
    this.updateValues()
  }

  updateValues() {
    if(this.items.length > 0) {
      const find = this.items.find(x => x.key.toString() === this.initValue.toString());
      if(find) {
        this.itemSelected = find;
      }  else{
        this.setDefaultValue();
      }
    } else {
      this.setDefaultValue();
    }

  }

  setDefaultValue() {
    this.itemSelected = {
      key: '',
      value: this.placeholder,
    }
  }


  toogleSelect() {
    this.isOpen = !this.isOpen;
  }

  onSelectedItem(item: DropdownInterface) {
    this.isOpen = false;
    this.itemSelected = item;
    this._value = item;
    this.onChange(this.value)
    this.onchange.emit(this._value);
  }


  get value(): number {
    return this._value;
  }

  set value(val){

    if( val !== undefined && this._value !== val){
      this._value = val;
      this.onChange(val);
      this.onTouch(val);
    }
  }

  writeValue(value: any){
    this._value = value;
    this.onChange(this._value)
    if(!value) this.setDefaultValue();
  }

  registerOnChange(fn: any){
    this.onChange = fn
  }

  registerOnTouched(fn: any){
    this.onTouch = fn
  }

}
