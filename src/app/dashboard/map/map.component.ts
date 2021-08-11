import { Component, Input, OnChanges } from '@angular/core';
import * as Leaflet from 'leaflet';
import { Response } from "../../interface/response";

const originalTile = Leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {maxZoom: 19});
const iconRetinaUrl = './assets/marker-icon-2x.png';
const iconUrl = './assets/marker-icon.png';
const shadowUrl = './assets/marker-shadow.png';
const iconDefault = Leaflet.icon({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41]
});
Leaflet.Marker.prototype.options.icon = iconDefault;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnChanges {

  public map: Leaflet;
  @Input() responseData: Response;

  ngOnChanges() {
    if (this.map) {
      this.map.off();
      this.map.remove();
    }
    this.map = Leaflet.map('labs_map', {
      center: [this.responseData.cords.avg_lat, this.responseData.cords.avg_lng],
      zoom: this.responseData.cords.zoom,
      attributionControl: false,
      layers: originalTile
    });

    this.responseData.laboatoria.forEach((lab, index) => {
      let labelText = `${lab.nazwa}<br/>${lab.adres}, ${lab.miejscowosc} ${lab.kod_pocztowy}` + (lab.info !== null ? `<br/>Informacje: ${lab.info}` : "");
      let popup1 = Leaflet.popup().setContent(labelText);

      Leaflet.marker([lab.gps_lat, lab.gps_lng])
        .bindPopup(popup1)
        .addTo(this.map);
    });
  }

}
