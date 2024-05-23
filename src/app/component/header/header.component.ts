import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/service/product.service';
import { SendDataService } from 'src/app/service/send-data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  searchQuery: string = '';
  item: any[]=[];
 
  totalitem:number=0;

  constructor(private router: Router, private productsr: ProductService,private senddata:SendDataService) { }

  ngOnInit(): void {
    this.productsr.getData().subscribe((res) => {
      this.item.push(res);
       
    })
    this.senddata.getproduct().subscribe((res)=>{
      this.totalitem=res.length;
      
    })
  }

  searchitem() {
    this.senddata.search.next(this.searchQuery); 
      //  this.router.navigate(['/search']);
  }
  }

