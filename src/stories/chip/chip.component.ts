import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'sb-chip',
  templateUrl: './chip.component.html',
  styleUrls: ['./chip.component.scss']
})
export default class ChipComponent {
  @Input() label = 'text';
  @Input() type?: 'primary' | 'secondary' = 'primary';
  @Output() onClick = new EventEmitter<Event>();

  public get classes(): string[] {
    const classes = ['badge', `badge-${this.type}`];
    return classes;
  }

  public onCrossClick(event: PointerEvent) {
    this.onClick.emit(event);
  }

  constructor() { }
}
