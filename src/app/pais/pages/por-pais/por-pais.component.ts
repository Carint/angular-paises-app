import { Component } from '@angular/core';

import { Country } from '../../interfaces/pais.interface';

import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
    `
      li {
        cursor: pointer;
      }
    `
  ]
})
export class PorPaisComponent {
  termino: string = '';
  hayError: boolean = false;
  paises: Country[] = [];

  paisesSugeridos: Country[] = [];

  mostrarSugerencia: boolean = false;

  constructor(
    private paisService: PaisService
  ) { }

  buscar( termino: string ) {
    this.hayError = false;
    this.termino = termino;

    if(this.termino != ''){
      this.paisService.buscarPais(this.termino).subscribe( ( paises ) => {
          this.paises = paises;
          this.mostrarSugerencia = false;
          // console.log(this.paises);
        }, (err) => {
          this.hayError = true;
          this.paises = [];
        })
    }
      
    // this.termino = '';
  }

  sugerencias( termino: string ) {
    this.hayError = false;
    this.termino = termino;
    this.paisesSugeridos = [];
    this.mostrarSugerencia = true;
    
    // Sugerencias
    if( termino != '')
    this.paisService.buscarPais( this.termino ) .subscribe( 
      paises => this.paisesSugeridos = paises.splice(0,5),
      (err) => {
        this.paisesSugeridos = [];
            this.hayError = true;
            this.mostrarSugerencia = false;
          }
        );
  }

  buscarSugerido( termino: string ) {
    this.buscar(termino);
  }

}
