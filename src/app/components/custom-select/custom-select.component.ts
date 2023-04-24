import { Component, ElementRef, EventEmitter, HostListener, Input, Output, Renderer2, ViewChild } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { SelectInterface } from './shared/interfaces/select-interface';

@Component({
  selector: 'app-custom-select',
  templateUrl: './custom-select.component.html',
  styleUrls: ['./custom-select.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: CustomSelectComponent,
      multi: true,
    },
  ],
})
export class CustomSelectComponent implements ControlValueAccessor {
  @ViewChild('toggleButton') toggleButton!: ElementRef;
  @ViewChild('menu') menu!: ElementRef;

  @Input() items: SelectInterface[] = [{ key: "1", value: 'nuno'}, { key: "2", value: 'dos'}];
  @Input() icon?: string;
  @Input() placeholder: string = 'Seleccione';

  isOpen = false;

  value!: any;
  private onChange: (value: any) => void = () => {
    /**/
  };
  private onTouched: () => void = () => {};
  protected lastValue: any;

  @HostListener('click', ['$event']) onBlur(event: any) {
    this.onTouched();
  }

  @Output() changeEvent = new EventEmitter();

  constructor(private renderer: Renderer2) {
    this.renderer.listen('window', 'click', (e: Event) => {
      if (
        this.isOpen &&
        this.toggleButton &&
        !this.toggleButton.nativeElement.contains(e.target) &&
        !this.menu.nativeElement.contains(e.target)
      ) {
        this.isOpen = false;
      }
    });
  }

  toogleSelect() {
    this.isOpen = !this.isOpen;
  }

  onSelectedItem(item: SelectInterface) {
    this.isOpen = false;
    this.placeholder = item.value;
    this.changeEvent.emit(item);
    this.onChange(item);
  }

  writeValue(obj: any): void {
    this.value = obj;
  }

  registerOnChange(fn: (value: any) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }
}
