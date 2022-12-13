import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Category } from '../models/Category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  baseUrl = 'http://localhost:3000/api/category'
  constructor(private http: HttpClient) {}
  /** GET heroes from the server */

getCategories(): Observable<Category[]> {
  return this.http.get<Category[]>(this.baseUrl,{
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
    
  })
  .pipe(catchError(this.handleError));
}
private handleError(errorResponse: HttpErrorResponse) {

  if (errorResponse.error instanceof ErrorEvent) {
    console.error('Client Side Error :', errorResponse.error.message);
  } else {
    console.error('Server Side Error :', errorResponse);
  }
  return throwError(()=> 'There is a problem with the service. We are notified & working on it. Please try again later.');
}

}

