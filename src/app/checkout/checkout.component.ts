import { Component, ViewChild } from '@angular/core';
import { TabsetComponent } from 'ngx-bootstrap/tabs';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent {
  @ViewChild('staticTabs', { static: false }) staticTabs?: TabsetComponent;

  selectTab(tabId: number) {
    if (this.staticTabs?.tabs[tabId]) {
      this.staticTabs.tabs[tabId].active = true;
    }
  }

  onNextStep() {
    const selectedIndexTab = this.staticTabs?.tabs.findIndex(tab => tab.active) || 0;
    if (this.staticTabs?.tabs[selectedIndexTab + 1]) {
      this.staticTabs.tabs[selectedIndexTab + 1].active = true;
    }
  }

  constructor() { }

}
