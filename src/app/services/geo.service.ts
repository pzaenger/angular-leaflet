import { Injectable } from '@angular/core';
import { CircleMarker, Control, LayerGroup, Map, TileLayer } from 'leaflet';
import { Capital } from '../models/capital';
import { AppService } from './app.service';
import { colors } from '../utilities/colors';

@Injectable()
export class GeoService {

  private map: Map | undefined;
  private layersControl: Control.Layers | undefined;
  private layerGroups: { [key: string]: { readonly name: string; readonly group: LayerGroup; readonly color: string } } = {};

  constructor(private appService: AppService) {
    this.appService.getCapitals().subscribe(value => this.addCapitals(value));
  }

  init(container: string): void {

    if (this.map) return;

    const osm = new TileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '© OpenStreetMap'
    });

    this.map = new Map(container, {
      center: [0, 0],
      zoom: 3,
      layers: [osm]
    });

    this.layersControl = new Control.Layers({ OpenStreetMap: osm }).addTo(this.map);

    new Control.Scale().addTo(this.map);
  }

  private addCapitals(capitals: Capital[]): void {

    if (!this.layersControl) return;

    const continents = [...new Set(capitals.map(value => value.continent))];

    for (let i = 0; i < continents.length; i++) {

      const continent = continents[i];

      if (!this.layerGroups[continent]) {
        this.layerGroups[continent] = {
          name: continent,
          group: new LayerGroup([]),
          color: colors[i] || '#000000'
        };
      }

      const layerGroup = this.layerGroups[continent];

      layerGroup.group.clearLayers();

      this.layersControl.removeLayer(layerGroup.group);
      this.layersControl.addOverlay(layerGroup.group, layerGroup.name);
    }

    for (const capital of capitals) {

      const { group, color } = this.layerGroups[capital.continent];
      const tooltip = `${capital.name}, ${capital.country}`;
      const popup = `<h2>${capital.name}</h2><p>${capital.country} (${capital.code}), ${capital.continent}</p>`;

      group.addLayer(new CircleMarker([capital.latitude, capital.longitude], { radius: 5, color })
        .bindTooltip(tooltip)
        .bindPopup(popup, { className: 'popup' }));
    }
  }
}
