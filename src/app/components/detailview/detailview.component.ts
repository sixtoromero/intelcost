import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HitsModel } from '../../models/hits.model';
import { GalleryService } from 'src/app/services/gallery/gallery.service';
import { ActivatedRoute } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-detailview',
  templateUrl: './detailview.component.html'
})
export class DetailviewComponent implements OnInit {

  gallery = new HitsModel();
  id: number;
  
  
  constructor(public galleryService: GalleryService,
              private ngxService: NgxUiLoaderService,
              activateRoute: ActivatedRoute) {

                activateRoute.params.subscribe(params => {
                  this.id = +params['id'];
                });
  }

  async ngOnInit() {
    this.ngxService.start();
    const result = await this.galleryService.getGalleryById(this.id);
    this.gallery = result[0];
    this.ngxService.stop();
  }

}
