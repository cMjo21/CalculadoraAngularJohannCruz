import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculadora',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.scss'
})
export class CalculadoraComponent {

numero1 : number= 0 ;
numero2 : number = 0 ;
resultado : number = 0;

suma(){

this.resultado = this.numero1 + this.numero2

}

resta(){

  this.resultado = this.numero1 - this.numero2
  
  }


division(){

  this.resultado = this.numero1 / this.numero2


}



multiplicacion(){

  this.resultado = this.numero1 * this.numero2


}

potencia(){

this.resultado = Math.pow(this.numero1, this.numero2);


}








borrar() {
  this.numero1 = 0;
  this.numero2 = 0;
  this.resultado = 0;
}



}


 

  

  

 

  








  




 



