import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar-personaje',
  templateUrl: './agregar-personaje.component.html',
  styleUrls: ['./agregar-personaje.component.css']
})
export class AgregarPersonajeComponent implements OnInit {

  constructor( private dbzService: DbzService ) { }

  ngOnInit(): void {
  }

  @Input() nuevo!: Personaje;

  agregar() {
    if(this.nuevo.nombre.trim().length === 0) return;

    // console.log('agregar', this.nuevo);
    // this.nuevoPersonaje.emit(this.nuevo)
    this.dbzService.addPersonaje(this.nuevo);
    // console.log('agregar', this.nuevo);


    this.nuevo = {
      nombre: '',
      poder: 0
    }
  }

}
