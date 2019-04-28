import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import 'rxjs-compat/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: Http,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  login(credentials){
    let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
    localStorage.setItem('returnUrl', returnUrl);
    return this.http.post('http://onshopapi/user_validate.php', 
                      JSON.stringify(credentials)
                    )
                    .map(Response => {
                      let result =  Response.json();
                      if(result && result.id){
                        let myObj = { id: result.id, username: result.username, role: result.role };
                        localStorage.setItem('token', JSON.stringify(myObj));
                        return true;
                      }

                      return false;
                    });
  }

  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['/']);
    
  }

  isLoggedIn(){
    let token = JSON.parse(localStorage.getItem('token'));

    if(!token)
      return false;
    else
      return true;
  }

  get currentUser(){
    let token = JSON.parse(localStorage.getItem('token'));

    if(!token) return false

    return token;
  }
}
