import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'storybook-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.scss'],
})
export default class ButtonComponent {
  @Input() type?: 'primary' | 'secondary' | 'success' = 'primary';
  @Input() size?: 'medium' | 'large' = 'large';
  @Input() label = 'Button';
  @Input() isOutline = false;
  @Input() hasShadow = false;
  @Input() isDisabled = false;

  @Output() onClick = new EventEmitter<Event>();

  public get classes(): string[] {
    const btnType = !this.isDisabled? this.type : 'light';
    const classes = ['btn', `btn-${this.isOutline? 'outline-' : ''}${btnType}`];
    if (this.hasShadow) {
      classes.push('btn-shadow');
    }
    return classes;
  }
}
