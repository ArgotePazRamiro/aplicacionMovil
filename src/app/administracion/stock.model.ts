export class Stock {

  idStock: string;
  nombre: string;
  tipo: string;
  imagenURL: string;
  cantidad: string;

  constructor(idSto: string, nom: string, tip: string, url: string, can: string)
  {
    this.idStock = idSto;
    this.nombre = nom;
    this.tipo = tip;
    this.imagenURL = url;
    this.cantidad = can;
  }

}
