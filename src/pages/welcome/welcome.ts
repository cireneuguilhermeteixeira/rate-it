import { Component } from '@angular/core';
import { NavController,IonicPage } from 'ionic-angular';
//import { HomePage } from '../home/home';

//@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html'
})
export class WelcomePage {

  constructor(public navCtrl: NavController) {

  }

  login(){
    console.log('login');
    this.navCtrl.push('HomePage');
    //this.navCtrl.setRoot(HomePage);
  }

}
