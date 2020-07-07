import { Injectable, EventEmitter, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { BaseService } from '../_base.service';

import { APIENDPOINT } from '../../config/configuration';
import { GalleryModel } from 'src/app/models/gallery.model';

@Injectable({
    providedIn: 'root'
  })
  export class GalleryService extends BaseService<GalleryModel> {
      constructor(protected http: HttpClient) {
            super(http, environment.apiGatewayURL);
      }

      ///Método encargado de listar todas las imágenes por la api definida en el environment
      ///Retorna: Retorna una promesa en la cual le especifíco una lista de tipo hits
      getGalleryAll() {        
        return new Promise( resolve => {
          this.get('')
            .subscribe(resp => {
              if (resp.IsSuccess) {
                resolve(resp.Data.hits);
              } else {
                resolve(null);
                console.log('Mostrar alerta de error');
              }
            }, error => {
              resolve(null);
              console.log('Mostrar alerta de error');
              return null;
            });
        });
      }

      ///Método encargado de listar una imagen filtrada por el usuario
      ///Retorna: Retorna una promesa en la cual le especifíco un registro de tipo hits
      getGalleryById(id: number) {
        return new Promise( resolve => {
          this.get(APIENDPOINT.getgallerybyid + id)
            .subscribe(resp => {
              if (resp.IsSuccess) {
                resolve(resp.Data.hits);
              } else {
                resolve(null);
                console.log('Mostrar alerta de error');
              }
            }, error => {
              resolve(null);
              console.log('Mostrar alerta de error');
              return null;
            });
        });
      }

      ///Método encargado de listar todas las imágenes que correspondan al filtro aplicado
      ///Retorna: Retorna una promesa en la cual le especifíco una lista de tipo hits
      getGalleryByText(text: string) {
        return new Promise( resolve => {
          this.get(APIENDPOINT.getgallerybytext + text)
            .subscribe(resp => {
              if (resp.IsSuccess) {
                resolve(resp.Data.hits);
              } else {
                resolve(null);
                console.log('Mostrar alerta de error');
              }
            }, error => {
              resolve(null);
              console.log('Mostrar alerta de error');
              return null;
            });
        });
      }

      ///Método encargado de listar todas las imágenes que correspondan a una categoría
      ///Retorna: Retorna una promesa en la cual le especifíco una lista de tipo hits
      getGalleryByCategory(category: string) {
        return new Promise( resolve => {
          this.get(APIENDPOINT.getgallerybycategory + category)
            .subscribe(resp => {
              if (resp.IsSuccess) {
                resolve(resp.Data.hits);
              } else {
                resolve(null);
                console.log('Mostrar alerta de error');
              }
            }, error => {
              resolve(null);
              console.log('Mostrar alerta de error');
              return null;
            });
        });
      }
  }

