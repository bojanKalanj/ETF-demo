import { Component, OnInit } from '@angular/core';
import { VideoService } from 'app/shared/video.service';
import { VideoModel } from 'app/shared/video.model';

@Component({
  selector: 'app-video-section',
  templateUrl: './video-section.component.html',
  styleUrls: ['../shared/root-css.css','./video-section.component.css']
})
export class VideoSectionComponent implements OnInit {

  constructor(private videoService:VideoService) { }

  videos:VideoModel[];
  ngOnInit() {
    this.videoService.getVideosFromDB().subscribe(
      response => {
        this.videos = response;
      }
    )
  }

  selectedVideo:VideoModel;
  onVideoSelected(video:VideoModel){
    this.selectedVideo = video;
  }

}
