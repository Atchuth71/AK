import { Component, OnInit } from '@angular/core';
import { MineService } from '../Services/mine.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  id: any;
  products: any;
  SpecificProduct: any;

  AllProducts: any = [];
  LatestProduct: any;
  Price: number = 0;

  TotalAmount: Number = 0;
  discount: Number = 0;
  productsAdded: any = [];
  constructor(private Service: MineService) {}

  ngOnInit(): void {
    let existingArr = localStorage.getItem('items');
    this.productsAdded = JSON.parse(existingArr + '');
    this.Price = this.productsAdded
      .map((i: any) => i.price)
      .reduce((a: any, b: any) => a + b);
    if (this.Price <= 100) {
      this.discount = this.Price;
      this.TotalAmount = this.Price;
    }
    if (this.Price >= 100) {
      this.discount = (this.Price * 10) / 100;
      this.TotalAmount = this.Price - (this.Price * 10) / 100;
    }
    if (this.Price > 500) {
      this.discount = (this.Price * 20) / 100;
      this.TotalAmount = this.Price - (this.Price * 20) / 100;
    }
  }

  removecart() {
    this.AllProducts = [];
    this.LatestProduct = [];
    this.Service.removeAllItems();
    this.Price = 0;
    this.discount = 0;
    this.TotalAmount = 0;
    this.productsAdded = [];
    localStorage.clear();
  }
}
