import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../interface/employee';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private url = 'https://jsonplaceholder.typicode.com/users/';
  constructor(private http: HttpClient) {}

  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.url);
  }
 
}