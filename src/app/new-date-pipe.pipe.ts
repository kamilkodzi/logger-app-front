import { Pipe, PipeTransform } from "@angular/core";
import * as moment from "moment";

@Pipe({
  name: "newDatePipe",
})
export class NewDatePipePipe implements PipeTransform {
  transform(value: any, args?: any): any {
    if (args) {
      return args;
    } else {
      return moment(value, "YYYYMMDD").fromNow();
    }
  }
}
