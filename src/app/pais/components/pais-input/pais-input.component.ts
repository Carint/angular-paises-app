import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: [
  ]
})
export class PaisInputComponent implements OnInit {

  // Evento que estara emitiendo el valor
  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  // Propiedad que se recibe
  @Input() placeholder: string = '';

  debouncer: Subject<string> = new Subject();

  termino: string = '';

  ngOnInit() {
    this.debouncer
      .pipe( debounceTime(300) )
      .subscribe( valor => {
        this.onDebounce.emit( valor );
      });
  }

  // Evento que captura el valor escrito en el input al momento de dar enter
  buscar() {
    this.onEnter.emit(this.termino);
  }

  // Evento que captura cada valor cuando se va escribiendo en el input
  teclaPresionada() {
    this.debouncer.next( this.termino );
  }

}
