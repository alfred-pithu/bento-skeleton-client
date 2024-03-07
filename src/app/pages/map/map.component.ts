import { Component, OnInit, AfterViewInit, Output, EventEmitter } from '@angular/core';
// import 'mapbox-gl/dist/mapbox-gl.css'
// import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';
import * as mapboxgl from 'mapbox-gl'
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import { environment } from '../../../environments/environment';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrl: './map.component.css'
})
export class MapComponent implements OnInit {

  @Output() restaurantLatLongChanged = new EventEmitter<{ lat: number, long: number }>()

  map!: mapboxgl.Map;
  marker!: mapboxgl.Marker;
  style = 'mapbox://styles/mapbox/streets-v12'
  accessToken = environment.MAPBOX_URL

  selectedLatitude: number = 0
  selectedLongitude: number = 0




  ngOnInit(): void {

    // Taking the Users Current location info
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;

        this.updateSelectedLatLong(latitude, longitude)

        // this.selectedLatitude = latitude;
        // this.selectedLongitude = longitude;


        this.initializeMap()
        this.initializeMarker()
        this.addGeoCoder();


      }, (error) => {
        console.log('Permission dey nai');
      });
    }


  }


  initializeMap() {
    this.map = new mapboxgl.Map({
      accessToken: this.accessToken,
      container: 'map',
      style: this.style,

      center: [this.selectedLongitude, this.selectedLatitude],
      zoom: 12
    })


  }


  updateSelectedLatLong(lat: number, long: number) {
    this.selectedLatitude = lat
    this.selectedLongitude = long

    this.restaurantLatLongChanged.emit({ lat: this.selectedLatitude, long: this.selectedLongitude })
  }

  initializeMarker() {

    if (this.marker) this.marker.setLngLat([this.selectedLongitude, this.selectedLatitude]);
    else this.marker = new mapboxgl.Marker({ color: 'red', draggable: true })
      .setLngLat([this.selectedLongitude, this.selectedLatitude])
      .addTo(this.map)
    this.marker.on('dragend', this.onDragEnd)
  }


  onDragEnd = () => {
    if (this.marker) {
      const lngLat = this.marker.getLngLat()

      this.updateSelectedLatLong(lngLat.lat, lngLat.lng)

      // this.selectedLatitude = lngLat.lat
      // this.selectedLongitude = lngLat.lng

      this.initializeMarker()

    }

  }


  addGeoCoder() {
    const geoCoder = new MapboxGeocoder({
      accessToken: this.accessToken,
      marker: false,
      mapboxgl: mapboxgl
    });

    geoCoder.on("result", (event) => {

      this.updateSelectedLatLong(event.result.center[1], event.result.center[0])


      // this.selectedLatitude = event.result.center[1]
      // this.selectedLongitude = event.result.center[0]

      this.initializeMarker()
    })

    this.map.addControl(geoCoder)


  }






}
