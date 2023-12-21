import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { toolbar } from './toolbar/toolbar.component';
import { DataTableComponent } from './data-table/data-table.component';
import { tabsgroup } from './tabsgroup/tabsgroup.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,toolbar,DataTableComponent,tabsgroup],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'plsql_interface';
}