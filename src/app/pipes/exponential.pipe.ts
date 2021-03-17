import { Pipe, PipeTransform } from '@angular/core';

// se usa el decorador Pipe
@Pipe({
  name: 'exponential'
})

export class ExponentialPipe implements PipeTransform {

  // metodo por defecto(que podemos modificar) que viene implementado porque las pipes lo que hacen es transformar datos
  transform(value: number): any {
    return Math.pow(value, 2);
  }

}
