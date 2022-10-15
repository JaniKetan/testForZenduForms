import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
interface City {
  name: string;
  code: string;
}
declare var google: any;
@Component({
  selector: 'app-zenduforms',
  templateUrl: './zenduforms.component.html',
  styleUrls: ['./zenduforms.component.scss'],
})
export class ZenduformsComponent implements OnInit {
  myDateValue: Date;
  cities: City[];
  date1 = 24 / 12 / 2020;
  selectedCity: City;
  stateOptions = [
    { label: 'Map', value: 'map' },
    { label: 'List', value: 'list' },
  ];
  options: any;

  overlays: any[];

  dialogVisible: boolean;

  markerTitle: string;

  selectedPosition: any;

  infoWindow: any;

  draggable: boolean;

  value1: string = 'map';

  constructor(private messageService: MessageService) {
    this.cities = [
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' },
    ];
  }

  valueIconLeft: any;

  ngOnInit(): void {
    this.myDateValue = new Date('12-24-2020');
    this.options = {
      center: { lat: 21.232242210417176, lng: 72.86739092320204 },
      zoom: 12,
    };
    this.initOverlays();

    this.infoWindow = new google.maps.InfoWindow();
  }
  handleMapClick(event) {
    this.dialogVisible = true;
    this.selectedPosition = event.latLng;
  }

  handleOverlayClick(event) {
    let isMarker = event.overlay.getTitle != undefined;

    if (isMarker) {
      let title = event.overlay.getTitle();
      this.infoWindow.setContent('' + title + '');
      this.infoWindow.open(event.map, event.overlay);
      event.map.setCenter(event.overlay.getPosition());

      this.messageService.add({
        severity: 'info',
        summary: 'Marker Selected',
        detail: title,
      });
    } else {
      this.messageService.add({
        severity: 'info',
        summary: 'Shape Selected',
        detail: '',
      });
    }
  }

  addMarker() {
    this.overlays.push(
      new google.maps.Marker({
        position: {
          lat: this.selectedPosition.lat(),
          lng: this.selectedPosition.lng(),
        },
        icon: 'assets/icons/markers.png',
        title: this.markerTitle,
        draggable: this.draggable,
      })
    );
    this.markerTitle = null;
    this.dialogVisible = false;
  }

  handleDragEnd(event) {
    this.messageService.add({
      severity: 'info',
      summary: 'Marker Dragged',
      detail: event.overlay.getTitle(),
    });
  }

  initOverlays() {
    if (!this.overlays || !this.overlays.length) {
      this.overlays = [
        new google.maps.Marker({
          position: { lat: 20.5937, lng: 78.9629 },
          title: 'Konyaalti',
          icon: 'assets/icons/markers.png',
        }),
        new google.maps.Marker({
          position: { lat: 21.232242210417176, lng: 72.86739092320204 },
          title: 'Ataturk Park',
          icon: 'assets/icons/markers.png',
        }),
        new google.maps.Marker({
          position: { lat: 21.13003037634594, lng: 72.8890737227944 },
          title: 'Oldtown',
          icon: 'assets/icons/markers.png',
        }),
      ];
    }
  }

  zoomIn(map) {
    map.setZoom(map.getZoom() + 1);
  }

  zoomOut(map) {
    map.setZoom(map.getZoom() - 1);
  }

  clear() {
    this.overlays = [];
  }
}
