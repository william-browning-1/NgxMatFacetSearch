import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false,
  standalone: true
})
export class FilterPipe implements PipeTransform {
  transform(objectArray: {[key: string]: any}[], fieldName: string, fieldValue: any): any {
    return objectArray.filter(obj => obj[fieldName] === fieldValue);
  }
}
