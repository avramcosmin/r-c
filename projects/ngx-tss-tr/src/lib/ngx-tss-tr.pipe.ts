import {Pipe, PipeTransform} from '@angular/core';
import {Currencies} from './ngx-tss-tr.interface';

@Pipe({name: 'sdoCurrency'})
export class NgxTssTrPipe implements PipeTransform {
  transform(
    value: Currencies
  ): string {
    return [
      value.name,
      value.code === '(none)' ? value.code : ` (${value.code})`
    ].join(' ');
  }
}
