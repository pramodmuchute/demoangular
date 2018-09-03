import { Component, OnInit } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { webSocket } from 'rxjs/webSocket';
//import 'rxjs/Rx';

import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit {
  allProducts$: any[];
  constructor(
    private commonService: CommonService
  ) { 
    commonService.getAll('http://localhost/onlineshopping/products.php')
                .subscribe(Response => {
                  this.allProducts$ = Response.json();
                  console.log(Response.json());
                });
  }

  ngOnInit() {
    
  }

}
