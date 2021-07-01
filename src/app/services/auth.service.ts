/* eslint-disable @typescript-eslint/no-shadow */
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute, Router } from '@angular/router';
// import * as firebase from 'firebase';
import firebase from 'firebase/app';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/auth';
import { IUser } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  appUser$: Observable<IUser>;

  constructor(
    public afAuth: AngularFireAuth,
    private route: ActivatedRoute,
    private router: Router,
    private db: AngularFirestore) {

    // Obtiene el estado de autentificado, entonces se pudo recuperar el documento del usuario o retorna nulo
    // Get the auth state, then fetch the Firestore user document or return null
    this.appUser$ = this.afAuth.authState.pipe(
      switchMap(user => {
        // If the user is logged in, return the user details.
        if (user) {
          return this.db.doc<IUser>(`appusers/${user.uid}`).valueChanges();
        } else {
          // If the user is NOT logged in, return null.
          return of(null);
        }
      })
    );
  }

  async googleLogin() {
    const credential = await this.afAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    this.router.navigateByUrl('/home');
    return this.updateUserData(credential.user);
  }


  signUpWithEmail(data: any) {
    this.afAuth.createUserWithEmailAndPassword(data.email, data.password)
     .then( data => {
      if (data.user.emailVerified) {
        this.router.navigate(['/login']);
      } else {
        data.user.sendEmailVerification().then(() => {
          alert('Porfavor Verifique su Correo');
          this.afAuth.signOut();
        });
      }
    });
  }

  loginWithEmail(data: any) {
    this.afAuth.signInWithEmailAndPassword(data.email, data.password)
    .then(data => {
      alert('Login exitoso');
      this.router.navigateByUrl('/home');
    });

  }

  resetPassword(email: string) {
    this.afAuth.sendPasswordResetEmail(email).then(() => {
      alert('Porfavor revise su correo, le enviamos el link de reinicio de contraseña');
    }).catch((error) => {
      if (error.code === 'auth/user-not-found') {
        alert('Perdon, usuario no encontrado');
      }
    });
  }

  // Guardar los datos del usuario en firebase con Google|Facebook login
  private updateUserData(user) {
    const userRef = this.db.doc(`usersProfile/${user.uid}`);
    const data = {
      name: user.displayName,
      email: user.email,
      photoURL: user.photoURL
    };
    return userRef.set(data, { merge: true });
  }

}



