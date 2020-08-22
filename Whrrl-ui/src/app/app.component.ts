import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

// Client ID
// 625113723468-ltoemii4okcqsrdj9f232lu8340g332p.apps.googleusercontent.com
// Client secret
// jXv_DkzFlua-gYMNvBm4_Ilc

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Whrrl';

  constructor(public authenticationService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  facebookAuth(){
    console.log(this.authenticationService.FacebookAuth());
    this.router.navigate(['/dashboard']);
  }
  
  googleAuth(){
    console.log(this.authenticationService.GoogleAuth());
    this.router.navigate(['/dashboard']);
  }
  
}
