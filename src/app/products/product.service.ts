import { Injectable } from '@angular/core';
import { IProduct } from './Product';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse, } from '@angular/common/http';
import {tap, catchError} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    private productUrl: string = 'api/products.json';

   constructor(private http: HttpClient) {} 
   getProducts() : Observable<IProduct[]> {
        return this.http.get<IProduct[]>(this.productUrl).pipe(
            tap(data => console.log( JSON.stringify(data))),
            catchError(this.handleError)
        );
   }

   private handleError(err: HttpErrorResponse) {
        let errMessage = '';
        if(err.error instanceof ErrorEvent) {
            errMessage = `An error occurred: ${err.error.message}`;
        }  else {
            errMessage =`Server returned code: ${err.status}, error message is: ${err.message} `;    
        }
        console.error(errMessage);
        return throwError(errMessage);  

   }
}