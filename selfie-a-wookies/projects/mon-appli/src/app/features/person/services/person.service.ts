import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apis } from 'projects/mon-appli/src/environments/apis';
import { environment } from 'projects/mon-appli/src/environments/environment';
import { map, Observable, of } from 'rxjs';
import { Person } from '../models';

const fakeService = {
  getAll(): Observable<Person[]> {
    return of([{ prenom: 'Akbar', age: 50, taille: 200 }, { prenom: 'Akbar', age: 50, taille: 200 }]);
  }
}

export type PersonApiResult = {
  results: [{
    name: string,
    height: number
  }]
}

@Injectable({
  providedIn: 'root',
  // useValue: environment.isProd ? {} : fakeService
})
export class PersonService {

  constructor(private readonly httpClient: HttpClient) { }

  getAll(): Observable<Person[]> {
    return this.httpClient.get<PersonApiResult>(apis.persons.url).pipe(
      map(result => result.results.map(item => ({prenom: item.name,taille: item.height,age: 0}) ) )
      // map(result => {
      //   let tableau: Person[] = [];

      //   tableau = result.results.map(item => {
      //     const person: Person = {
      //       prenom: item.name,
      //       taille: item.height,
      //       age: 0
      //     };
      //     return person;
      //   });

      //   return tableau;
      // })
    );
  }
}
