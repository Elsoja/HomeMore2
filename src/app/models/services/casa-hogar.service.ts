import { Injectable } from '@angular/core';
import { CasaHogar } from '../casa-hogar.model';

@Injectable({
  providedIn: 'root'
})
export class CasaHogarService {
    public casasHogar: { nombre: string; lat: number; lng: number }[] = [
        { nombre: 'Casa Hogar Belén, A.C.', lat: 32.52631778602499, lng: -116.91641062042076 },
        { nombre: 'Casa Hogar Verdad y Vida', lat: 32.508700427700624, lng: -116.95658421410738 },
        { nombre: 'Casa Hogar de Maria Inmaculada', lat: 32.54023826010246, lng: -116.87846224719644 },
        { nombre: 'Casa Hogar  Cristo por su Mundo Tijuana', lat: 32.52965526434149, lng: -116.97595238789151 },
        { nombre: 'CASA HOGAR NUEVA VIDA DAR. A.C.', lat: 32.535254330881244, lng: -117.05905795200893 },
        { nombre: 'Casa Hogar La Roca del Alfarero', lat: 32.53337293876192, lng: -117.05665469276651 },
        { nombre: 'Casa hogar infantil Uriel AC', lat: 32.52000262114273, lng: -116.90536707502447 },
        { nombre: 'Misioneras de la Caridad Casa Hogar "San Juan Diego"', lat: 32.51647505940914, lng: -116.96082742903532 },
        { nombre: 'Casa Hogar Verdad y Vida', lat: 32.51173988542064, lng: -116.95599402607846 },
        { nombre: 'Casa Hogar Vida Joven de Mexico', lat: 32.50614276679125, lng: -116.96609789255457 },
        { nombre: 'Hodeni Casa Hogar de los Niños The Childrens Home', lat: 32.50217950528989, lng: -117.06089258404545 },
        { nombre: 'Casa Hogar Casa de la Esperanza The Home Of Hope', lat: 32.488117209114826, lng: -117.00407266827898 },
        { nombre: 'Casa Hogar Rafah Dios Sanador.', lat: 32.4774016034806, lng: -116.96562051981653 },
        { nombre: 'Casa Hogar "Santa Teresita"', lat: 32.48232514826074, lng: -116.94124460464347 },
        { nombre: 'Casa Hogar: Luz de Esperanza', lat: 32.46147064226465, lng: -117.00063944014607 },
        { nombre: 'Casa Hogar Ciudad de Ángeles', lat: 32.452153015902624, lng:  -116.9903680750997 },
        { nombre: 'Casa hogar los angelitos .', lat: 32.452145883994156, lng: -116.93056589158908 },
        { nombre: 'Orfanato Siloe', lat: 32.4465336561335, lng: -116.92864788383004 },
        { nombre: 'Casa Hogar Ebenezer', lat: 32.504691891524885, lng: -117.01994418797514 },
      ];
      
  getCasasHogar(): CasaHogar[] {
    return this.casasHogar;
  }
}
