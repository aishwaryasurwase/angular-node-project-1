import { Injectable } from '@angular/core';
import { auth } from 'firebase/app';
import { AngularFireAuth } from "@angular/fire/auth";
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public afAuth: AngularFireAuth, private router: Router) { }
  FacebookAuth() {
    return this.AuthLogin(new auth.FacebookAuthProvider());
  }

  GoogleAuth() {
    return this.AuthLogin(new auth.GoogleAuthProvider());
  }

  AuthLogin(provider) {
    return this.afAuth.signInWithPopup(provider)
      .then(result => {
        console.log('You have been successfully logged in!');
        this.router.navigate(['/dashboard']);
      }).catch((error) => {
        console.log(error)
      })
  }
}
