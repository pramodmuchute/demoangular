import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { HttpHeaders } from '@angular/common/http';
import { Http } from '@angular/http';
//import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

const httpOptions = {
  headers: new HttpHeaders(
    { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
    )
};

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit {
  allProducts$: any[];
  constructor(
    private productService: ProductService,
    private http: Http
  ) { 
    //this.allProducts$ = productService.getAll();
    productService.getAll()
    //.map(res => res.json());
    .subscribe(Response => {
      this.allProducts$ = Response.json();
      console.log(Response.json());
    });
    //console.log(this.allProducts$);
    
    //console.log(this.allProducts$);
  }

  ngOnInit() {
    
    // .subscribe(Response => {
    //   console.log(Response.json());
    // });
  }

}
