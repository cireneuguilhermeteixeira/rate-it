import { Component, Input } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { WelcomePage } from '../welcome/welcome';

@Component({
  selector: 'page-header',
  templateUrl: 'header.html'
})
export class HeaderPage {
  @Input()
  avatar;

  search:any=null;
  constructor(public navCtrl: NavController) {

  }

  searchByCategory($type){
  }

  welcome(){
    this.navCtrl.setRoot(WelcomePage);
  }

  openProfile(){
    console.log(this.avatar);
    
    this.navCtrl.push('ProfilePage');
  }
}
