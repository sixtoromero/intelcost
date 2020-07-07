import { Component, OnInit } from '@angular/core';
import { GalleryService } from 'src/app/services/gallery/gallery.service';
import { GalleryModel } from '../../models/gallery.model';
import { HitsModel } from 'src/app/models/hits.model';
import { Router } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styles: []
})
export class GalleryComponent implements OnInit {

  galleries: HitsModel[] = [];

  constructor(public galleryService: GalleryService,
              private ngxService: NgxUiLoaderService,
              private router: Router) { }

  async ngOnInit() {
    this.ngxService.start();
    this.galleries = await this.galleryService.getGalleryAll() as Array<HitsModel>;
    this.ngxService.stop();
  }

  detailView(id: number) {
    this.router.navigate(['/detailview', id]);
  }

}
