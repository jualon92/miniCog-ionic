import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'totalColor',
  standalone: true
})
export class TotalColorPipe implements PipeTransform {

  transform(total: number): string {
    if (total < 3){
      return 'danger';
    } else if (total < 4){
      return 'warning';
    } else {
      return 'success';
  }}
  

}
