import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private _apiUrl: string = 'https://restcountries.eu/rest/v2';

  get httpParams() {
    return new HttpParams().set('fields', 'name;capital;alpha2Code;flag;population');
  }

  constructor(
    private http: HttpClient
  ) { }

  // Método que retorna un arreglo de paises por el termino de busqueda
  buscarPais(termino: string): Observable<Country[]> {
    // Construcción de la URL
    const url = `${this._apiUrl}/name/${termino}`;
    
    return this.http.get<Country[]>(url, { params: this.httpParams });
  }

  // Método que retorna un objeto de pais por el codigo alpha de pais
  buscarPaisPorAlpha( id: string ): Observable<Country> {
    // Construcción de la URL
    const url = `${this._apiUrl}/alpha/${ id }`;
    
    return this.http.get<Country>(url);
  }
  
  // Método que retorna un arreglo de paises por el termino de busqueda
  buscarCapital( termino: string ): Observable<Country[]> {
    // Construcción de la URL
    const url = `${this._apiUrl}/capital/${termino}`;

    return this.http.get<Country[]>(url, { params: this.httpParams})
            // .pipe(
            //   tap( console.log )
            // )
  }

  // Método que retorna una arreglo de paises por region
  buscarRegion( region: string ): Observable<Country[]> {
    const url = `${this._apiUrl}/region/${region}`;

    return this.http.get<Country[]>(url, { params: this.httpParams })
  }

}
