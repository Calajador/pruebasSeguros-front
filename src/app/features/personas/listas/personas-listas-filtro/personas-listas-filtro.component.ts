import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personas-listas-filtro',
  templateUrl: './personas-listas-filtro.component.html',
  styleUrls: ['./personas-listas-filtro.component.css'],
})
export class PersonasListasFiltroComponent implements OnInit {
  filterValues = {};

  filterSelectObj = [];

  constructor() {
    this.filterSelectObj = [
      {
        name: 'SEX',
        columnProp: 'sex',
        options: ['Masculino', 'femenino'],
      },
    ];
  }

  ngOnInit(): void {}

  // Get Uniqu values from columns to build filter
  getFilterObject(fullObj, key) {
    const uniqChk = [];
    fullObj.filter((obj) => {
      if (!uniqChk.includes(obj[key])) {
        uniqChk.push(obj[key]);
      }
      return obj;
    });
    return uniqChk;
  }

  // Called on Filter change
  // filterChange(filter, event) {
  //   //let filterValues = {}
  //   this.filterValues[
  //     filter.columnProp
  //   ] = event.target.value.trim().toLowerCase();
  //   this.dataSource.filter = JSON.stringify(this.filterValues);
  // }

  createFilter() {
    let filterFunction = function (data: any, filter: string): boolean {
      let searchTerms = JSON.parse(filter);
      let isFilterSet = false;
      for (const col in searchTerms) {
        if (searchTerms[col].toString() !== '') {
          isFilterSet = true;
        } else {
          delete searchTerms[col];
        }
      }

      console.log(searchTerms);

      let nameSearch = () => {
        let found = false;
        if (isFilterSet) {
          for (const col in searchTerms) {
            searchTerms[col]
              .trim()
              .toLowerCase()
              .split(' ')
              .forEach((word) => {
                if (
                  data[col].toString().toLowerCase().indexOf(word) != -1 &&
                  isFilterSet
                ) {
                  found = true;
                }
              });
          }
          return found;
        } else {
          return true;
        }
      };
      return nameSearch();
    };
    return filterFunction;
  }

  // Reset table filters
  // resetFilters() {
  //   this.filterValues = {};
  //   this.filterSelectObj.forEach((value, key) => {
  //     value.modelValue = undefined;
  //   });
  //   this.dataSource.filter = '';
  // }
}
