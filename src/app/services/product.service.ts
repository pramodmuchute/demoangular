import { Injectable } from '@angular/core';
import { Response, Http } from '@angular/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

// const httpOptions = {
//   headers: new HttpHeaders({ 'Content-Type': 'application/json' })
// };

@Injectable()


export class ProductService {

  constructor(
    private http: Http
  ) { }

  getAll() {
    return this.http.get('http://localhost/onlineshopping/products.php');
                    
    // return [
    //   {
    //     id: 1,
    //     title: 'Product1',
    //     price: 30,
    //     imageUrl: 'jdhfkjh'
    //   },
    //   {
    //     id: 2,
    //     title: 'Product2',
    //     price: 20,
    //     imageUrl: 'jdhfkjh'
    //   },
    //   {
    //     id: 3,
    //     title: 'Product3',
    //     price: 33,
    //     imageUrl: 'jdhfkjh'
    //   },
    //   {
    //     id: 4,
    //     title: 'Product4',
    //     price: 40,
    //     imageUrl: 'jdhfkjh'
    //   }
    // ]
  }

}
