import { Component, ViewChild, Input } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { WelcomePage } from '../welcome/welcome';
import { HeaderPage } from '../header/header';

@IonicPage()
@Component({
  
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild("header") public headerComponent: HeaderPage;
  
  search:any=null;
  constructor(public navCtrl: NavController) {

  }

  searchByCategory($type){
  }

  welcome(){
    this.navCtrl.setRoot(WelcomePage);
  }

  openProfile(){
    this.navCtrl.push('ProfilePage');
  }

  openDetails(info){
    this.navCtrl.push('DetailPage');

  }
}
