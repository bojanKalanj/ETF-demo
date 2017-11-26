export class Model{
    title:String;
    imgUrl:String;
    description:String;
    info:{} = {
        director:String,
        writers:String,
        stars:String
    };

    constructor(title:String, desc:String, imgUrl:String, info?:{}){
        this.title = title;
        this.imgUrl = imgUrl;
        this.description = desc;
        this.info = info;
    }
    
}