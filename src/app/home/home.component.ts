import { Component, OnInit } from '@angular/core';
import { MineService } from '../Services/mine.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  wishlist: number = 0;
  item: number = 0;
  color = 'green';
  errorMessage: string = 'loading....';
  breakpoint: any;

  position: boolean = false;
  position1: boolean = false;
  position2: boolean = false;
  position3: boolean = false;

  products: any = [];
  id: any;
  constructor(private service: MineService) {}

  ngOnInit(): void {
    this.service.getAll().subscribe((res: any) => {
      console.log('api', res);
      let product = res;
      this.products = product;
    });
  }

  addtocart(i: any) {
    this.service.addItem();
    //  console.log("id",id)
    // this.id = id - 1;
    // this.service.sentId(this.id);
    this.service.addToCart(i)
  }
  removecart() {
    this.service.removeItem();
  }

  onResize(event: any) {
    this.breakpoint = event.target.innerWidth <= 400 ? 1 : 4;
  }
}
