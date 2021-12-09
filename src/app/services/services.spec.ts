import { TestBed } from '@angular/core/testing';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from './auth.service';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { of } from 'rxjs';

const authState = {
  displayName: null,
  isAnonymous: true,
  uid: '17WvU2Vj58SnTz8v7EqyYYb0WRc2'
};

const returnUser = (email: string, password: string) => of({
  user: {
    uid: '17WvU2Vj58SnTz8v7EqyYYb0WRc2',
    email, password,
    updateProfile: () => of(null)
  }
});

const mockAngularFireAuth: any = {
  authState: of(authState),
  createUserWithEmailAndPassword: returnUser,
  signInWithEmailAndPassword: returnUser,
  signInWithPopup: returnUser,
  currentUser: of({
    uid: '17WvU2Vj58SnTz8v7EqyYYb0WRc2',
    email: 'current@email.com'
  })
};

describe('Service', () => {
  let authService: AuthService;
  let store: MockStore;
  let firebaseAuth: AngularFireAuth;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      declarations: [],
      providers: [
        AuthService,
        provideMockStore({}),
        { provide: ToastrService, useValue: {} },
        { provide: AngularFireAuth, useValue: mockAngularFireAuth },
      ]
    });

    authService = TestBed.inject(AuthService);
    store = TestBed.inject(MockStore);
  });

  it('should be created', () => {
    expect(authService).toBeTruthy();
  });

  it('should get from Firebase initUserStateListener', done => {
    authService.initUserStateListener().subscribe(
      x => {
        expect(x).toBe(authState as any);
        done();
      }
    );
  });

  it('should isUserAuth retun true if is logged', done => {
    authService.isUserAuth().subscribe(
      x => {
        expect(x).toBe(true);
        done();
      }
    );
  });

  it('should create user and dispatch the correct store action', done => {
    authService.createUser('tets@test.com', 'testPass?', 'name').subscribe(
      x => {
        expect(x?.user?.email).toBe('tets@test.com');
        done();
      }
    );
  });

  it('should login and return valid user', done => {
    authService.login('tets@test.com', 'testPass?').subscribe(
      x => {
        expect(x?.user?.email).toBe('tets@test.com');
        done();
      }
    );
  });

  it('should login with Google and return valid user', done => {
    spyOn(mockAngularFireAuth, 'signInWithPopup').and.callThrough();
    authService.googleSignIn().subscribe(
      x => {
        expect(mockAngularFireAuth.signInWithPopup).toHaveBeenCalled();
        done();
      }
    );
  });

  it('should login with Facebook and return valid user', done => {
    spyOn(mockAngularFireAuth, 'signInWithPopup').and.callThrough();
    authService.facebookSignIn().subscribe(
      x => {
        expect(mockAngularFireAuth.signInWithPopup).toHaveBeenCalled();
        done();
      }
    );
  });

  it('should return current logged user', done => {
    authService.getCurrentUser().subscribe(
      x => {
        expect(x).toEqual({ uid: '17WvU2Vj58SnTz8v7EqyYYb0WRc2', email: 'current@email.com' } as any);
        done();
      }
    );
  });
});
