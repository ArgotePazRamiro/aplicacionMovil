export class Cliente {

  idCliente: string;
  nombre: string;
  apellido: string;
  imagenURL: string;
  celular: string;

  constructor(idCli: string, nom: string, ape: string, url: string, cel: string)
  {
    this.idCliente = idCli;
    this.nombre = nom;
    this.apellido = ape;
    this.imagenURL = url;
    this.celular = cel;
  }

}
