import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
    name: 'filter'
  })
  export class TableFilterPipe implements PipeTransform {
    transform(list:any[],value:string) {
        return value ? list.filter(item => item.first_name === value) : list;
    }
  }