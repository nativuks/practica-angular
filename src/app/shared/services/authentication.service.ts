import { Injectable } from '@angular/core';
import {  Route, Router, ActivatedRoute } from '@angular/router';

@Injectable()
export class AuthenticationService {

  constructor(private router: Router) { }

  login( username: string , password: string): string {
       if ( username && password ) {
        this.router.navigate(['home']);
        return 'User has been authenticate';
       }else {
        return 'User has not been authenticate';
       }
  }
  logout(): void {

  }

}
