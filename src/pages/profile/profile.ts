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
  user = {
    name:'',
    username:''
  }
  constructor(public navCtrl: NavController) {
  }

  ionViewWillEnter() {
    this.user.name = localStorage.getItem('name');
    this.user.username = localStorage.getItem('username');
  }

  welcome(){
    this.navCtrl.setRoot(WelcomePage);
  }

  openDetails(){
    this.navCtrl.push('DetailPage');
  }
}
