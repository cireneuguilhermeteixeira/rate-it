import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginPage } from './login';
import {HeaderPage} from '../header/header'

@NgModule({
  declarations: [
    LoginPage,
    //HeaderPage,
  ],
  imports: [
    IonicPageModule.forChild(LoginPage),
  ],
  exports: [
    LoginPage,
    //HeaderPage
  ],
 
})
export class LoginPageModule { }
