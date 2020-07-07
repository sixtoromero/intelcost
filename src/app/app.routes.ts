import { Routes, RouterModule } from '@angular/router';
import { GalleryComponent } from './components/gallery/gallery.component';
import { DetailviewComponent } from './components/detailview/detailview.component';
import { ImgfilterComponent } from './components/imgfilter/imgfilter.component';

const APP_ROUTES: Routes = [
    { path: 'gallery', component: GalleryComponent},
    { path: 'detailview/:id', component: DetailviewComponent},
    { path: 'imgfilter/:text', component: ImgfilterComponent},
    { path: '**', component: GalleryComponent }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash: true });
