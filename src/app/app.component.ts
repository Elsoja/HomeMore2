import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MapaComponent } from '../mapa/mapa.component'; 
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [CommonModule, RouterModule, MapaComponent],  // Mantén la importación de MapaComponent
})
export class AppComponent {
  title = 'HomeMore';
}
