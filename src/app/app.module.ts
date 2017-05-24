import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';

/* add this to handle security
import { AuthService } from './auth.service';*/

// import firebase
/*import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';*/
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';

import { AppRoutingModule } from './app-routing.module';

import { PlayerService } from './players/player.service';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth-guard.service';
import { StaffService } from './staff/staff.service';


import { PlayersComponent } from './players/players.component';
import { AddPlayerComponent } from './players/add-player/add-player.component';
import { ShowPlayerComponent } from './players/show-player/show-player.component';
import { ImportPlayersComponent } from './players/import-players/import-players.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';
import { ListPlayersComponent } from './players/list-players/list-players.component';
import { StaffComponent } from './staff/staff.component';

import { MaterialModule, MdInputModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


export const firebaseConfig = {
  apiKey: "AIzaSyD9XWyxtFCHwXi2vFLyoy-cVGT8Xd64A_I",
  authDomain: "sokker-ntdb.firebaseapp.com",
  databaseURL: "https://sokker-ntdb.firebaseio.com"
};

@NgModule({
  declarations: [
    AppComponent,
    PlayersComponent,
    AddPlayerComponent,
    ShowPlayerComponent,
    ImportPlayersComponent,
    HomeComponent,
    PageNotFoundComponent,
    LoginComponent,
    ListPlayersComponent,
    ImportPlayersComponent,
    ShowPlayerComponent,
    StaffComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    MaterialModule,
    MdInputModule,
    BrowserAnimationsModule
  ],
  providers: [AuthService, AuthGuard, PlayerService, StaffService],
  bootstrap: [AppComponent]
})
export class AppModule { }
