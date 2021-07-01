import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    children:
    [
      {
        path: '',
        loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
      },
      {
        path: 'administracion',
        children:
        [
          {
            path: '',
            loadChildren: () => import('./administracion/administracion.module').then( m => m.AdministracionPageModule)
          },
          {
            path: 'cliente',
            children:
            [
              {
                path: '',
                loadChildren: () => import('./administracion/cliente/cliente.module').then( m => m.ClientePageModule)
              },
              {
                path: 'nuevo',
                loadChildren: () => import('./administracion/cliente/datos/datos.module').then( m => m.DatosPageModule)
              },
              {
                path: ':idCliente',
                loadChildren: () => import('./administracion/cliente/datos/datos.module').then(m => m.DatosPageModule)
              }
            ]
          },
          {
            path: 'vista',
            loadChildren: () => import('./administracion/cliente/tarjeta-cliente/vista-tarjeta/vista-tarjeta.module').then(
               m => m.VistaTarjetaPageModule)
          }
        ]

      },
      {
        path: 'tienda',
        loadChildren: () => import('./tienda/tienda.module').then( m => m.TiendaPageModule)
      },
      {
        path: 'venta',
        loadChildren: () => import('./venta/venta.module').then( m => m.VentaPageModule)
      },
      {
        path: 'compra',
        loadChildren: () => import('./compra/compra.module').then( m => m.CompraPageModule)
      },
    ]
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'nuevo',
    loadChildren: () => import('./administracion/cliente/tarjeta-cliente/nueva-tarjeta/nueva-tarjeta.module').then(
       m => m.NuevaTarjetaPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'cart-modal',
    loadChildren: () => import('./pages/cart-modal/cart-modal.module').then( m => m.CartModalPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
