import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { User } from '../../modules/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly API_URL: string = `https://65009f9718c34dee0cd53786.mockapi.io`;

  constructor(
    private http: HttpClient
  ) { }

  public getUsers(): Observable<User[]> {
    const url = `${this.API_URL}/users`;

    return this.http.get<User[]>(url);
  }

  public getUserById(id: string): Observable<User> {
    const url = `${this.API_URL}/users/${id}`;

    return this.http.get<User>(url);
  }
}