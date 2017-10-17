import { Injectable } from '@angular/core';
import {  Route, Router, ActivatedRoute } from '@angular/router';

const USER_NAME: string = 'test';
const PASSWORD: string = 'test';
@Injectable()
export class AuthenticationService {
  messageLogin;
  constructor(private router: Router) { }

  login( username: string , password: string): boolean {
       if ( username === USER_NAME && password === PASSWORD ) {
           return true;
       }else {
           return false;
       }
  }
  logout(): void {

  }

}
