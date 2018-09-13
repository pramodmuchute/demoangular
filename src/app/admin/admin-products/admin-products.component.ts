import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { webSocket } from 'rxjs/webSocket';
//import 'rxjs/Rx';

import { CommonService } from 'src/app/services/common.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit, OnDestroy {
  allProducts$: {title: string}[];
  subscription: Subscription;
  filterProducts: any[];
  constructor(
    private commonService: CommonService,
    private router: Router
  ) { 
    this.subscription = commonService.getAll('http://localhost/onlineshopping/products.php')
                .subscribe(Response => {
                  this.filterProducts = this.allProducts$ = Response.json();
                  console.log(Response.json());
                });
  }

  ngOnInit() {
    
  }

  filter(query: string){
    this.filterProducts = (query) ? this.allProducts$.filter(p => p.title.toLowerCase().includes(query.toLowerCase())) : this.filterProducts;
    console.log(query);
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  delete(id){
    if(confirm('Are you sure you want to delete?')){
      this.commonService.delete('http://localhost/onlineshopping/delete_product.php', id)
                        .subscribe(
                          Response => {
                            if(Response.status == 200){
                              this.filterProducts = Response.json();
                              //this.router.navigate(['admin/products']);  
                            }
                          },
                          err => {
                            console.log("Error occured");
                          }
                        );
    }
  }

  

}
