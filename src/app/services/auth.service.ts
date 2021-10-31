import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { from, Observable } from 'rxjs';
import firebase from 'firebase/compat/app';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable()
export class AuthService {

  public createUser(email: string, password: string, name: string): Observable<firebase.auth.UserCredential> {
    return from(this.firebaseAuth.createUserWithEmailAndPassword(email, password)).pipe(
      tap((response) => {
        response?.user?.updateProfile({
          displayName: name
        });
      })
    );
  }

  public login(email: string, password: string): Observable<firebase.auth.UserCredential> {
    return from(this.firebaseAuth.signInWithEmailAndPassword(email, password));
  }

  public initUserStateListener(): Observable<firebase.User | null> {
    return from(this.firebaseAuth.authState);
  }

  public googleSignIn(): Observable<firebase.auth.UserCredential> {
    const provider = new firebase.auth.GoogleAuthProvider();
    return from(this.firebaseAuth.signInWithPopup(provider));
  }

  public facebookSignIn(): Observable<firebase.auth.UserCredential> {
    const provider = new firebase.auth.FacebookAuthProvider();
    return from(this.firebaseAuth.signInWithPopup(provider));
  }

  constructor(private firebaseAuth: AngularFireAuth) { }
}
