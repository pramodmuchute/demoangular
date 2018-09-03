import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../services/common.service';
import { HttpHeaders } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { webSocket } from 'rxjs/webSocket';
import 'rxjs-compat/add/operator/take';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  allCategories$: any[];
  product = {};
  headers = new HttpHeaders({
    //"Content-Type": "application/json", 
    "Access-Control-Request-Headers": "X-Requested-With, accept, content-type",
    "Access-Control-Allow-Methods": "GET, POST",
    "Content-Type": "application/x-www-form-urlencoded"
});

  constructor(
    private commonService: CommonService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    commonService.getAll('http://localhost/onlineshopping/categories.php')
                .subscribe(Response => {
                  this.allCategories$ = Response.json();
                  console.log(Response.json());
                });
                
    let id = this.route.snapshot.paramMap.get('id');
    if(id){
      this.commonService.getItem('http://localhost/onlineshopping/get_product.php', id)
                        .take(1)
                        .subscribe(p => {
                            this.product = p.json();
                            console.log(p.json());
                          });
    }    
   }

  ngOnInit() {
  }

  save(product) {
    this.commonService.create('http://localhost/onlineshopping/create_product.php', product, this.headers)
                      .subscribe(
                        Response => {
                          if(Response.status == 200){
                            this.router.navigate(['admin/products']);  
                          }
                        },
                        err => {
                          console.log("Error occured");
                        }
                      );
  }

  getItem(product) {
    this.commonService.create('http://localhost/onlineshopping/create_category.php', product, this.headers)
                      .subscribe(
                        Response => {
                          if(Response.status == 200){
                            this.router.navigate(['admin/products']);  
                          }
                        },
                        err => {
                          console.log("Error occured");
                        }
                      );
  }

}
