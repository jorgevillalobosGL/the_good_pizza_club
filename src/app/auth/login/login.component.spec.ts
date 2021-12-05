import { fakeAsync, flush, TestBed } from '@angular/core/testing';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule } from '@ngrx/store';
import { UserCredential } from 'firebase/auth';
import { of } from 'rxjs';
import { AuthService } from '../../services/auth.service';
import { UserService } from '../../services/user.service';
import { reducer } from '../store/auth.reducer';
import { LoginComponent } from './login.component';

const authStubService: Partial<AuthService> = {
  login: (email: string, password: string): any => { },
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

describe('Login', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        StoreModule.forRoot({ 'auth': reducer }),
      ],
      declarations: [LoginComponent],
      providers: [
        FormBuilder, Validators,
        { provide: AuthService, useValue: authStubService },
        { provide: UserService, useValue: {} }
      ]

    }).compileComponents();
  });

  it('should create the component', fakeAsync(() => {
    const fixture = TestBed.createComponent(LoginComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  }));

  it('should call auth login service with correct parapeters', fakeAsync(() => {
    const fixture = TestBed.createComponent(LoginComponent);
    const component = fixture.componentInstance;
    const authService = TestBed.inject(AuthService);
    spyOn(authService, 'login').and.returnValue(of({
      credential: null,
      operationType: null,
      user: null
    }));
    fixture.detectChanges();
    component.loginForm.controls['email'].setValue('test@gmail.com');
    component.loginForm.controls['password'].setValue('test');
    component.login();
    expect(authService.login).toHaveBeenCalledWith('test@gmail.com', 'test');
  }));

  it('should call auth googleLogin service', fakeAsync(() => {
    const fixture = TestBed.createComponent(LoginComponent);
    const component = fixture.componentInstance;
    const authService = TestBed.inject(AuthService);
    spyOn(authService, 'googleSignIn').and.returnValue(of({
      credential: null,
      operationType: null,
      user: null
    }));
    fixture.detectChanges();
    component.googleLogin();
    expect(authService.googleSignIn).toHaveBeenCalled();
  }));

  it('should call auth facebookLogin service', fakeAsync(() => {
    const fixture = TestBed.createComponent(LoginComponent);
    const component = fixture.componentInstance;
    const authService = TestBed.inject(AuthService);
    spyOn(authService, 'facebookSignIn').and.returnValue(fakeUserCredentialsResponse());
    fixture.detectChanges();
    component.facebookLogin();
    expect(authService.facebookSignIn).toHaveBeenCalled();
  }));
});

