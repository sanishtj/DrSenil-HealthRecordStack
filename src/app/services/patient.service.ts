import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { Patientinfo } from '../models/patientinfo';

@Injectable({
  providedIn: 'root'
})
export class PatinetService {
  private productsUrl = 'api/products';
  pid = 2;
  patientList = [
    {
      Id: '1',
      FullName: 'Sanish Joseph',
      DOB: new Date(),
      Mobile: '123456789',
      Email: 'sanyjose85@gmail.com'
    },
    {
      Id: '2',
      FullName: 'Sanish Joseph',
      DOB: new Date(),
      Mobile: '123456789',
      Email: 'sanyjose85@gmail.com'
    }
  ];

  constructor(private http: HttpClient) {}

  getPatients(): Observable<Patientinfo[]> {
    return of(this.patientList);
  }

  addPatient(patient: Patientinfo): Observable<Patientinfo> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    // Product Id must be null for the Web API to assign an Id
    const newPatient = { ...patient, Id: (this.pid + 1).toString() };
    this.patientList.push(newPatient);
    this.pid = this.pid + 1;
    return of(newPatient);
  }

  deletePatient(id: number): Observable<{}> {
    // this.patientList.splice( list.indexOf('foo'), 1 );
    return of(true);
  }

  updatePatient(patient: Patientinfo): Observable<Patientinfo> {

    const newPatient = { ...patient, id: null };
    return of(newPatient);
  }

  private handleError(err) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
    }
    console.error(err);
    return throwError(errorMessage);
  }
}
