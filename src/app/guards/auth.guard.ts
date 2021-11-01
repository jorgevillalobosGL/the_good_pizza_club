import { Injectable } from '@angular/core';
import { CanLoad, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../services/auth.service';

const NOT_AUTHORIZATION_MESSAGE = 'You are not authorized to view this page, please log in first';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad {
  canLoad(): Observable<boolean> {
    return this.authService.isUserAuth().pipe(
      tap((isAuth) => {
        if (!isAuth) {
          this.toastr.error(NOT_AUTHORIZATION_MESSAGE);
          this.router.navigate(['/auth']);
        }
      })
    );
  }

  constructor(
    private toastr: ToastrService,
    private router: Router,
    private authService: AuthService
  ) { }
}
