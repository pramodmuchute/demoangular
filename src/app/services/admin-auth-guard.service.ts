import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuard  {

  constructor(
    private authService: AuthService
  ) { }

  //canActivate() {
    // this.authService.currentUser
    //     .map(
    //       user => {
    //       }
    //     )
  //}

}
