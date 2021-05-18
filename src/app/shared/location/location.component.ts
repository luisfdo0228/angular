import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {
  lat = 0;
  lng = 0;
  latMarket = 0;
  lngMarket = 0;
  zoom = 8
  isOpenInfo = false


  constructor() { }

  ngOnInit(): void {
    this.setCurrentLocation('load')
  }


  public setCurrentLocation(evento) {
    if ('geolocation' in navigator) {
      if(evento == 'load'){
        navigator.geolocation.getCurrentPosition((position) => {
          this.lat = position.coords.latitude;
          this.lng = position.coords.longitude;
        });
      } else if(evento == 'click') {
        navigator.geolocation.getCurrentPosition((position) => {
          this.lat = position.coords.latitude;
          this.lng = position.coords.longitude;
          this.latMarket = position.coords.latitude;
          this.lngMarket = position.coords.longitude;
          this.zoom = 13;
          this.isOpenInfo = true;
        });
      }
      
    }
  }

  

}
