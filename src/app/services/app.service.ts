import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Capital } from '../models/capital';
import { Observable, retry, timeout } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable()
export class AppService {

  constructor(private http: HttpClient) {
  }

  getCapitals(): Observable<Capital[]> {
    return this.http.get<Capital[]>(`${environment.url}/capitals.json`).pipe(timeout(5_000), retry(3));
  }
}
