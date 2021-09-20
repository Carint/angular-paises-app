import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
  ]
})
export class PorRegionComponent {
  // Propiedad validacion de errores
  hayError: boolean = false;

  // Propiedad de consulta al servicio de regiones
  paises: Country[] = [];

  // Propiedad de regiones permitidas
  regiones: string[] = [
    'africa', 'americas', 'asia', 'europe', 'oceania'
  ];
  regionActiva: string = '';

  constructor(
    private paisService: PaisService
  ) { }

  // Evaluacion de la clase CSS
  getClaseCSS( region: string ): string {
    return ( region === this.regionActiva ) ? 'btn btn-primary ms-1' : 'btn btn-outline-primary ms-1'
  }

  // 
  activarRegion( region: string ) {
    if(region != '' && region !== this.regionActiva) {
      this.regionActiva = region;
      this.paises = [];
      this.paisService.buscarRegion(this.regionActiva)
        .subscribe( ( paises ) => { this.paises = paises; }, 
        (err) => {
          this.hayError = true;
          this.paises = [];
        });
    }
  }

}
