import { Component, OnInit } from '@angular/core';
import { promise } from 'protractor';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: []
})
export class PromesasComponent implements OnInit {

  constructor() {

    const promesa = new Promise( (resolve, reject) => {

      let contador: number = 0;

      const itervalo = setInterval( () => {
        contador += 1;
        console.log(contador);

        if ( contador === 3 ) {
          resolve('OK!');
          clearInterval(itervalo);
        }

      }, 1000 );

    });

    this.contarTres().then(
      mensaje => console.log('Terminó', mensaje)
    )
    .catch( error => console.error('Error en la promesa', error ));
   }

  ngOnInit() {
  }

  contarTres() {

    return new Promise( (resolve, reject) => {

    let contador: number = 0;

    const itervalo = setInterval( () => {
      contador += 1;

      if ( contador === 3 ) {
          resolve( true );
          clearInterval(itervalo);
        }

      }, 1000 );

    });

  }

}
