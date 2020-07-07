import { NodeCompatibleEventEmitter } from 'rxjs/internal/observable/fromEvent';
import { HitsModel } from './hits.model';

export class GalleryModel {
    public total: number;
    public totalHits: number;

    public hits: HitsModel;
}