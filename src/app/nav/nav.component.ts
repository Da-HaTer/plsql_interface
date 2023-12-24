import {Component} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule } from '@angular/material/list';
import {tabsgroup } from '../tabsgroup/tabsgroup.component';
/**
 * @title Basic toolbar
 */
@Component({
  selector: 'toolbar',
  templateUrl: 'nav.component.html',
  styleUrls: ['nav.component.scss'],
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatIconModule,MatListModule,MatSidenavModule,tabsgroup],
})
export class toolbar {
}
