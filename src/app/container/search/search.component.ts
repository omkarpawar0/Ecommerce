import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  searchText: string = '';
  searchtextw: string = '';

  @Output()
  searchtextwo: EventEmitter<string> = new EventEmitter<string>();

  withoutSeach(val: any) {
    this.searchtextw = val.target.value;
    this.searchtextwo.emit(val.target.value);
  }

  @Output()
  InputVal: EventEmitter<string> = new EventEmitter<string>();

  @ViewChild('searchTexttt') val:ElementRef ;

  searchTextt() {

    this.InputVal.emit(this.val.nativeElement.value);
  }

  // @Output()
  // updateSearch: EventEmitter<string> = new EventEmitter<string>();
}
