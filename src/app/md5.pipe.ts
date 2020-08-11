import { Pipe, PipeTransform } from '@angular/core';
import { Md5 } from 'ts-md5/dist/md5';


@Pipe({
  name: 'md5'
})
export class Md5Pipe implements PipeTransform {
  transform(value: string): Int32Array {

    return Md5.hashStr(value);

  }

}
