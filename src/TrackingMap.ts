interface Entity {
  location: {
    lat: number;
    lon: number;
  };
  popupText(): string;
}

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

  attachMarker(entity: Entity): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      clickable: true,
      position: {
        lat: entity.location.lat,
        lng: entity.location.lon,
      },
    });
    marker.addListener("click", () => {
      const popup = new google.maps.InfoWindow({
        content: entity.popupText(),
      });
      popup.open(this.googleMap, marker);
    });
  }
}
