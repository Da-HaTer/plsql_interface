import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { tabsgroup } from './tabsgroup/tabsgroup.component';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule } from '@angular/material/list';
import { TableService } from './services/table.service';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,tabsgroup,MatIconModule,MatButtonModule,MatToolbarModule,MatSidenavModule,MatListModule,tabsgroup],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers:[TableService]
})
export class AppComponent {
  title = 'plsql_interface';
  responseData: any;
  errorData: any;

  constructor(private table: TableService) {}

  onFetchRows() {
    let data:any;
    data=this.table.fetch_rows('chercheur').subscribe({
      next: (processedData) => {
        // Handle the processed data here
        console.log('Processed Data:', processedData);
      },
      error: (error) => {
        // Handle errors
        console.error('Error:', error);
      }
    });
  }
}