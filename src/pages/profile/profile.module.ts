import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProfilePage } from './profile';
//import {HeaderPage} from '../header/header'

@NgModule({
  declarations: [
    ProfilePage,
    //HeaderPage
  ],
  imports: [
    IonicPageModule.forChild(ProfilePage),
  ],
  exports: [
    ProfilePage
    //HeaderPage
  ],
 
})
export class ProfilePageModule { }
