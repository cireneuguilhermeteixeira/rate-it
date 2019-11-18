import { Component, ViewChild, Input } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { WelcomePage } from '../welcome/welcome';
import { HeaderPage } from '../header/header';
import { MovieProvider } from '../../providers/movie.provider';
import { ErrorChecker } from '../../util/error-checker';
import { ToastController } from 'ionic-angular';
import { Movie } from '../../model/movie';


@IonicPage()
@Component({
  
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild("header") public headerComponent: HeaderPage;
  popularsMovie:Array<Movie>;
  search:any=null;
  constructor(
    public navCtrl: NavController,
    public movieProvider: MovieProvider,
    public toastCtrl: ToastController,

    ) {

  }

  ionViewWillEnter() {
    this.getPopular();
  }

  getPopular(){
    this.movieProvider.getPopular()
    .then(resp=>{
      console.log(resp);
      
      this.popularsMovie = resp.results;
    })
    .then(()=>{
      this.popularsMovie.forEach(movie => {
        this.movieProvider.getPathImage(movie.id)
        .then(path=>{
          movie.pathPoster = path;
        })
      })
    })
    .catch(error => ErrorChecker.getErrorMessage('Erro ao tentar obter informações dos filmes populares',error, this.toastCtrl))

  }

  searchByCategory($type){
  }

  welcome(){
    this.navCtrl.setRoot(WelcomePage);
  }

  openProfile(){
    this.navCtrl.push('ProfilePage');
  }

  openDetails(movie){
    this.navCtrl.push('DetailPage',movie);

  }
}
