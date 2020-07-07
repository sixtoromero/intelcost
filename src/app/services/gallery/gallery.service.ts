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

