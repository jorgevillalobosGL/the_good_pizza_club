import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { takeUntil } from 'rxjs/operators';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit, OnDestroy {
  public signUpForm: FormGroup;
  public isEmailValid = false;
  public isPasswordValid = false;
  private destroy$: Subject<boolean> = new Subject<boolean>();

  onSignUp() {
    if(this.isPasswordValid && this.isEmailValid && this.signUpForm.valid) {
      const { email, password, name } = this.signUpForm.getRawValue();
      this.authService.createUser(email, password, name).pipe(
        takeUntil(this.destroy$)
      ).subscribe(
        ({user}) => {
          this.handleSignUp(user);
        }
      );
    }
  }

  onGoogleSignUp() {
    this.authService.googleSignIn().pipe(
      takeUntil(this.destroy$)
    ).subscribe(
      ({ user }) => {
        this.handleSignUp(user);
      }
    );
  }

  onFaceBookSignUp() {
    this.authService.facebookSignIn().pipe(
      takeUntil(this.destroy$)
    ).subscribe(
      ({ user }) => {
        this.handleSignUp(user);
      }
    );
  }

  private handleSignUp(user: firebase.default.User | null): void {
    if (!!user) {
      this.router.navigate(['/home']);
    }
  }

  public get email(): FormControl {
    return this.signUpForm.get('email') as FormControl;
  }

  ngOnInit() {
    this.signUpForm = this.formBuilder.group({
      email: [''],
      password: [''],
      name: ['', Validators.required],
    });
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  constructor(
    private router: Router,
    private authService: AuthService,
    private formBuilder: FormBuilder,
  ) { }
}
