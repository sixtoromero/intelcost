import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { DetailviewComponent } from './components/detailview/detailview.component';
import { ImgfilterComponent } from './components/imgfilter/imgfilter.component';

const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'gallery', component: GalleryComponent},
    { path: 'detailview/:id', component: DetailviewComponent},
    { path: 'imgfilter/:text', component: ImgfilterComponent},
    { path: '**', component: HomeComponent }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash: true });
