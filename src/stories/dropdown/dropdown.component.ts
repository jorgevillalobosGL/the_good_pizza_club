import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DropdownValue } from '../../app/shared/general.model';

@Component({
  selector: 'sb-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export default class DropdownComponent {
  @Input() dropdownValues: DropdownValue[] = [];
  @Input() label = 'Select an Item';
  @Output() itemSelected = new EventEmitter<DropdownValue>();
  onItemClick(value: DropdownValue) {
    this.itemSelected.emit(value);
  }
  constructor() { }
}
