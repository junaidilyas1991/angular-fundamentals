import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class OrderService {

  constructor(private http: HttpClient) {
  }

  getOrders(): Observable<any> {
    const headers = new HttpHeaders();
    const token = localStorage.getItem('token');
    headers.append('Authorization', 'Bearer ' + token);

    const options = { headers: headers };

    return this.http.get('/api/orders', options).pipe(
      map((response: any) => response.json())
    );
  }
}
