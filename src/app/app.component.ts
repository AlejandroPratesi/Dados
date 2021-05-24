import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  dadoIzquierda = '../assets/imagenes/lado1.png';
  dadoDerecha = '../assets/imagenes/lado4.png';

  numero1 = 1;
  numero2 = 2;

  tirarDados():void{
    this.numero1 = Math.round(Math.random() * 5 + 1);
    this.numero2 = Math.round(Math.random() * 5 + 1);

    this.dadoIzquierda = '../assets/imagenes/lado' + this.numero1 + '.png';
    this.dadoDerecha = '../assets/imagenes/lado' + this.numero2 + '.png';

    console.log(this.numero1);
    console.log(this.numero2);
  }

}
