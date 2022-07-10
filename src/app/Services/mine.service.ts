import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MineService {
  private _items: number = 0;
  SharingData = new Subject();

  private ProductId: any;
  productData = new Subject();

  constructor(private http: HttpClient) {}

  getAll() {
    // return this.http.get("https://run.mocky.io/v3/9d971cb03-a9f9-4d70-bae2-9d3adaa1cfe7");
    return this.http.get('http://localhost:3000/products');
  }

  addItem() {
    this._items += 1;
    this.SharingData.next(this._items);
    console.log(this._items);
  }

  addToCart(item: any) {
    let arr: any = [];
    item['qty'] = 1;
    let foundIndex = false;
    if (localStorage.getItem('items')) {
      let existingArr = localStorage.getItem('items');
      console.log(existingArr);
      arr = JSON.parse(existingArr + '');
      arr.forEach((ele: any, i: number) => {
        console.log(ele);
        if (ele.id == item.id) {
          arr[i]['qty'] = arr[i]['qty'] + 1;
          foundIndex = true;
        }
      });
      console.log(arr.length);
      if (arr.length == 0) {
        arr.push(item);
      } else if (!foundIndex) {
        arr.push(item);
      }
    } else {
      arr.push(item);
      console.log(arr);
    }
    console.log(item);
    console.log(arr);
    localStorage.setItem('items', JSON.stringify(arr));
  }

  sentId(id: any) {
    this.ProductId = id;
    this.productData.next(this.ProductId);
  }

  removeItem() {
    this._items -= 1;
    this.SharingData.next(this._items);
  }
  removeAllItems() {
    this._items = 0;
    this.SharingData.next(this._items);
  }

  getItemCount(): any {
    return this._items;
  }

  getId(): any {
    return this.ProductId;
  }
}
