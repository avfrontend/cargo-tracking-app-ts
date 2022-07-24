import { Destination } from "./Destination";
import { Cargo } from "./Cargo";

export class TrackingMap {
  private googleMap: google.maps.Map;

  constructor(elementId: string) {
    this.googleMap = new google.maps.Map(document.getElementById(elementId), {
      zoom: 2,
      center: {
        lat: 0,
        lng: 20,
      },
    });
  }

  attachMarker(entity: Destination | Cargo): void {
    new google.maps.Marker({
      map: this.googleMap,
      clickable: true,
      position: {
        lat: entity.location.lat,
        lng: entity.location.lon,
      },
    });
  }
}
