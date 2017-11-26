import { Component, OnInit } from '@angular/core';
import { Model } from 'app/shared/model.model';
import { NewsService } from 'app/shared/news-service';

@Component({
  selector: 'app-main-picture',
  templateUrl: './main-picture.component.html',
  styleUrls: ['../shared/root-css.css','./main-picture.component.css']
})
export class MainPictureComponent implements OnInit {

  constructor(private newsService:NewsService) { }

  newest:Model;
  ngOnInit() {
    console.log('main-picture');  
    console.log(this.newest);
    
    this.newsService.newest.subscribe(
      response => {
        this.newest = response
        console.log(this.newest);
      }
    )
  }

}
