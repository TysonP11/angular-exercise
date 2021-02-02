import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'tableData'
})
export class TableDataPipe implements PipeTransform {

  transform(value: any, header: string) {
    
    if( header === 'birthDay'){
      var datePipe = new DatePipe("en-US");
        value = datePipe.transform(value, 'fullDate');
        return value;
    }else{
      return value
    }
  }

}
