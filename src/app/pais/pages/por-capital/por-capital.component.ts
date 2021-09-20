import { Component } from '@angular/core';

import { Country } from '../../interfaces/pais.interface';

import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent {
  termino: string = '';
  hayError: boolean = false;

  // Propiedad de consulta al servicio de paises
  paises: Country[] = [];

  constructor(
    private paisService: PaisService
  ) { }

  buscar( termino: string ) {
    this.hayError = false;
    this.termino = termino;

    if(this.termino != ''){
      this.paisService.buscarCapital(this.termino)
        .subscribe( ( paises ) => {
          this.paises = paises;
        }, (err) => {
          this.hayError = true;
          this.paises = [];
        })
    }
      
    // this.termino = '';
  }
}
