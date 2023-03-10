import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css'],
})
export class AddProductsComponent {
  constructor(private http: HttpClient) {}
  prodID: any;
  prodName: any;
  prodPrice: any;
  prodQty: any;

  addProducts = () => {
    const data = {
      prodID: this.prodID,
      prodName: this.prodName,
      prodPrice: this.prodPrice,
      prodQty: this.prodQty,
    };

    return this.http.post<any>('https://dummyjson.com/products/add', data);
  };
}
