import { Component, OnInit, Input } from '@angular/core';
import { MainService } from 'app/shared/main.service';
import { Model } from 'app/shared/model.model';

@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['../shared/root-css.css','./column.component.css']
})
export class ColumnComponent implements OnInit {

  share:boolean[] = [];

  onShare(index:number){
    for(let i = 0; i < this.articles.length; i++){
      let shareBoolean = new Array(i);
      this.share.push(shareBoolean[i] = false);    
    }
    this.share[index] = !this.share[index];
  }

  constructor() {
   
   }

  @Input() articles:Model[];
  // toDisplay:Model[] = this.articles.slice(4, this.articles.length);

  toDisplay:Model[]
  ngOnInit() {
    this.toDisplay = this.articles.slice(4, this.articles.length);
  }

}
