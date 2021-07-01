import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Product {
  id: number;
  name: string;
  price: number;
  amount: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {

  data: Product[] = [

    { id: 0, name: 'Cloro', price: 9.00, amount: 0 },
    { id: 1, name: 'Jabon en barra', price: 19.00, amount: 0 },
    { id: 2, name: 'Jabon liquido', price: 29.00, amount: 0 },
    { id: 3, name: 'Alcohol', price: 9.50, amount: 0 },
    { id: 4, name: 'Shampoo Head&Shoulders', price: 49.55, amount: 0 },

  ];

  private cart = [];
  //Behavior nos ayuda a actualizar los datos y que todos puedan verla
  private cartItemCount = new BehaviorSubject(0);

  constructor() { }

  getProducts()
  {
    return this.data;
  }

  getCart()
  {
    return this.cart;
  }

  getCartItemCount()
  {
    return this.cartItemCount;
  }

  addProduct(product)
  {
    let added = false;
    for (const p of this.cart){
      if (p.id === product.id) {
        p.amount += 1;
        added = true;
        break;
      }
    }
    if (!added) {
      product.amount +=1;
      this.cart.push(product);
    }
    this.cartItemCount.next(this.cartItemCount.value + 1);

  }

  decreaseProduct(product)
  {
    for (const [index, p] of this.cart.entries()){
      if (p.id === product.id) {
        p.amount -= 1;
        if (p.amount === 0) {
          this.cart.splice(index, 1);
        }
      }
    }
  }

  removeProduct(product)
  {
    for (const [index, p] of this.cart.entries()) {
      if (p.id === product.id) {
        this.cartItemCount.next(this.cartItemCount.value - p.amount);
        this.cart.splice(index, 1);
      }
    }
  }

}
