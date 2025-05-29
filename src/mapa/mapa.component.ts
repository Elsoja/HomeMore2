import {
  Component,
  AfterViewInit,
  Inject,
  PLATFORM_ID,
  Input,
  OnChanges,
  SimpleChanges
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { CasaHogar } from '../app/models/casa-hogar.model';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css'],
  standalone: true,
  imports: [CommonModule] 

})
export class MapaComponent implements AfterViewInit, OnChanges {
  @Input() casasHogar: CasaHogar[] = [];
  mapaCargado: boolean = false; 

  private map!: any;
  private L: any;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  async ngAfterViewInit(): Promise<void> {
    if (isPlatformBrowser(this.platformId)) {
      this.L = await import('leaflet');
      const L = this.L;

      this.map = L.map('map', {
        center: [32.52631778602499, -116.91641062042076],
        zoom: 12,
      });

      L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
      }).addTo(this.map);

      this.agregarMarcadores();
      this.mapaCargado = true; // 👈 se desactiva el loader
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['casasHogar'] && this.map) {
      this.agregarMarcadores();
    }
  }

  agregarMarcadores() {
    if (this.casasHogar && Array.isArray(this.casasHogar)) {
      const L = this.L;

      const customIcon = L.icon({
        iconUrl: 'https://cdn-icons-png.flaticon.com/512/684/684908.png',
        iconSize: [32, 32],
        iconAnchor: [16, 32],
        tooltipAnchor: [0, -32]
      });

      this.casasHogar.forEach(casa => {
        L.marker([casa.lat, casa.lng], { icon: customIcon })
          .addTo(this.map)
          .bindTooltip(casa.nombre, {
            permanent: false,
            direction: 'top',
            opacity: 0.9
          });
      });
    }
  }

  centrarEnCasa(casa: CasaHogar) {
    if (this.map) {
      this.map.setView([casa.lat, casa.lng], 15);
    }
  }
}
