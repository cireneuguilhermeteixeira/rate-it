import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { WelcomePage } from '../welcome/welcome';

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {

  search:any=null;
  constructor(public navCtrl: NavController) {

  }

  welcome(){
    this.navCtrl.setRoot(WelcomePage);
  }

  openDetails(){
    this.navCtrl.push('DetailPage');
  }
}
