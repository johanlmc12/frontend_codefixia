import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private baseUrl = 'http://localhost:8000';

  constructor(private http: HttpClient) { }

  register(email: string, password: string) {
    const data = { email, password };
    return this.http.post(`${this.baseUrl}/register`, data);
  }

    login(email: string, password: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, { email, password });
  }


}

