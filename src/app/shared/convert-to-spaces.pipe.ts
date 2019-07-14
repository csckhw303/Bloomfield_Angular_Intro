import { Pipe, PipeTransform } from "@angular/core";

@Pipe(
    {
        name: 'convertToSpaces'
    }
)
export class ConverToSpacesPipe implements PipeTransform{
    transform(value: string, charactor: string ): string {
        return value.replace(charactor, ' ');
    }

}