import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { User } from '@app-shared/models/user.model';
import { from, Observable } from 'rxjs';

@Injectable()
export class UserService {

  createUser(user: User): Observable<any>{
    return from(this.firestore.doc(`${user.uid}/user`).set(user));
  }

  constructor(private firestore: AngularFirestore) { }

}
