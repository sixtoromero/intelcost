import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HitsModel } from 'src/app/models/hits.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cardimg',
  templateUrl: './cardimg.component.html'
})
export class CardimgComponent implements OnInit {

  ///Propiedad que se usa para pintar en el html el resultado recibido en el @Input desde gallery o imgfilter
  @Input() image = new HitsModel();
  ///Se usa para emitir el evento desde el componente gallery o imgfilter
  @Output() imageSel: EventEmitter<number>;

  constructor(private router: Router) {
    this.imageSel = new EventEmitter();
  }

  ngOnInit() {
  }

  ///Se encarga de emitir el evento desde el componente padre que lo llama.
  detailView(id: number) {
    this.imageSel.emit(id);
  }

}
