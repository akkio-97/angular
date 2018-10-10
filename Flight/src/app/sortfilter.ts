import {  Pipe, PipeTransform }      from '@angular/core';
import { Flight } from "./app.flight";

@Pipe({
  name: 'sortPipe'
  
})
export class SortPipe implements PipeTransform {
    transform(flights: Flight[], path: string[], order: number): Flight[] {

            // Check if is not null
            if (!flights || !path || !order) return flights;

            return flights.sort((a: Flight, b: Flight) => {
              // We go for each property followed by path
              path.forEach(property => {
                a = a[property];
                b = b[property];
              })

              // Order * (-1): We change our order
              return a > b ? order : order * (- 1);
            })
          }

  }



