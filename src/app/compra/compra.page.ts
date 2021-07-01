import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';
import { CompraModalPage } from '../pages/compra-modal/compra-modal.page';
import { CompraService } from '../services/compra.service';
@Component({
  selector: 'app-compra',
  templateUrl: './compra.page.html',
  styleUrls: ['./compra.page.scss'],
})
export class CompraPage implements OnInit {

  cart = [];
  products = [];
  cartItemCount: BehaviorSubject<number>;

  constructor(private cartService: CompraService, private modalCtrl: ModalController) { }

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
    const modal = this.modalCtrl.create({
      component: CompraModalPage,
      cssClass: 'compra-modal'
    });
    (await modal).present();
  }

}
