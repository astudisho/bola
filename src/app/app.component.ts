import { Component, OnInit } from '@angular/core';
import { CarrouselComponent } from './components/carrousel/carrousel.component';
import { CarrouselConfig } from './models/carrousel-config';
import { SelectedYear } from './models/enums/carrousel-year.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  title = 'bola-app';
  list2020 = ["chokimi", "chimoso", "chokimi2", "popito-chimi-osos", "popito-cod","popito-oso", "popito"];
  list2019 = [];
  list2018 = [];
  list2017 = [];

  YearsEnum = SelectedYear;
  selectedYear : SelectedYear = this.YearsEnum.year2020;

  carouselConfig2020 : CarrouselConfig = {
    sourceList: this.list2020,
    extension: 'jpg',
    path: 'assets/img/2020/'
  }
  carouselConfig2019 : CarrouselConfig = {
    sourceList: this.list2019,
    extension: 'jpg',
    path: 'assets/img/2019/'
  }
  carouselConfig2018 : CarrouselConfig = {
    sourceList: this.list2018,
    extension: 'jpg',
    path: 'assets/img/2018/'
  }
  carouselConfig2017 : CarrouselConfig = {
    sourceList: this.list2017,
    extension: 'jpg',
    path: 'assets/img/2017/'
  }
}
