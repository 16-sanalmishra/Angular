import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css'],
})
export class CockpitComponent implements OnInit {
  productName = '';
  productStock;

  @Output()
  productAdded = new EventEmitter<{
    productName: string;
    productAvailability: string;
    stock: number;
  }>();

  constructor() {}

  ngOnInit(): void {}

  onAddProduct(productNameInput : HTMLInputElement) {
    this.productAdded.emit({
      productName: productNameInput.value,
      productAvailability: this.productStock > 0 ? 'In Stock' : 'Out of Stock',
      stock: this.productStock,
    });
    productNameInput.value='';
    this.productStock='';
  }
}