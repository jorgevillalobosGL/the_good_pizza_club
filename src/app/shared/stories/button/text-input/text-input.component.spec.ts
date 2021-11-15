import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { take } from 'rxjs/operators';
import TextInputComponent from './text-input.component';

describe('Text-Input Story', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        TextInputComponent
      ],
    }).compileComponents();
  });

  it('should be type "text" and no icon as default', () => {
    const fixture = TestBed.createComponent(TextInputComponent);
    const app = fixture.componentInstance;
    expect(app.classes[0]).toEqual('type-text');
    expect(app.iconClass).toEqual(['']);
  });

  describe('Input type Email', () => {
    it('should display email icon', () => {
      const fixture = TestBed.createComponent(TextInputComponent);
      const app = fixture.componentInstance;
      app.type = 'email';
      app.state= 'success';
      expect(app.classes).toEqual(['type-email', 'state-success']);
      expect(app.iconClass).toEqual(['icon-mail']);
    });

    it('should display an error when email doesn’t match the format', done => {
      const fixture = TestBed.createComponent(TextInputComponent);
      const app = fixture.componentInstance;
      (app as any).inputErrorsSubscription();
      app.type = 'email';
      app.inputErrors$.pipe(
        take(1)
      ).subscribe(
        result => {
          expect(result?.hasErrors).toBeTruthy();
          expect(result.message).toEqual('Please enter a valid email address.');
          done();
        }
      );
      app.keyStreem$.next('email');
    });
  });

  describe('Input type Password', () => {
    it('should display lock icon', () => {
      const fixture = TestBed.createComponent(TextInputComponent);
      const app = fixture.componentInstance;
      app.type = 'password';
      app.state= 'success';
      expect(app.classes).toEqual(['type-password', 'state-success']);
      expect(app.iconClass).toEqual(['icon-lock']);
    });

    it('should display an error when password is not at least 7 characters long.', () => {
      const fixture = TestBed.createComponent(TextInputComponent);
      const app = fixture.componentInstance;
      app.type = 'password';
      const result = (app as any).checkPassword('mypass');
      expect(result.hasErrors).toBeTruthy();
      expect(result.message).toContain('Must be at least 7 characters long.');
    });

    it('should display an error when password has empty spaces.', () => {
      const fixture = TestBed.createComponent(TextInputComponent);
      const app = fixture.componentInstance;
      app.type = 'password';
      const result = (app as any).checkPassword('my pass');
      expect(result.hasErrors).toBeTruthy();
      expect(result.message).toContain('Can’t contain spaces.');
    });

    it('should display an error when password has not numbers', () => {
      const fixture = TestBed.createComponent(TextInputComponent);
      const app = fixture.componentInstance;
      app.type = 'password';
      const result = (app as any).checkPassword('mypass');
      expect(result.hasErrors).toBeTruthy();
      expect(result.message).toContain('Must include a number.');
    });

    it('should display an error when password doesn’t include Upper Case letter', () => {
      const fixture = TestBed.createComponent(TextInputComponent);
      const app = fixture.componentInstance;
      app.type = 'password';
      const result = (app as any).checkPassword('mypass');
      expect(result.hasErrors).toBeTruthy();
      expect(result.message).toContain('Must include at least one upper lettter case.');
    });

    it('should not display an error when password match all rules.', () => {
      const fixture = TestBed.createComponent(TextInputComponent);
      const app = fixture.componentInstance;
      app.type = 'password';
      const result = (app as any).checkPassword('myp4ssWord');
      expect(result.hasErrors).toBeFalsy();
    });
  });
});
