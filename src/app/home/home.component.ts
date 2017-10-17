import { Component, OnInit } from '@angular/core';
import {  Route, Router, ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material';
import { LoginComponent } from '../login/login.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public preview: MatDialog) { }

  ngOnInit() {
  }


  openLoginDialog(  ): void {
    this.setupdDialog();
    /* dialogRef.afterClosed().subscribe( result => {
      this.some = result;
    }) */
  }
  setupdDialog(  width = '400px', height = '350px'): void {
    this.preview.open(LoginComponent , {
      width : width,
      height: height,
    });
  }

}
