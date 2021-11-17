import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { distinctUntilChanged, filter, map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  public isAuthRoute$ = this.router.events.pipe(
    filter(event => event instanceof NavigationEnd),
    startWith(null),
    distinctUntilChanged(),
    map(() => this.router.url.startsWith('/auth')),
  );


  constructor(private router: Router) { }

}
