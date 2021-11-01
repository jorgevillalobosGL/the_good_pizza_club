import { Injectable } from '@angular/core';
import { catchError, map, tap } from 'rxjs/operators';
import { EMPTY, from, Observable } from 'rxjs';
import firebase from 'firebase/compat/app';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class AuthService {

  public initUserStateListener(): Observable<firebase.User | null> {
    return from(this.firebaseAuth.authState);
  }

  public isUserAuth(): Observable<boolean> {
    return this.initUserStateListener().pipe(
      map((user) => {
        return !!user;
      })
    );
  }

  public createUser(email: string, password: string, name: string): Observable<firebase.auth.UserCredential> {
    return from(this.firebaseAuth.createUserWithEmailAndPassword(email, password)).pipe(
      tap((response) => {
        response?.user?.updateProfile({
          displayName: name
        });
      }),
      catchError((error) => {
        this.toastr.error(error.message.replace('Firebase:', ''), 'Error');
        return EMPTY;
      })
    );
  }

  public login(email: string, password: string): Observable<firebase.auth.UserCredential> {
    return from(this.firebaseAuth.signInWithEmailAndPassword(email, password)).pipe(
      catchError((error) => {
        this.toastr.error(error.message.replace('Firebase:', ''), 'Error');
        return EMPTY;
      })
    );
  }

  public googleSignIn(): Observable<firebase.auth.UserCredential> {
    const provider = new firebase.auth.GoogleAuthProvider();
    return from(this.firebaseAuth.signInWithPopup(provider)).pipe(
      catchError((error) => {
        this.toastr.error(error.message.replace('Firebase:', ''), 'Error');
        return EMPTY;
      })
    );
  }

  public facebookSignIn(): Observable<firebase.auth.UserCredential> {
    const provider = new firebase.auth.FacebookAuthProvider();
    return from(this.firebaseAuth.signInWithPopup(provider)).pipe(
      catchError((error) => {
        this.toastr.error(error.message.replace('Firebase:', ''), 'Error');
        return EMPTY;
      })
    );
  }

  constructor(
    private toastr: ToastrService,
    private firebaseAuth: AngularFireAuth
  ) { }
}
