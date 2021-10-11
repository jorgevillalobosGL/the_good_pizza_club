import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-icon-button',
  templateUrl: './icon-button.component.html',
  styleUrls: ['./icon-button.component.scss']
})
export default class IconButtonComponent {
  @Input() type?: 'primary' | 'secondary' | 'success' = 'primary';
  @Input() label = 'Button';
  @Input() isOutline = false;
  @Input() hasShadow = false;
  @Input() isDisabled = false;
  @Input() showIcon = false;

  @Output() onClick = new EventEmitter<Event>();

  public get classes(): string[] {
    const btnType = !this.isDisabled? this.type : 'light';
    const classes = ['btn', `btn-${this.isOutline? 'outline-' : ''}${btnType}`];
    if (this.hasShadow) {
      classes.push('btn-shadow');
    }
    return classes;
  }

  constructor() { }
}
