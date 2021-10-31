import {
  Component,
  Input,
  forwardRef,
  ViewEncapsulation,
  ViewChild,
  ElementRef,
  Output,
  EventEmitter,
} from '@angular/core';
import {
  NG_VALUE_ACCESSOR,
  ControlValueAccessor
} from '@angular/forms';
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

export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  // eslint-disable-next-line no-use-before-define
  useExisting: forwardRef(() => TextInputComponent),
  multi: true,
};
@Component({
  selector: 'sb-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
})
export default class TextInputComponent implements ControlValueAccessor {

  @Input() placeholder: string = '';
  @Input() disabled: boolean = false;
  @Input() type: 'text' | 'password' | 'email' = 'text';
  @Input() state: 'success' | 'danger' | null = null;
  @Input() disableValidations = false;
  @Input() customErrorMessage: string | null;
  @Output() isValid = new EventEmitter<boolean>();
  public _state = this.state;
  public keyStreem$: Subject<string> = new Subject();
  public inputErrors$: Observable<any> = new Observable();

  @ViewChild('input') inputRef: ElementRef;
  get classes() {
    return [`type-${this.type}`, `state-${this.state || this._state}`];
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
        if(this.disableValidations) {
          return of({ hasErrors: false });
        }

        if (this.type === 'email') {
          this.isValid.emit(EmailRegExp.test(String(text).toLowerCase()));
          return of({
            hasErrors: !EmailRegExp.test(String(text).toLowerCase()),
            message: EmailErrorMessage,
          });
        } else if (this.type === 'password') {
          return of(this.checkPassword(text));
        }
        this.isValid.emit(true);
        return of({ hasErrors: false });
      }),
      tap(inputError => {
        const tempStatus = inputError.hasErrors ? 'danger' : 'success';
        this._state = this.state || tempStatus;
      })
    );
  }

  private checkPassword(password: string) {
    const includeSpaces = PasswordHasSpacesRegExp.test(password);
    const hasIndicatedLength = PasswordLength.test(password);
    const includeNumbers = PasswordHasNumber.test(password);
    const includeUpperLetter = PasswordHasUppercase.test(password);
    const hasErrors = includeSpaces ||
        !hasIndicatedLength ||
        !includeNumbers ||
        !includeUpperLetter;
    this.isValid.emit(!hasErrors);
    return {
      hasErrors,
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

  // ControlValueAccessor
  private innerValue: any = '';

  onChange(e: Event, value: any) {
    this.innerValue = value;
    this.propagateChange(this.innerValue);
  }

  get value(): any {
    return this.innerValue;
  }

  set value(v: any) {
    if (v !== this.innerValue) {
      this.innerValue = v;
    }
  }

  propagateChange = (_: any) => {};

  writeValue(value: any) {
    this.innerValue = value;
  }

  registerOnChange(fn: any) {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any) {}
}
