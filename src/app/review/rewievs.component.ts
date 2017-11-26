import { Component, OnInit } from '@angular/core';
import { Model } from 'app/shared/model.model';
import { Response } from '@angular/http'
import { Subscription } from 'rxjs';
import { RewievsService } from 'app/shared/rewievs-service.model';

@Component({
  selector: 'app-rewievs',
  templateUrl: './rewievs.component.html',
  styleUrls: ['../shared/root-css.css','./rewievs.component.css']
})
export class RewievsComponent implements OnInit {

  constructor(private rewievsService: RewievsService) { }

  articles:Model[];
 
  ngOnInit() {
     this.rewievsService.getRewievsFromDB().
      subscribe(
        response => {
          this.articles = response;
        }
      )
    }
    
}
