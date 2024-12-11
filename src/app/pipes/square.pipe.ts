import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'square',
  standalone: true
})
export class SquarePipe implements PipeTransform {

  transform(value:number=2): number {
    //let num=value*value;
    return Math.pow(value,2);
  }

}
