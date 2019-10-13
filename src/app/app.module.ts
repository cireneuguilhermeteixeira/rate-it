import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';

import { WelcomePage } from '../pages/welcome/welcome';
//import {HeaderPage} from '../pages/header/header';

@NgModule({
  declarations: [
    MyApp,
    WelcomePage,
    //HeaderPage
  ],
  imports: [
    BrowserModule,
    //HeaderPage,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    WelcomePage,
    //HeaderPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ],
  exports:[
    //HeaderPage
  ]
})
export class AppModule {}
