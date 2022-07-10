import { Component, OnInit } from '@angular/core';
import { MineService } from '../Services/mine.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  // color= "white";
  // Condition:boolean = false;
  sub1:any;
  // value: number = 100;
 
  wishlist:number=0
  item:number=0;
  color= "green";
  Users:any;
  errorMessage:string = 'loading....';
  childData:string | undefined;
  
  id:any;
  constructor(private serv:MineService){}

   ngOnInit(): void {
    
    this.item = this.serv.getItemCount();

    let sub1 = this.serv.SharingData.subscribe((sharedData:any)=>{
      this.item = sharedData;
      console.log("item in header", this.item);
    })
    // console.log("item in header", this.item);

   }
  

}
