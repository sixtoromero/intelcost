import { Observable, Subject } from 'rxjs';
import { map } from "rxjs/operators";
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';

import { ResponseModel } from '../models/response.model';

export abstract class BaseService<T> {

    public responseModel: ResponseModel<any>;
    public _apiRootLocal: string;

    constructor(protected _httpClient: HttpClient,
                protected _apiRoot: string = environment.apiGatewayURL) {
                    this.responseModel = new ResponseModel;
                    this._apiRootLocal = environment.apiGatewayURL;
    }

    get(endPoint: string): Observable<ResponseModel<T>> {

        const apiURL = `${this._apiRoot}${endPoint}`;

        //this.ApplicationAut(isAut);

        return this._httpClient.get(apiURL)
        .pipe(
            map(
                (resp: ResponseModel<T>) => {
                    this.responseModel.Data = resp;
                    this.responseModel.IsSuccess = true;
                    this.responseModel.Message = '';

                    return this.responseModel;
        }));
    }

}
