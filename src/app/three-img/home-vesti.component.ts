import { Component, OnInit, Input } from '@angular/core';
import { Model } from 'app/shared/model.model';
import { MainService } from 'app/shared/main.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home-vesti',
  templateUrl: './home-vesti.component.html',
  styleUrls: ['../shared/root-css.css','./home-vesti.component.css']
})
export class HomeVestiComponent implements OnInit {

  @Input() startingData:String;
  @Input() article:Model[];

  constructor(private service:MainService) {}

  ngOnInit() {
    // this.subscription = this.service.articlesChanged.subscribe(
    //   response => {
    //     this.toDisplay = response.slice(0, 4);
    //   }
    // )
    // this.service.getArticleFromDatabase();    
  }

  ngOnDestroy(){
    // this.subscription.unsubscribe();
  }
}
