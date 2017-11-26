import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Model } from 'app/shared/model.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../shared/root-css.css','./login.component.css']
})
export class LoginComponent implements OnInit {

  signinMode:boolean = true;
  onSignIn(s:String){
    if(s === 'signIn'){
      this.signinMode = true;
    }else{
      this.signinMode = false;
    }
  }

  newArticle:Model[]
  onSubmit(f: FormControl){
    console.log(f)
  }

  constructor() { }

  ngOnInit() {
  }

}
