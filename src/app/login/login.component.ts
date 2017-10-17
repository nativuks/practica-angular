import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {  Route, Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../shared/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = '' ;
  password = '' ;
  messageLogin = '';


  constructor( public dialogRef: MatDialogRef<LoginComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private router: Router, private authenticate: AuthenticationService) { }

  ngOnInit() {
  }

  onLoginClick(username: string, password: string): void {
    this.username = username;
    this.password = password;
      console.log('username', this.username );
      console.log('password', this.password );
      if ( this.authenticate.login(username, password)) {
        this.router.navigate(['/dashboard']);
        this.onCloseDialog();

      }else {
         this.messageLogin = 'Username o password invalido';
      }
  }
  onCloseDialog(): void {
   this.dialogRef.close();
  }
  onSubmit(): void {

  }

}
