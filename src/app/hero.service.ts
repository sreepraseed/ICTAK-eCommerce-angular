import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  constructor(private http: HttpClient) {}
  getProdDetails = () => {
    return this.http.get('https://fakestoreapi.com/products');
  };
}
