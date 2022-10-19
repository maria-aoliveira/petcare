import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  public goToLogin(){
    this.router.navigate(['sign-in']);
  }

  public goToRegister(){
    this.router.navigate(['register-user']);
  }

}
