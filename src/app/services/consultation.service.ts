import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { Consultation } from '../models/consultation';

@Injectable({
  providedIn: 'root'
})
export class ConsultationService {
  private productsUrl = 'api/products';
  pid = 2;
  consultationList = [
    // {
    //   Id: '1',
    //   FullName: 'Sanish Joseph',
    //   DOB: new Date(),
    //   Mobile: '123456789',
    //   Email: 'sanyjose85@gmail.com'
    // },
    // {
    //   Id: '2',
    //   FullName: 'Sanish Joseph',
    //   DOB: new Date(),
    //   Mobile: '123456789',
    //   Email: 'sanyjose85@gmail.com'
    // }
  ];

  constructor(private http: HttpClient) {}

  getConsultations(): Observable<Consultation[]> {
    return of(this.consultationList);
  }

  getConsultation(id: string): Observable<{}> {
    const consultation = this.consultationList.filter(consultation => consultation.Id !== id)[0];
    return of(consultation);
  }

  addConsultation(consultation: Consultation): Observable<Consultation> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    // Product Id must be null for the Web API to assign an Id
    const newConsultation = { ...consultation, Id: (this.pid + 1).toString() };
    this.consultationList.push(newConsultation);
    this.pid = this.pid + 1;
    return of(newConsultation);
  }

  deleteConsultation(id: string): Observable<{}> {
    this.consultationList.filter(consultation => consultation.Id !== id);
    return of(id);
  }

  updateConsultation(consultation: Consultation): Observable<Consultation> {

    const foundIndex = this.consultationList.findIndex(x => x.Id === consultation.ConsultationId);
    this.consultationList[foundIndex] = consultation;
    return of(consultation);
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
