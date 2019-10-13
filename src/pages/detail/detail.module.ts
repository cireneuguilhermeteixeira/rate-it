import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetailPage } from './detail';
//import {HeaderPage} from '../header/header'

@NgModule({
  declarations: [
    DetailPage,
    //HeaderPage
  ],
  imports: [
    IonicPageModule.forChild(DetailPage),
  ],
  exports: [
    DetailPage
    //HeaderPage
  ],
 
})
export class ProfilePageModule { }
