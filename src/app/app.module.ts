import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomePageComponent } from './home-page/home-page.component';
import { MainPictureComponent } from './main-picture/main-picture.component';
import { HomeVestiComponent } from './three-img/home-vesti.component';
import { FooterComponent } from './footer/footer.component';
import { SideSocialComponent } from './side-social/side-social.component';
import { ColumnComponent } from './column/column.component';
import { MainService } from 'app/shared/main.service';
import { RewievsComponent } from './review/rewievs.component';
import { RoutingModule } from 'app/app-routing.module';
import { VideCardComponent } from './vide-card/vide-card.component';
import { LoginComponent } from './login/login.component';
import { HomeRewievsComponent } from './home-page/home-rewievs/home-rewievs.component';
import { HomeNewsComponent } from './home-page/home-news/home-news.component';
import { HomeVideosComponent } from './home-page/home-videos/home-videos.component';
import { FourImagesComponent } from './four-images/four-images.component';
import { DetailComponent } from './detail/detail.component';
import { NewsComponent } from './news/news.component';
import { AdminComponent } from './admin/admin.component';
import { AdminVestiComponent } from './admin/admin-vesti/admin-vesti.component';
import { AdminRecenzijeComponent } from './admin/admin-recenzije/admin-recenzije.component';
import { FormComponent } from './admin/form/form.component';
import { NewsService } from 'app/shared/news-service';
import { RewievsService } from 'app/shared/rewievs-service.model';
import { VideoSectionComponent } from './video-section/video-section.component';
import { VideoRowComponent } from './video-section/video-row/video-row.component';
import { DetailVideoComponent } from './video-section/detail-video/detail-video.component';
import { VideoService } from 'app/shared/video.service';
import { AdminVideoComponent } from './admin/admin-video/admin-video.component';
import { VideoFormComponent } from './admin/admin-video/video-form/video-form.component';
import { LargeVideoComponent } from './video-section/large-video/large-video.component';
import { VideoPipe } from 'app/shared/video.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomePageComponent,
    MainPictureComponent,
    HomeVestiComponent,
    FooterComponent,
    SideSocialComponent,
    ColumnComponent,
    RewievsComponent,
    VideCardComponent,
    LoginComponent,
    HomeRewievsComponent,
    HomeNewsComponent,
    HomeVideosComponent,
    FourImagesComponent,
    DetailComponent,
    NewsComponent,
    AdminComponent,
    AdminVestiComponent,
    AdminRecenzijeComponent,
    FormComponent,
    VideoSectionComponent,
    VideoRowComponent,
    DetailVideoComponent,
    AdminVideoComponent,
    VideoFormComponent,
    LargeVideoComponent,
    VideoPipe
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [MainService, NewsService, RewievsService, VideoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
