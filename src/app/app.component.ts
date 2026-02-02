import { Component } from '@angular/core';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule }    from '@angular/material/menu';
import { MatButtonModule }  from '@angular/material/button';
import { MatIconModule }    from '@angular/material/icon';
import { RouterOutlet } from '@angular/router';
import { ɵɵRouterLink } from "@angular/router/testing";


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['../demo-styling.css'],
    standalone: true,
    imports: [
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    RouterOutlet,
    ɵɵRouterLink
]
})
export class AppComponent {
  title = 'piacenza-summer-sport';
}
