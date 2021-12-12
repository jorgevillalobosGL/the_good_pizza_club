import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-errorPage',
  templateUrl: './errorPage.component.html'
})
export class ErrorPageComponent {

  public onReturnHome(): void {
    this.router.navigate(['/home']);
  }

  constructor(
    private router: Router,
  ) { }

}
