import { Component, OnInit } from '@angular/core';
import { Model } from 'app/shared/model.model';
import { Response } from '@angular/http'
import { NewsService } from 'app/shared/news-service';

@Component({
  selector: 'app-news',
  templateUrl: '../review/rewievs.component.html',
  styleUrls: ['../shared/root-css.css','../review/rewievs.component.css']
})
export class NewsComponent implements OnInit {

  constructor(private newsService: NewsService) { }

  articles:Model[];
  
  ngOnInit() {
    this.newsService.getNewsArticlesFromDB().
      subscribe(
        response => {
          this.articles = response;
        }
      )    
  }

}
