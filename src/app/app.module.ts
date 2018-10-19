import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { SigninPageModule } from '../pages/signin/signin.module';
import { RoomPageModule } from '../pages/room/room.module';
import { AddRoomPageModule } from '../pages/add-room/add-room.module';
import { ContasPageModule } from '../pages/contas/contas.module';
import { ContasAddPageModule } from '../pages/contas-add/contas-add.module';
import { LoginPageModule } from '../pages/login/login.module';

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    SigninPageModule,
    RoomPageModule,
    AddRoomPageModule,
    ContasPageModule,
    ContasAddPageModule,
    LoginPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
