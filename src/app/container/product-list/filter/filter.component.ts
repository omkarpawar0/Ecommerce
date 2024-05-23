import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
})
export class FilterComponent {
  @Input()
  totalProducts: number = 0;

  @Input()
  inStock: number = 1;

  @Input()
  outOfStock: number = 1;

  selecteBtn = 'all';

  @Output()
  selecteBtnval: EventEmitter<string> = new EventEmitter<string>();

  selecteBtnchange() {
    console.log(this.selecteBtn);
    this.selecteBtnval.emit(this.selecteBtn);
  }
}
