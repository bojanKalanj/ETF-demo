import { Component, OnInit, Inject } from '@angular/core';

import { Model } from 'app/shared/model.model';
import { RewievsService } from 'app/shared/rewievs-service.model';
import { NewsService } from 'app/shared/news-service';
import { ActivatedRoute, Params } from '@angular/router';
import { HostListener} from "@angular/core";
import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['../shared/root-css.css','./detail.component.css']
})
export class DetailComponent implements OnInit {

  constructor(private rewievsService:RewievsService,
              private newsService:NewsService,
              private route:ActivatedRoute,
              @Inject(DOCUMENT) private document: Document  ) { }

  rightArticle:Model;
  title:String;
  ngOnInit() { 
    this.route.params.subscribe(
      (params:Params) => {
        this.title = params['title'];
      }
    )

    this.rewievsService.getRewievsFromDB().
      subscribe(
        response => {
          for(let res of response){
            if(res.title === this.title){
              this.rightArticle = res;
            }
          }
        },
      )
      this.newsService.getNewsArticlesFromDB().
        subscribe(
          response => {
            for(let res of response){
              if(res.title === this.title){
                this.rightArticle = res;
              }
            }
          },
        )
  }

  @HostListener("window:scroll", [])
  
  onWindowScroll() {
    let scroll = window.pageYOffset;
    console.log('scrolling', scroll);
    //we'll do some stuff here when the window is scrolled
   }
}
