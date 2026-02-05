import { Component, HostListener, inject } from '@angular/core';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterOutlet } from '@angular/router';
import { ɵɵRouterLink } from "@angular/router/testing";
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    RouterOutlet,
    ɵɵRouterLink
  ]
})
export class AppComponent {
  title = 'piacenza-summer-sport';

  private bp = inject(BreakpointObserver);

  isMobile = false;
  isShrunk = false;
  sidenavOpen = false;

  constructor() {
    // Switch sidenav mode based on viewport size
    this.bp.observe([Breakpoints.Handset]).subscribe(state => {
      this.isMobile = state.matches;
    });
  }

  // Scroll handler attached to mat-sidenav-content (see template)
  onContentScroll(evt: Event) {
    const el = evt.target as HTMLElement;
    this.isShrunk = el.scrollTop > 50;
  }

  // Fallback if the window is the scroll container (not typical here)
  @HostListener('window:scroll')
  onWindowScroll() {
    if (this.isMobile) return; // when mobile we normally scroll inside mat-sidenav-content
    this.isShrunk = window.scrollY > 50;
  }
}
