import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of, switchMap } from 'rxjs';
import { Country } from '../interfaces/country.interface';

@Injectable({ providedIn: 'root' })
export class CountriesService {
  public apiUrl: string = 'https://restcountries.com/v3.1';

  constructor(private http: HttpClient) {}

  searchByAlphaCode(alphaCode: string): Observable<Country | null > {
    const url = `${this.apiUrl}/alpha/${alphaCode}`;
    return this.http.get<Country[]>(url)
      .pipe(
        map(countries => countries.length > 0 ? countries[0]: null),
        catchError(() => of(null)));
  }


  searchByCapital(term: string): Observable<Country[]> {
    const url = `${this.apiUrl}/capital/${term}`;
    return this.http.get<Country[]>(url)
      .pipe(
        catchError(() => of([])));
  }

  searchByCountry(term: string): Observable<Country[]> {
    const url = `${this.apiUrl}/name/${term}`;
    return this.http.get<Country[]>(url)
      .pipe(
        catchError(() => of([])));
  }

  searchByRegion(term: string): Observable<Country[]> {
    const url = `${this.apiUrl}/region/${term}`;
    return this.http.get<Country[]>(url)
      .pipe(
        catchError(() => of([])));
  }
}
