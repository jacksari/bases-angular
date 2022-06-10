import { Injectable } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Injectable()
export class DbzService {
  private _personajes: Personaje[] = [
    {
      nombre: 'Goku',
      poder: 15000,
    },
    {
      nombre: 'Vegeta',
      poder: 12000,
    },
    {
      nombre: 'Trunks',
      poder: 9000,
    },
    {
      nombre: 'Piccolo',
      poder: 8000,
    },
    {
      nombre: 'Cell',
      poder: 7000,
    },
    {
      nombre: 'Freezer',
      poder: 14000,
    },
  ];

  constructor() {
    console.log('DbzService');
  }

  getPersonajes(): Personaje[] {
    return [...this._personajes];
  }

  addPersonaje(personaje: Personaje) {
    this._personajes.push(personaje);
  }
}
