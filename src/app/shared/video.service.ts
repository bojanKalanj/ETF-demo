import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { VideoModel } from 'app/shared/video.model';

@Injectable()
export class VideoService{
    constructor(private http:Http) {}

    videos:VideoModel[] = [

    ]

    getVideos(){
        return this.videos.slice();
    }

    videoStringModifier(s:String){
        let videoId = s.slice(32, s.length);
        let embededString = 'https://www.youtube.com/embed/' + videoId + '?rel=0&amp;controls=0&amp;showinfo=0';
        console.log(embededString);
        return embededString;
    }

    storeVideosOnDb(videos:VideoModel[]){
        this.http.put('https://evotifilm-75e18.firebaseio.com/videos.json', videos).
            subscribe(
                response => {
                    console.log('videos stored', response.json());
                }
            )
    }

    getVideosFromDB(){
        return this.http.get('https://evotifilm-75e18.firebaseio.com/videos.json').
            map(
                response => {
                    const data = response.json();
                    return data;
                }
            )
    }


}