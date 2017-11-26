import { Injectable, Pipe } from '@angular/core';
import { DomSanitizer } from "@angular/platform-browser";

@Pipe({
    name: 'video'
})
@Injectable()

export class VideoPipe{

    constructor(private dom: DomSanitizer){}

    transform(value, args){
        console.log(value);

        return this.dom.bypassSecurityTrustResourceUrl(value); 
    }
}