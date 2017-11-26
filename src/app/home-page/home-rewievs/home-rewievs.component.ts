import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Model } from 'app/shared/model.model';
import { Subscription } from 'rxjs';
import { Response } from '@angular/http';
import { RewievsService } from 'app/shared/rewievs-service.model';

@Component({
  selector: 'app-home-rewievs',
  templateUrl: './home-rewievs.component.html',
  styleUrls: ['../../shared/root-css.css','./home-rewievs.component.css']
})
export class HomeRewievsComponent implements OnInit {

  @Output() articleEmitter: EventEmitter<Model[]> = new EventEmitter();
  

  startingData:String[] = [
   'Recenzije', '/recenzije'
  ]

  constructor(private rewievsService: RewievsService) {
    // this.service.getArticlesFromDB().subscribe(
    //   (response) => { 
    //     this.article = response
    //     console.log('from home-rewievs', this.article)
    //    }
    // ) 
   }

  article:Model[];
  ngOnInit() {
    this.rewievsService.getRewievsFromDB().
      subscribe(
        response => {
          this.article = response.slice(0, 4);
        }
      )
    // this.subscription = this.service.articlesChanged.
    //   subscribe(
    //     (articles:Model[]) =>{
    //       this.article = articles;
    //     }
    //   )
    // this.article = this.service.getArticles('recenzije', 4);  
    // this.service.getArticlesFromDB().subscribe(
    //   (response) => { 
    //     this.article = response
    //     console.log('from home-rewievs', this.article)
    //    }
    // )  


    // this.service.getArticlesFromDB().subscribe(
    //   data => {
    //     this.article = data;
    //     console.log('kurac palac',this.article)
    //   }
    // )
  }

}
