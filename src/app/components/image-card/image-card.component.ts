import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HitsModel } from 'src/app/models/hits.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-image-card',
  templateUrl: './image-card.component.html',
  styleUrls: ['./image-card.component.css']
})
export class ImageCardComponent implements OnInit {

  //galleries: HitsModel[] = [];
  @Input() image = new HitsModel();
  @Output() imageSel: EventEmitter<number>;

  constructor(private router: Router) { 
    this.imageSel = new EventEmitter();
  }

  ngOnInit() {
  }

  detailView(id: number) {
    this.imageSel.emit(id);
  }

}
