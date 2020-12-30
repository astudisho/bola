import { Component } from '@angular/core';
import { CarrouselComponent } from './components/carrousel/carrousel.component';
import { CarrouselConfig } from './models/carrousel-config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bola-app';
  firstList = ["chokimi", "chimoso", "chokimi2", "popito-chimi-osos", "popito-cod","popito-oso", "popito"];

  firstCarouselConfig : CarrouselConfig = {
    sourceList: this.firstList,
    extension: 'jpg',
    path: 'assets/img/'
  }
}
