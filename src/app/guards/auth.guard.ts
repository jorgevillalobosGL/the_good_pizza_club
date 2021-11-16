import { Injectable } from '@angular/core';
import { CanLoad, Router } from '@angular/router';
import { EMPTY, Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { ToastrService } from 'ngx-toastr';
import { select, Store } from '@ngrx/store';
import { AuthState, selectUser } from '@app-auth/store/auth.reducer';

const NOT_AUTHORIZATION_MESSAGE = 'You are not authorized to view this page, please log in first';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad {
  canLoad(): Observable<boolean> {
    return this.authStore.pipe(
      select(selectUser),
      map(user => !!user),
      tap(user => {
        if (!user) {
          this.toastr.error(NOT_AUTHORIZATION_MESSAGE);
          this.router.navigate(['/auth']);
        }
      }),
      catchError(() => {
        this.router.navigate(['/auth']);
        return EMPTY;
      })
    );
  }

  constructor(
    private toastr: ToastrService,
    private router: Router,
    private authStore: Store<AuthState>,
  ) { }
}
