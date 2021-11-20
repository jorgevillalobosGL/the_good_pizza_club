import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { User } from '@app-shared/models/user.model';
import { from, Observable } from 'rxjs';
import { ShoppingCardItem } from '@app-shared/models/general.model';
import { map, tap } from 'rxjs/operators';

@Injectable()
export class UserService {

  createUser(user: User): Observable<any>{
    return from(this.firestore.doc(`${user.uid}/user`).set(user));
  }

  saveShoppingCard(uid: string, shoppingCard: ShoppingCardItem[]): Observable<any>{
    const _shoppingCard = {
      products: shoppingCard
    };
    return from(this.firestore.doc(`${uid}/shoppingCard`).set(_shoppingCard));
  }

  getShoppingCard(uid: string): Observable<ShoppingCardItem[]>{
    return this.firestore.doc(`${uid}/shoppingCard`).get().pipe(
      map((shoppingCard: any) => shoppingCard.data()?.products)
    );
  }

  constructor(private firestore: AngularFirestore) { }

}
