import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePageComponent } from './home-page/home-page.component';
import { RewievsComponent } from './review/rewievs.component';
import { LoginComponent } from './login/login.component';
import { DetailComponent } from './detail/detail.component';
import { NewsComponent } from './news/news.component';
import { AdminComponent } from './admin/admin.component';
import { VideoSectionComponent } from 'app/video-section/video-section.component';
import { DetailVideoComponent } from 'app/video-section/detail-video/detail-video.component';

// const appRoutes: Routes = [
//     { path: '', redirectTo: '/pocetna', pathMatch: 'full' },    
//     { path: 'pocetna', component: HomePageComponent },
//     { path: 'recenzije', component: RewievsComponent }    
// ]

const appRoutes: Routes = [
    { path: '', redirectTo: '/pocetna', pathMatch: 'full' },    
    { path: 'pocetna', component: HomePageComponent },
    { path: 'recenzije', component: RewievsComponent },
    { path: 'recenzije/:title', component: DetailComponent },  
    { path: 'vesti', component: NewsComponent },    
    { path: 'vesti/:title', component: DetailComponent }, 
    { path: 'video', component: VideoSectionComponent },        
    { path: 'video/:title', component: DetailVideoComponent },            
    { path: 'login', component: LoginComponent },
    { path: 'admin', component: AdminComponent },    
    
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class RoutingModule{
  
}