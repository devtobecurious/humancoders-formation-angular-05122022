import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apis } from 'projects/mon-appli/src/environments/apis';
import { Observable, tap } from 'rxjs';
import { Selfie } from '../models';

@Injectable({
  providedIn: 'root',
})
export class SelfieService { // Stateless

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Selfie[]> {
    return this.httpClient.get<Selfie[]>(apis.selfies.url)
                          .pipe(
                            tap(item => console.info(item)) // je prépare tous les traitements
                            // ils seront exécutés lors du ==> subscribe() !
                          );
  }
}
