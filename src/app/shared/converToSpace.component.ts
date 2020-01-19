import { PipeTransform, Pipe } from "@angular/core";
@Pipe({
    name: 'converToSpace'
})
export class ConvertToSpacePipe implements PipeTransform {
    transform(value: string, charactor: string): string {
          return  value.replace(charactor,' ');
    }
}   