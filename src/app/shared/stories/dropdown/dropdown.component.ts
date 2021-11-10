import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DropdownValue } from '@app-shared/general.model';

const DefaultLabel = 'Select an Item';
@Component({
  selector: 'sb-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export default class DropdownComponent {
  @Input() dropdownValues: DropdownValue[] = [];
  @Input() label = DefaultLabel;
  @Input() set reset(value: boolean | null) {
    if (value) {
      this.label = DefaultLabel;
    }
  }

  @Output() itemSelected = new EventEmitter<DropdownValue>();

  onItemClick(value: DropdownValue) {
    this.label = <string>value?.text;
    this.itemSelected.emit(value);
  }
  public labsTrackBy(_: number, dropValue: DropdownValue) {
    if (!dropValue) {
      return null;
    }
    return dropValue.value;
  }

  constructor() { }
}
