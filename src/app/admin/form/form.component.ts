import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Model } from '../../shared/model.model';
import { MainService } from '../../shared/main.service'
import { NewsService } from 'app/shared/news-service';
import { RewievsService } from 'app/shared/rewievs-service.model';
import { VideoService } from 'app/shared/video.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(private service:MainService,
    private newsService:NewsService,
    private rewievsService:RewievsService) { }

  @Input()sectionTitle:String;

  newForm:Model;
  info:{}
  onSubmit(f:FormControl){
    this.info = new Object( {
      director: f.value.director,
      writers: f.value.writers,
      stars: f.value.stars,
    } )

    this.newForm = new Model(f.value.title, f.value.textArea, f.value.imgUrl, this.info);
    
    if(this.sectionTitle === 'Recenzije'){
      // this.newForm = new Model(f.value.title, f.value.textArea, f.value.imgUrl);
      // this.service.addArticle(this.newForm, this.sectionTitle);
      // console.log(this.service.rewievsArticles)
      this.rewievsArticles.unshift(this.newForm);
      this.rewievsService.storeRewievs(this.rewievsArticles);
    }else if(this.sectionTitle === 'Vesti'){
      this.newsArticles.unshift(this.newForm);
      this.newsService.storeArticlesOnDB(this.newsArticles);
    }
    
  }

  newsArticles:Model[];
  rewievsArticles:Model[];
  videos:String[];
  ngOnInit() {
    this.newsService.getNewsArticlesFromDB().subscribe(
      response => {
        this.newsArticles = response;
      }
    )
    this.rewievsService.getRewievsFromDB().subscribe(
      response => {
        this.rewievsArticles = response;
      }
    )
  }
}
