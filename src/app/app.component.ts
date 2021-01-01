import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Constants } from './constants/constants';
import { CarrouselConfig } from './models/carrousel-config';
import { SelectedYear } from './models/enums/carrousel-year.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  YearsEnum = SelectedYear;
  selectedYear : SelectedYear = this.YearsEnum.year2020;

  carouselConfig2020 : CarrouselConfig = {
    sourceList: Constants.data2020,
    path: 'assets/img/2020/'
  }
  carouselConfig2019 : CarrouselConfig = {
    sourceList: Constants.data2019,
    path: 'assets/img/2019/'
  }
  carouselConfig2018 : CarrouselConfig = {
    sourceList: Constants.data2018,
    path: 'assets/img/2018/'
  }
  carouselConfig2017 : CarrouselConfig = {
    sourceList: Constants.data2017,
    path: 'assets/img/2017/'
  }
  carouselConfig2016 : CarrouselConfig = {
    sourceList: Constants.data2016,
    path: 'assets/img/2016/'
  }

  /**
   *  Subscribe to url fragment change
   */
  constructor(private route: ActivatedRoute) {    
  }
  ngOnInit(): void {
    this.route.fragment.subscribe((fragment: string) =>{
      switch (fragment) {
        case '2020':
          this.selectedYear = this.YearsEnum.year2020;
          break;
        case '2019':
          this.selectedYear = this.YearsEnum.year2019;
          break;
        case '2018':
          this.selectedYear = this.YearsEnum.year2018;
          break;
        case '2017':
          this.selectedYear = this.YearsEnum.year2017;
          break;
        case '2016':
          this.selectedYear = this.YearsEnum.year2016;
          break;      
        default:
          this.selectedYear = this.YearsEnum.year2020;
          break;
      }
    });
  }
}
