import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WelcomePage } from '../welcome/welcome';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  search:any=null;
  constructor(public navCtrl: NavController) {

  }

  searchByCategory($type){
  }

  welcome(){
    this.navCtrl.setRoot(WelcomePage);
  }
}
