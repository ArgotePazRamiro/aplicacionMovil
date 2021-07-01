import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';
import { CartModalPage } from '../pages/cart-modal/cart-modal.page';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-venta',
  templateUrl: './venta.page.html',
  styleUrls: ['./venta.page.scss'],
})
export class VentaPage implements OnInit {

  cart = [];
  products = [];
  cartItemCount: BehaviorSubject<number>;

  constructor(private cartService: CartService, private modalCrtl: ModalController) { }

  ngOnInit()
  {
    this.products = this.cartService.getProducts();
    this.cart = this.cartService.getCart();
    this.cartItemCount = this.cartService.getCartItemCount();
  }

  addToCart(product)
  {
    this.cartService.addProduct(product);
  }

  async openCart()
  {
    const modal = this.modalCrtl.create({
      component: CartModalPage,
      cssClass: 'cart-modal'
    });
    (await modal).present();
  }

}
