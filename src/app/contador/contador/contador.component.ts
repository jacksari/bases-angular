import { Component } from '@angular/core'

@Component({
    selector: 'app-contador',
    template: `
        <h1>{{ title }}</h1>
        <h2>Número: {{ numero }}</h2>
        <h2>Base: {{ base }}</h2>
        <div>
        <button type="button" (click)="contador(base)">+{{ base }}</button>
        <button type="button" (click)="contador(0)">Reset</button>
        <button type="button" (click)="contador(-base)">-{{ base }}</button>
        </div>
    `
})
export class ContadorComponent{
    public title: string = 'Contador App';
    public numero: number = 10;
    public base: number = 5;

  constructor(){
    console.log('Hola mundo')
  }

  contador(num: number){
    num === 0 ? this.numero = 10 : this.numero = this.numero + num;
  }

  increment() {
    this.numero = this.numero + 1;
  }

  decrement() {
    this.numero = this.numero - 1;
  }

  reset() {
    this.numero = 10;
  }
}
