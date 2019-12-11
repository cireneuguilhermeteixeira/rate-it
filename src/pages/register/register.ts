import { Component } from '@angular/core';
import { NavController, ToastController,LoadingController, AlertController, ActionSheetController, IonicPage } from 'ionic-angular';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthProvider } from '../../providers/auth.provider';
import { ErrorChecker } from '../../util/error-checker';


@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})


export class RegisterPage {

  registerForm = new FormGroup({
    first_name: new FormControl('',[Validators.required]),
    last_name: new FormControl('',[Validators.required]),
    username: new FormControl('',[Validators.required]),
    phone: new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.required,Validators.email]),
    password: new FormControl('',[Validators.required]),
    confirmPassword: new FormControl('',[Validators.required]),

  });


  constructor(
   
    public navCtrl: NavController,
    public actionSheetController: ActionSheetController,
    public loadingController: LoadingController,
    public alertController: AlertController,
    public authProvider: AuthProvider,
    public toastCtrl: ToastController
  ) {
  }


  comparePass():boolean{
    if(this.registerForm.get('password').value=='' ||  this.registerForm.get('confirmPassword').value==''){
      return true;
    }
    if(this.registerForm.get('password').value ===this.registerForm.get('confirmPassword').value){
      return true;
    }else{
      return false;
    }
  }

  register(){
    const loading = this.loadingController.create({
      content: 'Buscando ',
    })
    loading.present()
    this.authProvider.register(this.registerForm.value)
    .then(resp=>{
      if(resp==[]){
        this.authProvider.login(this.registerForm.value)
        .then(resp =>{
          this.saveUserLocalStorage(resp);
          this.navCtrl.push('HomePage');
        })
      }else{
        ErrorChecker.getErrorMessage('Já existe um usuário com esse email ou nick.',null, this.toastCtrl)
      }
      loading.dismiss();
    })
    .catch(erro=>{
      ErrorChecker.getErrorMessage('Erro interno ao tentar se registrar.',erro, this.toastCtrl)
      loading.dismiss();

    })
  }

  saveUserLocalStorage(user){
    localStorage.setItem('id',user.id);
    localStorage.setItem('username',user.username);
    localStorage.setItem('name',user.first_name+' '+user.last_name);

  }

}
