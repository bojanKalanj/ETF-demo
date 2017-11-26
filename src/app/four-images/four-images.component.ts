import { Component, OnInit, Input } from '@angular/core';
import { Model } from 'app/shared/model.model';

@Component({
  selector: 'app-four-images',
  templateUrl: './four-images.component.html',
  styleUrls: ['../shared/root-css.css','./four-images.component.css']
})
export class FourImagesComponent implements OnInit {

  constructor() { }

  @Input() articles:Model[];
  
  // toDisplay:Model[] = this.articles.slice(4, this.articles.length);

  toDisplay:Model[]
  ngOnInit() {
    this.toDisplay = this.articles.slice(0, 4);
  }

}
