import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { webSocket } from 'rxjs/webSocket';
import { ShoppingCartComponent } from '../shopping-cart/shopping-cart.component';
//import { Product } from './../models/product';

import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit, OnDestroy{
  // @Input('product') product: ProductCardComponent; 
  // @Input('show-actions') showActions = true;
  
  constructor(private cartService: ShoppingCartComponent) { }

  ngOnInit(){

  }

  ngOnDestroy(){

  }

  addToCart(product){
    alert("sds");
  }
}
