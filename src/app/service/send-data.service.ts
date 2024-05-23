import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SendDataService {

  public cartitemlist: any = [];
  public productlist = new BehaviorSubject<any>([]);
  public search = new BehaviorSubject<string>("");


  constructor() { }
  getproduct() {
    return this.productlist.asObservable();
  }
  setproject(product: any) {
    this.cartitemlist.push(...product);
    this.productlist.next(product)
  }

  addtocard(product: any) {
    this.cartitemlist.push(product);
    this.productlist.next(this.cartitemlist);
  }




}
