import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { UserService } from '@app-services/user.service';
import { createUser, createUserSuccess, createUserFailure } from './auth.actions';
import { of } from 'rxjs';

@Injectable()
export class AuthEffects {

  createUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createUser),
      mergeMap(action => this.userService.createUser(action.user).pipe(
        map(() => createUserSuccess()),
        catchError(() => of(createUserFailure()))
      ))
    )
  );

  constructor(
    private actions$: Actions,
    private userService: UserService
  ) { }

}
