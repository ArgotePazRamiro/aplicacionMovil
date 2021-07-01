export class Personal {

  idPersonal: string;
  nombre: string;
  apellido: string;
  imagenURL: string;
  celular: string;

  constructor(idPer: string, nom: string, ape: string, url: string, cel: string)
  {
    this.idPersonal = idPer;
    this.nombre = nom;
    this.apellido = ape;
    this.imagenURL = url;
    this.celular = cel;
  }

}
