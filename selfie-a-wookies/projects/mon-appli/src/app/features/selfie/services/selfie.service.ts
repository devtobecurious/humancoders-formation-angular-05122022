import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SelfieService {

  constructor(private httpClient: HttpClient) { }

  getAll() {
    //return ???
  }
}
