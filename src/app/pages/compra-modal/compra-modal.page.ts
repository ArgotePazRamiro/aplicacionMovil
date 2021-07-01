import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CompraService, Product } from 'src/app/services/compra.service';

@Component({
  selector: 'app-compra-modal',
  templateUrl: './compra-modal.page.html',
  styleUrls: ['./compra-modal.page.scss'],
})
export class CompraModalPage implements OnInit {

  cart: Product[] = [];

  constructor(private cartService: CompraService, private modalCtrl: ModalController) { }

  ngOnInit()
  {
    this.cart = this.cartService.getCart();
  }

  decreaseCartItem(product)
  {
    this.cartService.decreaseProduct(product);
  }

  increaseCartItem(product)
  {
    this.cartService.addProduct(product);
  }

  removeCartItem(product)
  {
    this.cartService.removeProduct(product);
  }

  getTotal()
  {
    return this.cart.reduce((i, j) => i + j.price * j.amount, 0);
  }

  close()
  {
    this.modalCtrl.dismiss();
  }

  checkout()
  {

  }

}
