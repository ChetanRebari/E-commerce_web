import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  url="https://fakestoreapi.com/products";

  constructor(private _http:HttpClient) { };
  
  getData(){
    return this._http.get(this.url);
  };
}
