import { Pipe, PipeTransform } from '@angular/core';

interface AddressTemplate {
  add1: string
  add2: string
  city: string
  zip: string
  country: string
}

@Pipe({
  name: 'formatAddress'
})
export class FormatAddressPipe implements PipeTransform {

  transform(address: AddressTemplate, ...args: unknown[]): unknown {
    return `${address.add1} ${address.add2} ${address.city} ${address.zip} ${address.country}`;
  }

}
