import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { HitsModel } from 'src/app/models/hits.model';
import { GalleryService } from '../../services/gallery/gallery.service';

@Component({
  selector: 'app-imgfilter',
  templateUrl: './imgfilter.component.html',
  styles: []
})
export class ImgfilterComponent implements OnInit {

  filter: string;
  galleries: HitsModel[] = [];
  
  constructor(private galleryService: GalleryService,
              private activateRoute: ActivatedRoute,
              private router: Router) {
  }

  async ngOnInit() {
    this.activateRoute.params.subscribe(params => {
      this.filter = params['text'];
      let sfilter = params['text'].split('|');
      this.filter = sfilter[0];
      if (sfilter[1] === 'category') {
        this.getGalleryByText(this.filter);
      } else {
        this.getGalleryByCategory(this.filter);
      }
    });
  }

  async getGalleryByText(text: string) {
    this.galleries = await this.galleryService.getGalleryByText(text.toLocaleLowerCase()) as Array<HitsModel>;
    console.log('Desde el filtro', this.galleries);
  }

  async getGalleryByCategory(category: string) {
    this.galleries = await this.galleryService.getGalleryByText(category) as Array<HitsModel>;
    console.log('Desde el filtro', this.galleries);
  }

  detailView(id: number) {
    this.router.navigate(['/detailview', id]);
  }

}
