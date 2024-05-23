import { Component, OnInit } from '@angular/core';
import { SendDataService } from 'src/app/service/send-data.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  product: any[] = [];
  hide = false;
  CartMassage = true;
  totalPrice: number = 0;

  constructor(private senddata: SendDataService) { }

  ngOnInit(): void {
    this.senddata.getproduct().subscribe((res) => {
      this.product = res;
      console.log(res)

      if (this.product.length > 0) {
        this.hide = true;
        this.CartMassage = false;

      } else {
        this.hide = false
      }


    })
    const sum = this.product.reduce((accumulator: any, currentValue: any) => {
      return accumulator + currentValue.price;
    }, 0);
    this.totalPrice = sum;
    // console.log(sum)
  }

  deleteItem(id: number) {
    const index = this.product.findIndex(item => item.id === id);
    if (index !== -1) {
      this.product.splice(index, 1);
    }
    if (this.product.length==0) {
      this.hide=false;
     this.CartMassage = true;
    } 
  }


}






