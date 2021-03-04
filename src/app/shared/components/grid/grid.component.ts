import { SelectionModel } from '@angular/cdk/collections';
import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css'],
})
export class GridComponent implements OnInit {
  isLoading = true;
  noData: any;
  @Input() filter: boolean;
  @Input() pagination: boolean;
  @Input() uniqueSelection: boolean;
  @Input() export: boolean;
  @Input() hiddenColumns: number[] = [];
  @Input() paginationSizes: number[] = [5, 10, 15];
  @Input() defaultPageSize = this.paginationSizes[1];
  @Input() public set tableData(tableData: any[]) {
    setTimeout(() => {
      this.isLoading = false;
      this.setTableDataSource(tableData);
      this.noData = this.dataSource
        .connect()
        .pipe(map((data) => data.length === 0));
    }, 2000);
  }
  @Input() columnHeader;
  objectKeys = Object.keys;
  dataSource: MatTableDataSource<any>;
  @Output() editData = new EventEmitter<any>();
  @Output() deleteData = new EventEmitter<any>();
  @Output() detailData = new EventEmitter<any>();
  @Output() pdfData = new EventEmitter<any>();
  @Output() selectData = new EventEmitter<any>();
  @Output() checkData = new EventEmitter<any>();

  @ViewChild(MatPaginator) paginator: MatPaginator;
  selection = new SelectionModel<any>(true, []);

  ngOnInit() {}
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  setTableDataSource(data: any) {
    this.dataSource = new MatTableDataSource<any>(data);
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  detailRow(row) {
    this.detailData.emit(row);
  }

  editRow(row) {
    this.editData.emit(row);
  }

  pdfRow(row) {
    this.pdfData.emit(row);
  }

  selectRow(row) {
    this.selectData.emit(row);
  }

  deleteRow(row) {
    this.deleteData.emit(row);
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected()
      ? this.selection.clear()
      : this.dataSource.data.forEach((row) => {
          this.selection.select(row);
          console.log(row);
        });
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: any): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${
      row.position + 1
    }`;
  }

  takeCheck(row) {
    this.checkData.emit(row);
  }
}
