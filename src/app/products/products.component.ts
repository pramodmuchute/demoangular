import { Component, OnInit } from '@angular/core';
import { CommonService } from '../services/common.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products$;
  categories$
  category: string; 

  constructor(
    route: ActivatedRoute,
    commonService: CommonService
    ) { 
    commonService.getAll('http://localhost/onlineshopping/products.php')
                .subscribe(Response => {
                  this.products$ = Response.json();
                });

    commonService.getAll('http://localhost/onlineshopping/categories.php')
                .subscribe(Response => {
                  this.categories$ = Response.json();
                });
    
    route.queryParamMap.subscribe(params => {
      this.category = params.get('category');  
    });
  }

  

}
