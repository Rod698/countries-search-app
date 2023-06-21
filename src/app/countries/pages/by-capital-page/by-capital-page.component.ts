import { Component } from '@angular/core';

@Component({
  selector: 'countries-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: [
  ]
})
export class ByCapitalPageComponent {

  public placeholder:string = 'Search by Capital';

  searchByCapital( term: string): void {
    console.log('desde by capital');
    console.log(term);
  }
}
