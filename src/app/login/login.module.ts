import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { MaterialModule } from '../material/material.module';
import { AuthenticationService } from '../shared/services/authentication.service';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [LoginComponent],
  exports: [ LoginComponent],
  providers: [AuthenticationService]
})
export class LoginModule { }
