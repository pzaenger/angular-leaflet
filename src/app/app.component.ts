import { AfterViewInit, Component } from '@angular/core';
import { GeoService } from './services/geo.service';
import { AppService } from './services/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {

  constructor(private appService: AppService, private geoService: GeoService) {
  }

  ngAfterViewInit(): void {
    this.geoService.init('map');
  }
}
