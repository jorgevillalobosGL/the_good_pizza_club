import { Component, ViewChild } from '@angular/core';
import { TabsetComponent } from 'ngx-bootstrap/tabs';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent {
  public hideNextBtn: boolean = false;
  @ViewChild('staticTabs', { static: false }) staticTabs?: TabsetComponent;

  public onNextStep(): void {
    const selectedIndexTab = this.staticTabs?.tabs.findIndex(tab => tab.active) || 0;
    if (this.staticTabs?.tabs[selectedIndexTab + 1]) {
      this.staticTabs.tabs[selectedIndexTab + 1].active = true;
    }
  }

  public onBackToFirstStep(): void {
    if (this.staticTabs?.tabs[0]) {
      this.staticTabs.tabs[0].active = true;
    }
  }

  constructor() { }

}
