import { LiveAnnouncer } from '@angular/cdk/a11y';
import { AfterViewInit, ChangeDetectorRef, Component, Input, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule, Sort } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'DataTable',
  styleUrls: ['data-table.component.scss'],
  templateUrl: 'data-table.component.html',
  imports: [MatTableModule, MatPaginatorModule,MatSortModule,CommonModule],
  standalone:true
})
export class DataTableComponent implements AfterViewInit {
  @Input() displayedColumns: string[] = [];
  @Input() dataSourceData: any[] = [];
  dataSource: MatTableDataSource<any>;

  constructor(private _liveAnnouncer: LiveAnnouncer, private cdr: ChangeDetectorRef) {
    this.dataSource = new MatTableDataSource();
  }

  @ViewChild(MatPaginator, { static: false })
  set paginator(value: MatPaginator) {
    if (this.dataSource) {
      setTimeout(() => (this.dataSource.paginator = value));
    }
  }

  @ViewChild(MatSort, { static: false })
  set sort(value: MatSort) {
    if (this.dataSource) {
      setTimeout(() => (this.dataSource.sort = value));
    }
  }

  ngAfterViewInit() {
    // Delay the initialization to allow Angular to render the view
    setTimeout(() => {
      this.dataSource = new MatTableDataSource<any>(this.dataSourceData);
  
      // Set up paginator and sort
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
  
      // Trigger change detection manually
      this.cdr.detectChanges();
    }, 0);
  }
  /** Announce the change in sort state for assistive technology. */
  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }
}