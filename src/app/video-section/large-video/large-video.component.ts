import { Component, OnInit, Input } from '@angular/core';
import { VideoModel } from 'app/shared/video.model';

@Component({
  selector: 'app-large-video',
  templateUrl: './large-video.component.html',
  styleUrls: ['../../shared/root-css.css','./large-video.component.css']
})
export class LargeVideoComponent implements OnInit {

  constructor() { }

  @Input()selectedVideo:VideoModel;

  ngOnInit() {
  }

}
