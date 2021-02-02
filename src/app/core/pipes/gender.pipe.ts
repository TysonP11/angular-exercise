import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'gender'
})
export class GenderPipe implements PipeTransform {
    transform(value: string) {
        switch (value) {
            case 'M':
                return 'male'
            case 'F':
                return 'female'
            case 'U':
                return 'unknown'
            default:
                return null
        }
    }
}