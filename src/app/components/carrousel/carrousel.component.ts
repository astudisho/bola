import { Component, Input, OnInit } from '@angular/core';
import { CarrouselConfig } from 'src/app/models/carrousel-config';

@Component({
  selector: 'app-carrousel',
  templateUrl: './carrousel.component.html',
  styleUrls: ['./carrousel.component.scss']
})
export class CarrouselComponent implements OnInit {
  @Input('config')
  config: CarrouselConfig = { path : '.', sourceList: [], extension: 'jpg' };

  constructor() { }

  ngOnInit(): void {
    console.log(this.config)
  }
}
