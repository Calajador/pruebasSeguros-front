import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getDataTablePipe',
})
export class GetDataTablePipePipe implements PipeTransform {
  transform(object: any, keyName: string, ...args: unknown[]): unknown {
    return object[keyName];
  }
}
