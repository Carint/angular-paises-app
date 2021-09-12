import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
import { Country } from '../../interfaces/pais.interface';

import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  // Propiedad que recibe los datos de la consulta
  pais!: Country;

  constructor(
    private activatedRuote: ActivatedRoute,
    private paisService: PaisService
  ) { }

  ngOnInit(): void {
    // // Se captura el id enviado por parametro en la url
    // this.activatedRuote.params
    //   .subscribe( ({ id }) => {
    //     console.log( id );

    //     // Consulta del pais por el codigo alpha
    //     this.paisService.buscarPaisPorAlpha( id )
    //       .subscribe( pais => {
    //         console.log( pais );
    //       })
    //   })

    // Método utilizando los operadores de RxJS
    this.activatedRuote.params
      .pipe( 
        switchMap(({ id }) => this.paisService.buscarPaisPorAlpha( id )),
        // tap( console.log )
      )
      .subscribe( pais => this.pais = pais );
  }

}
