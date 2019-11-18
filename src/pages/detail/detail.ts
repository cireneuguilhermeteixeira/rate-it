import { Component } from '@angular/core';
import { NavController, IonicPage, NavParams } from 'ionic-angular';
import { WelcomePage } from '../welcome/welcome';
import { Movie } from '../../model/movie';

@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html'
})
export class DetailPage {

  items = [
    {
      "name": "Burt Bear",
      "profilePic": "assets/imgs/speakers/bear.jpg",
      "about": "Burt is a Bear."
    },
    {
      "name": "Charlie Cheetah",
      "profilePic": "assets/imgs/speakers/cheetah.jpg",
      "about": "Charlie is a Cheetah."
    },
    {
      "name": "Donald Duck",
      "profilePic": "assets/imgs/speakers/duck.jpg",
      "about": "Donald is a Duck."
    },
    {
      "name": "Eva Eagle",
      "profilePic": "assets/imgs/speakers/eagle.jpg",
      "about": "Eva is an Eagle."
    },
    {
      "name": "Ellie Elephant",
      "profilePic": "assets/imgs/speakers/elephant.jpg",
      "about": "Ellie is an Elephant."
    },
    {
      "name": "Molly Mouse",
      "profilePic": "assets/imgs/speakers/mouse.jpg",
      "about": "Molly is a Mouse."
    },
    {
      "name": "Paul Puppy",
      "profilePic": "assets/imgs/speakers/puppy.jpg",
      "about": "Paul is a Puppy."
    }
  ];
  commentsVisible:boolean = false;
  search:any=null;
  currentMovie:Movie;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,

    ) {

  }

  ionViewWillEnter() {
    this.currentMovie = this.navParams.get('movie')
  }

  welcome(){
    this.navCtrl.setRoot(WelcomePage);
  }

  openProfile(user){
    this.navCtrl.push('ProfilePage');
  }

  showComents(){
    this.commentsVisible = true;
  }

  hideComents(){
    this.commentsVisible = false;

  }
}
