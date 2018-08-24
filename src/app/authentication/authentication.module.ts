import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [
    CommonModule,
    RegisterComponent,
    LoginComponent,
  ],
  exports: [
    RegisterComponent,
    LoginComponent,
  ],
  declarations: [RegisterComponent, LoginComponent]
})
export class AuthenticationModule { }
