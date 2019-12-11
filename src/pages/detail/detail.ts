import { Component } from '@angular/core';
import { NavController, IonicPage, NavParams, AlertController } from 'ionic-angular';
import { WelcomePage } from '../welcome/welcome';
import { Movie } from '../../model/movie';
import { MovieProvider } from '../../providers/movie.provider';

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
  movieId;
  teste = '../assets/imgs/splashbg.png'
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public movieProvider: MovieProvider,
    public alertCtrl: AlertController

    ) {

  }

  ionViewWillEnter() {

    this.movieId = this.navParams.get('movieId');
    //this.currentMovie = this.navParams.get('movie')
    if(this.movieId) {
      this.movieProvider.getById(this.movieId)
      .then(movie=>{
        this.currentMovie = movie;
        this.currentMovie.pathPoster = this.navParams.get('pathPoster');
      })
    }else{
      this.navCtrl.setRoot(WelcomePage)
    }
    
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



  avaliar(){

    this.alertCtrl.create({
      title: 'Avaliando...',
      message: 'Que nota você daria para esse filme de 0 a 10?',
      inputs:[
        {
          type:'number',
          name:'avaliar',
          min:'0',
          max:'10'
        }
      ],
      buttons: [
        {
          text: 'Avaliar',
          handler: data => {          
            if(data.avaliar>10){
              data.avaliar = 10;
            }  
            if(data.avaliar < 0){
              data.avaliar = 0;
            }
            this.movieProvider.avaliar({
              movie_id:this.movieId,
              user_id:localStorage.getItem('id'),
              rating: data.avaliar
            })
            .then(()=>this.ionViewWillEnter())
          }
        },
        {
          text: 'Cancelar',
          handler: () => {}
        }
    ]

    }).present();
  }

  
}
