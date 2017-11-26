import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['../shared/root-css.css','./header.component.css']
})
export class HeaderComponent implements OnInit {

  menuIsOn:boolean = false;
  headerMenu(){
    this.menuIsOn = !this.menuIsOn;
  }

  constructor() { }

  ngOnInit() {
  }

}
