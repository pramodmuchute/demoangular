import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  constructor() { }

  create(){
    
  }

  getOrCreateCart(){
      let cartId = localStorage.getItem('cartId');
      if(!cartId){
        this.create();

        //Add product cart
      }else{

        //Add product cart
      }
  }
}
