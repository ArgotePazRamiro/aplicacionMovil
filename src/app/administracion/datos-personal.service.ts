import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Personal } from './personal.model';

@Injectable({
  providedIn: 'root'
})
export class DatosPersonalService {

  private personal: Personal[] =
  [
    new Personal ('1',
                 'Alejandro',
                 'Quintana Muyba',
                 'https://images.emojiterra.com/twitter/v13.0/512px/2642.png',
                 '123456789'),
    new Personal ('2',
                 'Juan Alberto',
                 'Zarraga',
                 'https://images.emojiterra.com/twitter/v13.0/512px/2640.png',
                 '987654321'),

  ];

  constructor(private http: HttpClient) { }

  anadirPersonal(nomb: string, apel: string, cel: string)
  {
    const nuevoPersonal = new Personal(Math.floor(Math.random()*1000).toString(),
    nomb, apel, 'https://images.emojiterra.com/twitter/v13.0/512px/2642.png', cel);
    this.personal.push(nuevoPersonal);
    this.http.post('https://claseappmovil-default-rtdb.firebaseio.com/personal.json',
    {...nuevoPersonal, idPersonal:null}).subscribe();
  }

  getPersonales()
  {
    return [...this.personal];
  }

  getPersonal(idPer: string)
  {
    return {...this.personal.find(personal=> personal.idPersonal === idPer)};
  }

  borrarPersonal(idPer: string)
  {
    this.personal = this.personal.filter(personal=> personal.idPersonal !== idPer);
    this.http.delete('https://claseappmovil-default-rtdb.firebaseio.com/personal/' + idPer + '.json' ).subscribe(
      data => {
        console.log(data);
      }
    );
  }

}
