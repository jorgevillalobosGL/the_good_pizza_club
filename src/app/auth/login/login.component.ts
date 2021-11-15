import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AuthService } from '@app-services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnDestroy, OnInit {
  public loginForm: FormGroup;
  private destroy$: Subject<boolean> = new Subject<boolean>();

  public login() {
    const { email, password } = this.loginForm.getRawValue();
    this.authService.login(email, password).pipe(
      takeUntil(this.destroy$)
    ).subscribe(
      ({ user }) => {
        this.handleLogin(user);
      }
    );
  }

  public googleLogin() {
    this.authService.googleSignIn().subscribe(
      ({ user }) => {
        this.handleLogin(user);
      }
    );
  }

  public facebookLogin() {
    this.authService.facebookSignIn().subscribe(
      ({ user }) => {
        this.handleLogin(user);
      }
    );
  }

  private handleLogin(user: firebase.default.User | null): void {
    if (!!user) {
      this.router.navigate(['/home']);
    }
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private authService: AuthService,
  ) { }
}
