// import {Component} from '@angular/core';
// import { CommonModule } from '@angular/common';
// import {MatTabsModule} from '@angular/material/tabs';
import {DataTableComponent } from '../data-table/data-table.component';
// // import { DynamicTree } from '../dynamic-tree/dynamic-tree.component';

// /**
//  * @title Tab group with dynamic height based on tab contents
//  */
// @Component({
//   selector: 'tabsgroup',
//   templateUrl: 'tabsgroup.component.html',
//   styleUrls: ['tabsgroup.component.scss'],
//   standalone: true,
//   imports: [MatTabsModule,DataTableComponent,CommonModule],
// })
// export class tabsgroup {
//   tabs = ['First', 'Second', 'Third'];
// }

import {Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { TableService } from '../services/table.service';

/**
 * @title Tab group with dynamically changing tabs
 */
@Component({
  selector: 'tabsgroup',
  templateUrl: 'tabsgroup.component.html',
  styleUrls: ['tabsgroup.component.scss'],
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatTabsModule,
    MatIconModule,
    CommonModule,
    DataTableComponent
  ],
})
export class tabsgroup {
  constructor(private table: TableService) {}

  tabs = ['First', 'Second', 'Third'];
  selected = new FormControl(0);
  dynamicData: any[] = []//[]
        // [{
        //     chno: 1,
        //     chnom: "John Doe",
        //     grade: "PR",
        //     statut: "P",
        //     daterecrut : "2019-12-31T23:00:00Z",
        //     salaire: 80000,
        //     prime: 5000,
        //     email: "john.doe@example.com",
        //     supno: null,
        //     labno: 1,
        //     facno: 1
        // }];
  dynamicColumns: string[] = [] //[]
  // ['chno', 'chnom', 'grade', 'statut', 'daterecrut', 'salaire', 'prime', 'email', 'supno', 'labno', 'facno'];

  addTab(selectAfterAdding: boolean) {
    this.tabs.push('New');

    if (selectAfterAdding) {
      this.selected.setValue(this.tabs.length - 1);
    }
  }

  removeTab(index: number) {
    this.tabs.splice(index, 1);
    this.selected.setValue(index);
  }



  
  ngOnInit() {
    let data:any;
    data=this.table.fetch_rows('chercheur').subscribe({
      next: (processedData) => {
        this.dynamicData=processedData.dynamicData;
        this.dynamicColumns = Object.keys(this.dynamicData[0]);
      },
      error: (error) => {
        console.error('Error:', error);
      }
    });
  }

}