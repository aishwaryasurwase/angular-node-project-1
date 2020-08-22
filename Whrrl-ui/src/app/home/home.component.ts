import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public authenticationService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  facebookAuth(){
    console.log(this.authenticationService.FacebookAuth());
    // this.router.navigate(['/dashboard']);
  }
  
  googleAuth(){
    console.log(this.authenticationService.GoogleAuth());
    // this.router.navigate(['/dashboard']);
  }
  
}
