import { Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subscriber } from 'rxjs/Subscriber';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable()
export class AuthService implements OnInit {
  user: Observable<firebase.User>;
  items: FirebaseListObservable<any[]>;
  msgVal: string = '';
  private token: string;

  constructor(private afAuth: AngularFireAuth, private db: AngularFireDatabase, private router: Router) {
    this.user = afAuth.authState;
  }

  ngOnInit() {
    this.afAuth.auth.currentUser.getToken()
      .then(
      response => {
        this.afAuth.auth.currentUser.getToken()
          .then(
          (token: string) => this.token = token
          )
      }
      )
      .catch(
      error => console.log(error)
      );
  }

  loginGoogle() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then(
      response => {
        this.afAuth.auth.currentUser.getToken()
          .then(
          (token: string) => this.token = token
          )
      }
      )
      .catch(
      error => console.log(error)
      );
  }

  signupUser(email: string, password: string) {
    this.afAuth.auth.createUserWithEmailAndPassword(email, password)
      .catch(
      error => console.log(error)
      )
  }

  signinUser(email: string, password: string) {
    this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then(
      response => {
        firebase.auth().currentUser.getToken()
          .then(
          (token: string) => this.token = token
          )
      }
      )
      .catch(
      error => console.log(error)
      );
  }

  logout() {
    this.afAuth.auth.signOut();
    this.token = null;
  }

  getUser() {
    return this.user;
  }

  isAuthenticated() {
    if (this.token != null)
      return true;
    else
      return false;
  }
}
