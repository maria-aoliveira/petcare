import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../shared/services/auth.service";
import { Location } from '@angular/common';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(
    public authService: AuthService,
    private location: Location
  ) { }

  public loginGoogle(){
    this.authService.GoogleAuth().then(res=>{
      location.reload()
    })
  }

  ngOnInit() { }
}
