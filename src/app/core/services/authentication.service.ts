import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { User } from 'src/app/models/user';

@Injectable({providedIn: 'root'})
export class AuthenticationService {
  private BASE_URL = 'http://localhost:1337';

  constructor(private http: HttpClient) { }

  logIn(email: string, password: string): Observable<User> {
    // const url = `${this.BASE_URL}/login`;
    const user: User = {id: '456', email: 'sanyjose85@gmaail.com', token: 'dsfsd7667'};
    return of(user);
  }

}
