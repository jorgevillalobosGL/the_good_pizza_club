import { Component, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  private modalRef?: BsModalRef;

  public onGoToMenu() {
    this.router.navigate(['/menu']);
  }

  public openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, { id: 1, class: 'modal-xl' });
  }

  constructor(
    private router: Router,
    private modalService: BsModalService
  ) { }

}
