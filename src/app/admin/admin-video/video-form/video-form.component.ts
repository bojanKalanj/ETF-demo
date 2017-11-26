import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { VideoService } from 'app/shared/video.service';
import { Model } from 'app/shared/model.model';
import { VideoModel } from 'app/shared/video.model';

@Component({
  selector: 'app-video-form',
  templateUrl: './video-form.component.html',
  styleUrls: ['../../../shared/root-css.css','./video-form.component.css']
})
export class VideoFormComponent implements OnInit {

  constructor(private videoService:VideoService) { }

  onSubmitVideo(f: FormGroup){
    let newVideo = new VideoModel(
      f.value.title,
      f.value.img,
      this.videoService.videoStringModifier(f.value.url),
      f.value.desc
    )
    this.videosFromDB.unshift(newVideo);
    this.videoService.storeVideosOnDb(this.videosFromDB);
  }

  videosFromDB:VideoModel[];
  ngOnInit() {
    this.videoService.getVideosFromDB().subscribe(
      response => {
        this.videosFromDB = response;
      }
    )
  }

}
