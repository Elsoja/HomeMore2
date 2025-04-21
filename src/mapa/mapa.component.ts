import { Component, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements AfterViewInit {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      import('leaflet').then(L => {
        const map = L.map('map', {
          center: [32.52631778602499, -116.91641062042076],
          zoom: 13,
        });
        
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; OpenStreetMap contributors'
        }).addTo(map);

        L.popup({ closeOnClick: false, autoClose: false })
          .setLatLng([32.52631778602499, -116.91641062042076])
          .setContent('Casa Hogar Belén, A.C.')
          .openOn(map);
        L.popup({ closeOnClick: false, autoClose: false })
          .setLatLng([32.508700427700624, -116.95658421410738])
          .setContent('Casa Hogar Verdad y Vida')
          .openOn(map);
        L.popup({ closeOnClick: false, autoClose: false })
          .setLatLng([32.54023826010246, -116.87846224719644])
          .setContent('Casa Hogar de Maria Inmaculada')
          .openOn(map);


      });
    }
  }
}
