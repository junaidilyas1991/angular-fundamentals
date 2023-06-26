import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { AppError } from '../common/app-error';
import { NotFoundError } from '../common/not-found-error';
import { BadInput } from '../common/bad-input';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, map, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }


  getAll(url:string): Observable<any> {
    return this.http.get<any>(url)
      .pipe(
        map(response => response),
        catchError(this.handleError)
      );
  }

  create(url:string, resource: any): Observable<any> {
    return this.http.post<any>(url, JSON.stringify(resource))
      .pipe(
        map(response => response),
        catchError(this.handleError)
      );
  }

  update(url:string, resource: any, body: any): Observable<any> {
    return this.http.patch<any>(`${url}/${resource.id}`, body)
      .pipe(
        map(response => response),
        catchError(this.handleError)
      );
  }

  delete(url:string, id: any): Observable<any> {
    return this.http.delete<any>(`${url}/${id}`)
      .pipe(
        map(response => response),
        retry(3),
        catchError(this.handleError)
      );
  }

  deleteWithPromise(url:string, id: any): Promise<any> {
    return this.http.delete<any>(`${url}/${id}`)
      .pipe(
        map(response => response),
        catchError(this.handleError)
      )
      .toPromise();
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    if (error.status === 400) {
      return throwError(new BadInput(error.error));
    }
    if (error.status === 404) {
      return throwError(new NotFoundError());
    }
    return throwError(new AppError(error.error));
  }
}
