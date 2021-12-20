import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/Operators';
import {Product} from './product';
 const baseUrl = 'https://jsonplaceholder.typicode.com/photos';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  

  constructor(private httpclient:HttpClient) {}

GetPhotosdata():Observable<Product[]>{

  return this.httpclient.get<Product[]>(baseUrl).pipe(
    catchError(this.handleError)
  );

}


private handleError(error: HttpErrorResponse) {

  // Return userfriendly   error message;

  return throwError(error);
}


}
