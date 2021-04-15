import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-intermediarios',
  templateUrl: './intermediarios.component.html',
  styleUrls: ['./intermediarios.component.css'],
})
export class IntermediariosComponent implements OnInit {
  pageIndex: number = 0;

  disabledTab(i: number) {
    return this.pageIndex < i;
  }

  next() {
    this.pageIndex += 1;
  }

  back() {
    this.pageIndex -= 1;
  }

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  isEditable = false;

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required],
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required],
    });
  }
}
