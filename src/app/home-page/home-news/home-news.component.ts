import { Component, OnInit } from '@angular/core';
import { MainService } from 'app/shared/main.service';
import { Model } from 'app/shared/model.model';
import { NewsService } from 'app/shared/news-service';

@Component({
  selector: 'app-home-news',
  templateUrl: './home-news.component.html',
  styleUrls: ['./home-news.component.css']
})
export class HomeNewsComponent implements OnInit {

  startingData:String[] = [
    'Vesti', '/vesti'
   ]

  constructor(private newsService: NewsService) { }

  article:Model[];
  ngOnInit() {
    this.newsService.getNewsArticlesFromDB().
    subscribe(
      response => {
        this.article = response.slice(0, 4);
      }
    )
  }

}
