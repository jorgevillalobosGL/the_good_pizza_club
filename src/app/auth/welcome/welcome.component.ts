import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent {

  public redirectTo(path: string): void {
    this.router.navigate([path]);
  }

  constructor(  private router: Router ) { }

}
