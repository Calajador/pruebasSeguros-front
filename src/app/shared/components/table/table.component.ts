import { SelectionModel } from '@angular/cdk/collections';
import {
  Component,
  AfterViewInit,
  ViewChild,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements AfterViewInit {
  optionsReserved = ['grid.edit', 'grid.delete', 'grid.detail', 'grid.doc'];
  typesExport = ['xlsx', 'csv'];
  itemSelected: any[] = [];
  multipleSelected: boolean = false;
  dataSource: MatTableDataSource<any>;
  selection = new SelectionModel<any>(false, []);
  objectKeys = Object.keys;
  noData: any;
  isLoading = true;

  @Input() filter: boolean = false;
  @Input() order: boolean = false;
  @Input() export: boolean = false;
  @Input() columnHeader;
  @Input() selectedItem: boolean = false;
  @Input() public set isMultipleSelected(multiple: boolean) {
    this.setSelectionModel(multiple);
  }
  @Input() public set tableData(data: any[]) {
    this.loadData(data);
  }
  @Input() paginationSizes: number[] = [];
  @Input() defaultPageSize = this.paginationSizes[1];
  @Input() hiddenColumns: number[] = [];

  @Output() editData = new EventEmitter<any>();
  @Output() deleteData = new EventEmitter<any>();
  @Output() detailData = new EventEmitter<any>();
  @Output() pdfData = new EventEmitter<any>();
  @Output() selectData = new EventEmitter<any>();

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  //Expone las cabeceras de la tabla, si tiene selección crea la cabecera de dicha columna
  get displayedColumns() {
    let displayedColumns = Object.keys(this.columnHeader);
    if (this.selectedItem) {
      displayedColumns.unshift('select');
    }
    return displayedColumns;
  }

  //Validación de campo reservado
  reserverCol(option: string) {
    return this.optionsReserved.includes(option);
  }

  //Obtiene el valor del campo correspondiente a la acción
  textActionTable(columHeader: string) {
    switch (columHeader) {
      case this.optionsReserved[0]:
        return 'edit';
      case this.optionsReserved[1]:
        return 'delete';
      case this.optionsReserved[2]:
        return 'add';
      case this.optionsReserved[3]:
        return 'description';
      default:
        return '';
    }
  }

  // ejecuta la acción de cada botón
  actionTable(row: any, columHeader: string) {
    switch (columHeader) {
      case this.optionsReserved[0]:
        this.editData.emit(row);
        break;
      case this.optionsReserved[1]:
        this.deleteData.emit(row);
        break;
      case this.optionsReserved[2]:
        this.detailData.emit(row);
        break;
      case this.optionsReserved[3]:
        this.pdfData.emit(row);
        break;
      default:
        break;
    }
  }

  // *acá se puede generar para que se oculten las de edición y demás*
  get columnsHidden() {
    let columns = this.hiddenColumns;
    if (this.selectedItem && !columns.includes(0)) {
      columns.unshift(0);
    }
    return columns;
  }

  //Carga la información en la tabla tan pronto recibe la data
  loadData(data: any[]) {
    setTimeout(() => {
      this.isLoading = false;
      this.dataSource = new MatTableDataSource<any>(data);
      this.dataSource.paginator = this.paginator;
      this.noData = this.dataSource
        .connect()
        .pipe(map((data) => data.length === 0));
      this.dataSource.sort = this.sort;
    }, 2000);
  }

  //Crea el selectionModel nuevamente si se permite selección múltiple
  setSelectionModel(multipleSelected: boolean) {
    if (multipleSelected) {
      this.multipleSelected = multipleSelected;
      this.selection = new SelectionModel<any>(multipleSelected, []);
    }
  }

  ngAfterViewInit() {}

  //Manejo de la selección de items en la tabla
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
      : this.dataSource.data.forEach((row) => this.selection.select(row));
  }

  //------------------
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  selectItem(row, event) {
    if (this.multipleSelected) {
      if (event.checked) {
        this.itemSelected.push(row);
      } else {
        let i = this.itemSelected.indexOf(row);
        if (i !== -1) {
          this.itemSelected.splice(i, 1);
        }
      }
    } else {
      this.itemSelected = [];
      if (event.checked) {
        this.itemSelected.push(row);
      }
    }
    this.selectData.emit(this.itemSelected);
  }

  selectAll(event) {
    if (event.checked) {
      this.itemSelected = this.dataSource.data;
    } else {
      this.itemSelected = [];
    }
    this.selectData.emit(this.itemSelected);
  }
}
