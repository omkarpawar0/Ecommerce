import { Component, ViewChild } from '@angular/core';
import { ProductListComponent } from './product-list/product-list.component';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css'],
})
export class ContainerComponent {
  name = 'omkar';
  addToCart: number = 0;
  product = {
    name: 'iphone 14',
    price: 700,
    color: 'orange',
    discount: 8.5,
    inStock: 10,
    pImage: './assets/img/dm.webp',
  };

  onNameC(event: any) {
    // this.name = event ;
    console.log(event.target.value);
    this.name = event.target.value;
  }

  discountedPrice() {
    return (
      this.product.price - (this.product.price * this.product.discount) / 100
    );
  }

  incremnetCartValue() {
    if (this.addToCart < 10) {
      this.addToCart++;
    }
  }

  decreamentCartValue() {
    if (this.addToCart > 1) {
      this.addToCart--;
    }
  }

  searchText: string = '';
  setSeachtext(searchVal: string) {
    this.searchText = searchVal;
  }

  parentSearch: string = '';
  searchTextMethod(inputVal: any) {
    this.parentSearch = inputVal;
  }

  // for empty search
  emptySearchVar: string;
  searchtextwoMethod(val: any) {
    this.emptySearchVar = val;
  }
}
