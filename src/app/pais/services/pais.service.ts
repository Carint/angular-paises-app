import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private _apiUrl: string = 'https://restcountries.eu/rest/v2';

  constructor(
    private http: HttpClient
  ) { }

  // Método que retorna un arreglo de paises por el termino de busqueda
  buscarPais(termino: string): Observable<Country[]> {
    // Construcción de la URL
    const url = `${this._apiUrl}/name/${termino}`;
    
    return this.http.get<Country[]>(url);
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

    return this.http.get<Country[]>(url);
  }

}
