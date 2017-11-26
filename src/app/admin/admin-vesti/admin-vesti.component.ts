import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-vesti',
  templateUrl: './admin-vesti.component.html',
  styleUrls: ['./admin-vesti.component.css']
})
export class AdminVestiComponent implements OnInit {

  title:String = 'Vesti';  
  
  constructor() { }

  ngOnInit() {
  }

}
