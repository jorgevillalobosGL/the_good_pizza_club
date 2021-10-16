import { Component, Input, OnInit } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { debounceTime, switchMap, tap } from 'rxjs/operators';

const EmailRegExp =
/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const PasswordHasSpacesRegExp = /^(.*\s+.*)+$/;
const PasswordLength = /^[\p{Z}\s]*(?:[^\p{Z}\s][\p{Z}\s]*){7,}$/;
const PasswordHasNumber = /\d/;
const PasswordHasUppercase = /^(.*[A-Z]+.*)+$/;
const EmailErrorMessage = 'Please enter a valid email address.';
const IncludeSpacesErrorMessage = 'Can’t contain spaces.';
const HasIndicatedLengthErrorMessage = 'Must be at least 7 characters long.';
const IncludeNumbersErrorMessage = 'Must include a number.';
const IncludeUpperLetterMessage = 'Must include at least one upper lettter case.';

@Component({
  selector: 'sb-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss'],
})
export default class TextInputComponent implements OnInit {
  @Input() placeholder: string = '';
  @Input() disabled: boolean = false;
  @Input() type: 'text' | 'password' | 'email' = 'text';
  @Input() set state(state: 'success' | 'danger') {
    this._state = state || 'success';
  }

  public _state= 'success';
  public keyStreem$: Subject<string> = new Subject();
  public inputErrors$: Observable<any> = new Observable();

  get classes() {
    return [`type-${this.type}`, `state-${this._state}`];
  }

  get iconClass() {
    let icon;
    switch (this.type) {
    case 'password':
      icon = 'icon-lock';
      break;
    case 'email':
      icon = 'icon-mail';
      break;
    default:
      icon = '';
      break;
    }
    return [icon];
  }

  public onKey(algo: KeyboardEvent): void {
    this.keyStreem$.next((algo.target as HTMLInputElement).value);
  }

  private inputErrorsSubscription(): void {
    this.inputErrors$ = this.keyStreem$.pipe(
      debounceTime(500),
      switchMap((text) => {
        if (this.type === 'email') {
          return of({
            hasErrors: !EmailRegExp.test(String(text).toLowerCase()),
            message: EmailErrorMessage,
          });
        } else if (this.type === 'password') {
          return of(this.checkPassword(text));
        }
        return of({ hasErrors: false });
      }),
      tap(inputError => {
        this._state = inputError.hasErrors ? 'danger' : 'success';
      })
    );
  }

  private checkPassword(password: string) {
    const includeSpaces = PasswordHasSpacesRegExp.test(password);
    const hasIndicatedLength = PasswordLength.test(password);
    const includeNumbers = PasswordHasNumber.test(password);
    const includeUpperLetter = PasswordHasUppercase.test(password);

    return {
      hasErrors:
        includeSpaces ||
        !hasIndicatedLength ||
        !includeNumbers ||
        !includeUpperLetter,
      message: `Password ${includeSpaces ? IncludeSpacesErrorMessage : ''} 
                ${!hasIndicatedLength ? HasIndicatedLengthErrorMessage : ''}
                ${!includeNumbers ? IncludeNumbersErrorMessage : ''}
                ${!includeUpperLetter ? IncludeUpperLetterMessage : ''}
                Password doesn’t match.`,
    };
  }

  ngOnInit(): void {
    this.inputErrorsSubscription();
  }

  constructor() {}
}
