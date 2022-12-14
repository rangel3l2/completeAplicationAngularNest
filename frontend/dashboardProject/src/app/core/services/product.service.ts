import { Product } from "../model/Product";
import { Observable, catchError, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

export class ProductService {


  
  baseUrl = 'http://localhost:3000/api/product';

constructor(private http: HttpClient) {}
//create
save(product: Product): Observable<Product> {
  

   
  
  return this.http.post<Product>(this.baseUrl, product, {    
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

