import { Component, Input, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-pais-tabla',
  templateUrl: './pais-tabla.component.html',
  styles: [
  ]
})
export class PaisTablaComponent implements OnInit {

  // Datos recibidos desde componente padre
  @Input() paises: Country[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
