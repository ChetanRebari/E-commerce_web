import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';
import { SendDataService } from 'src/app/service/send-data.service';

import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  items: any;
  searchKey: string = "";
  showDetails: boolean = false;
  selecteditem: [] = [];

  count:number=0;

  constructor(private product: ProductService, private senddata: SendDataService, private router: Router) {
    this.product.getData().subscribe((res: any) => {
      this.items = res;
    });
  }
  ngOnInit(): void {
    this.senddata.search.subscribe((val: any) => {
      this.searchKey = val;
      // console.log( val)
    })

   
  };
  additem(item: any) {
    this.senddata.addtocard(item);
    alert("Successful add to cart")
    this.count++;
    console.log(this.count)
  }

  additems() {
    if (this.selecteditem) {
      this.senddata.addtocard(this.selecteditem);
      this.showDetails=false;
      alert("Successful add to cart")
    }

  }
  

  fullDetails(item: any) {
    this.showDetails = true;
    this.selecteditem = item;
  }

  closeDetaisPage() {
    this.showDetails = false;
  }



}
