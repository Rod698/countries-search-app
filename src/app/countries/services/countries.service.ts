import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/country.interface';

@Injectable({providedIn: 'root'})
export class CountriesService {

  public apiUrl: string = 'https://restcountries.com/v3.1';

  constructor(private http: HttpClient) { }


  searchByCapital(term: string): Observable<Country[]> {
    const url = `${this.apiUrl}/capital/${term}`
    return this.http.get<Country[]>(url);
  }

}
