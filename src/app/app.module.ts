import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgxUiLoaderModule } from 'ngx-ui-loader';

import { AppRoutingModule } from './app-routing.module';
//Rutas

//Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { APP_ROUTING } from './app.routes';
import { DetailviewComponent } from './components/detailview/detailview.component';
import { ImgfilterComponent } from './components/imgfilter/imgfilter.component';
import { CardimgComponent } from './components/shared/cardimg/cardimg.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GalleryComponent,
    DetailviewComponent,
    ImgfilterComponent,
    CardimgComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxUiLoaderModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

