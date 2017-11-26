import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['../shared/root-css.css','./admin.component.css']
})
export class AdminComponent implements OnInit {

  choseNews:boolean = true;
  choseRewievs:boolean = false;
  choseVideos:boolean = false;  
  
  choseSection(s:String){
    if(s === 'vesti'){
      this.choseNews = true;
      this.choseRewievs = false;
      this.choseVideos = false;
    }else if(s === 'recenzije'){
      this.choseNews = false;
      this.choseRewievs = true;
      this.choseVideos = false;      
    }else{
      this.choseNews = false;
      this.choseRewievs = false;
      this.choseVideos = true; 
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
