import { Component, OnInit, Input } from '@angular/core';
import { CommonService } from '../services/common.service';
import { ActivatedRoute } from '@angular/router';
import { ShoppingCartService } from '../shopping-cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products$;
  categories$
  category: string; 
  @Input('show-actions') showActions = true;

  constructor(
    private cartService: ShoppingCartService,
    route: ActivatedRoute,
    commonService: CommonService
    ) { 
    commonService.getAll('http://localhost/onlineshopping/products.php')
                .subscribe(Response => {
                  this.products$ = Response.json();
                  route.queryParamMap.subscribe(params => {
                    this.category = params.get('category');  
                  });
                });

    commonService.getAll('http://localhost/onlineshopping/categories.php')
                .subscribe(Response => {
                  this.categories$ = Response.json();
                });
    
    
  }

  addToCart(product){
    let cartId = localStorage.getItem('cartId');
    if(!cartId){
      this.cartService.create(); 
    }
  }  

}
