export class VideoModel{
    title:       String;
    video:       String;
    description: String;
    img:         String;

    constructor(title:String, img:String, video:String, desc:String){
        this.title = title;
        this.video = video;
        this.description = desc;
        this.img = img;
    }
    
}