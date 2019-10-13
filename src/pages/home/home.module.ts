import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage } from './home';
import {HeaderPage} from '../header/header'

@NgModule({
  declarations: [
    HomePage,
    //HeaderPage,
  ],
  imports: [
    IonicPageModule.forChild(HomePage),
  ],
  exports: [
    HomePage,
    //HeaderPage
  ],
 
})
export class HomePageModule { }
