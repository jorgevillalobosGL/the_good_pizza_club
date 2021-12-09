import { fakeAsync, TestBed } from '@angular/core/testing';
import { FormBuilder, Validators } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule } from '@ngrx/store';
import { of } from 'rxjs';
import { AuthService } from '../../services/auth.service';
import { UserService } from '../../services/user.service';
import { reducer } from '../store/auth.reducer';
import { SignInComponent } from './sign-in.component';

const authStubService: Partial<AuthService> = {
  createUser: (email: string, password: string, name: string): any => { },
  googleSignIn: (): any => { },
  facebookSignIn: (): any => { },
};

function fakeUserCredentialsResponse() {
  return of({
    credential: null,
    operationType: null,
    user: null
  });
}

describe('Sign In', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        StoreModule.forRoot({ 'auth': reducer }),
      ],
      declarations: [SignInComponent],
      providers: [
        FormBuilder, Validators,
        { provide: AuthService, useValue: authStubService },
        { provide: UserService, useValue: {} }
      ]

    }).compileComponents();
  });

  it('should create the component', fakeAsync(() => {
    const fixture = TestBed.createComponent(SignInComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  }));

  it('should call sign up service with correct parapeters', fakeAsync(() => {
    const fixture = TestBed.createComponent(SignInComponent);
    const component = fixture.componentInstance;
    const authService = TestBed.inject(AuthService);
    spyOn(authService, 'createUser').and.returnValue(of({
      credential: null,
      operationType: null,
      user: null
    }));
    fixture.detectChanges();
    component.isEmailValid = true;
    component.isPasswordValid = true;
    component.signUpForm.controls['email'].setValue('test@gmail.com');
    component.signUpForm.controls['password'].setValue('test');
    component.signUpForm.controls['name'].setValue('testName');
    component.onSignUp();
    expect(authService.createUser).toHaveBeenCalledWith('test@gmail.com', 'test', 'testName');
  }));

  it('should display error if password or email are not valid', fakeAsync(() => {
    const fixture = TestBed.createComponent(SignInComponent);
    const component = fixture.componentInstance;
    const authService = TestBed.inject(AuthService);
    spyOn(authService, 'createUser').and.returnValue(of({
      credential: null,
      operationType: null,
      user: null
    }));
    fixture.detectChanges();
    component.isEmailValid = false;
    component.isPasswordValid = false;
    component.onSignUp();
    expect(authService.createUser).not.toHaveBeenCalled();
    expect(component.nameState).toBe('danger');
  }));

  it('should call sign up googleLogin service', fakeAsync(() => {
    const fixture = TestBed.createComponent(SignInComponent);
    const component = fixture.componentInstance;
    const authService = TestBed.inject(AuthService);
    spyOn(authService, 'googleSignIn').and.returnValue(of({
      credential: null,
      operationType: null,
      user: null
    }));
    fixture.detectChanges();
    component.onGoogleSignUp();
    expect(authService.googleSignIn).toHaveBeenCalled();
  }));

  it('should call sign up FaceBookSignUp service', fakeAsync(() => {
    const fixture = TestBed.createComponent(SignInComponent);
    const component = fixture.componentInstance;
    const authService = TestBed.inject(AuthService);
    spyOn(authService, 'facebookSignIn').and.returnValue(fakeUserCredentialsResponse());
    fixture.detectChanges();
    component.onFaceBookSignUp();
    expect(authService.facebookSignIn).toHaveBeenCalled();
  }));
});
