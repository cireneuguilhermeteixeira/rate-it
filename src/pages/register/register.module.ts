import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegisterPage } from './register';
import {HeaderPage} from '../header/header'

@NgModule({
  declarations: [
    RegisterPage,
    //HeaderPage,
  ],
  imports: [
    IonicPageModule.forChild(RegisterPage),
  ],
  exports: [
    RegisterPage,
    //HeaderPage
  ],
 
})
export class RegisterPageModule { }
