import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { VideoModel } from 'app/shared/video.model';

@Component({
  selector: 'app-video-row',
  templateUrl: './video-row.component.html',
  styleUrls: ['../../shared/root-css.css','./video-row.component.css']
})
export class VideoRowComponent implements OnInit {

  constructor() { }

  @Input() videos:String[];  
  toDisplay:String[];

  ngOnInit() {
  this.toDisplay = this.videos.slice(0, 4);  
  }

  @Output() video:EventEmitter<VideoModel> = new EventEmitter();
  cardClicked(video:VideoModel){
    this.video.emit(video);
  }

}
