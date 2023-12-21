import {Component} from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import {DataTableComponent } from '../data-table/data-table.component';
import { DynamicTree } from '../dynamic-tree/dynamic-tree.component';

/**
 * @title Tab group with dynamic height based on tab contents
 */
@Component({
  selector: 'tabsgroup',
  templateUrl: 'tabsgroup.component.html',
  styleUrls: ['tabsgroup.component.scss'],
  standalone: true,
  imports: [MatTabsModule,DataTableComponent,DynamicTree],
})
export class tabsgroup {}