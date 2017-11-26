import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-recenzije',
  templateUrl: './admin-recenzije.component.html',
  styleUrls: ['./admin-recenzije.component.css']
})
export class AdminRecenzijeComponent implements OnInit {

  title:String = 'Recenzije';

  constructor() { }

  ngOnInit() {
  }

}
