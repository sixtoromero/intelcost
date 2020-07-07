import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { HitsModel } from 'src/app/models/hits.model';
import { GalleryService } from '../../services/gallery/gallery.service';
@Component({
  selector: 'app-imgfilter',
  templateUrl: './imgfilter.component.html',
  styles: []
})
export class ImgfilterComponent implements OnInit {

  ///Variable que permite recibir el filtro enviado por parametro
  filter: string;
  ///Es una lista definida para recibir la información consultada en la api.
  galleries: HitsModel[] = [];
  
  constructor(private galleryService: GalleryService,
              private activateRoute: ActivatedRoute,
              private ngxService: NgxUiLoaderService,
              private router: Router) {
  }

  ///En el OnInit se recibe el parámetro y se consulta sea por categoría o por el texto ingresado por el usuario.
  async ngOnInit() {
    this.ngxService.start();
    this.activateRoute.params.subscribe(params => {
      this.filter = params['text'];
      let sfilter = params['text'].split('|');
      this.filter = sfilter[0];
      if (sfilter[1] === 'category') {
        this.getGalleryByText(this.filter);
      } else {
        this.getGalleryByCategory(this.filter);
      }
      this.ngxService.stop();
    });
  }

  ///Método que devuelve la lista de galería filtrada por el usuario.
  async getGalleryByText(text: string) {
    this.galleries = await this.galleryService.getGalleryByText(text.toLocaleLowerCase()) as Array<HitsModel>;
  }

  ///Método que devuelve la lista de galería filtrada por la categoría seleccionada.
  async getGalleryByCategory(category: string) {
    this.galleries = await this.galleryService.getGalleryByText(category) as Array<HitsModel>;
  }

  ///Evento que se emite para navegar al detalle de la vista de la imagen.
  detailView(id: number) {
    this.router.navigate(['/detailview', id]);
  }

}
