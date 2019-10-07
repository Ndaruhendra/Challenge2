import { Injectable } from '@angular/core';
 
@Injectable({
  providedIn: 'root'
})
export class CartService {
 
  private data = [
    {
      category: 'Shoes',
      expanded: true,
      products: [
        { id: 0, name: 'vans', price: '20' },
        { id: 1, name: 'Asics', price: '30' },
        { id: 2, name: 'converse', price: '25' },
        { id: 3, name: 'Nike', price: '50' }
      ]
    },
    {
      category: 'Cap',
      products: [
        { id: 4, name: 'Vans', price: '11' },
        { id: 5, name: 'Converse', price: '10' }
      ]
    },
    {
      category: 'T-Shirt',
      products: [
        { id: 6, name: 'Vans', price: '16' },
        { id: 7, name: 'Nike', price: '17' },
        { id: 8, name: 'Converse', price: '13' }
      ]
    }
  ];
 
  private cart = [];
 
  constructor() { }
 
  getProducts() {
    return this.data;
  }
 
  getCart() {
    return this.cart;
  }
 
  addProduct(product) {
    this.cart.push(product);
  }
}