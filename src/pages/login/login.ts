import { Component } from '@angular/core';
import { IonicPage, NavController, ToastController, LoadingController } from 'ionic-angular';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthProvider } from '../../providers/auth.provider';
import { ErrorChecker } from '../../util/error-checker';

@IonicPage()
@Component({
  selector: 'login',
  templateUrl: 'login.html'
})

export class LoginPage {

  loginForm = new FormGroup({
    email: new FormControl('',[Validators.required,Validators.email]),
    password: new FormControl('',[Validators.required])
  });



  constructor(
    public toastCtrl: ToastController,
    public navCtrl: NavController,
    public authProvider: AuthProvider,
    public loadingController: LoadingController,

  ) {
  }

  register(){
    this.navCtrl.push('RegisterPage');
  }

 

  login(){
    const loading = this.loadingController.create({
      content: 'Logando',
    })
    loading.present()
    this.authProvider.login(this.loginForm.value)
    .then(resp=>{
      if(resp){
        this.saveUserLocalStorage(resp);
        this.navCtrl.push('HomePage');
      }else{
        ErrorChecker.getErrorMessage('Credenciais inválidas.',null, this.toastCtrl)
      }
    })
    .then(()=>loading.dismiss())
    .catch(erro=>{
      ErrorChecker.getErrorMessage('Erro interno ao tentar logar.',erro, this.toastCtrl)
      loading.dismiss();

    })
  }


  saveUserLocalStorage(resp){
    
    localStorage.setItem('id',resp.id);
    localStorage.setItem('username',resp.username);
    localStorage.setItem('name',resp.first_name+' '+resp.last_name);
  }

}
