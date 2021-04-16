import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DateAdapter } from '@angular/material/core';
import { NavigationEnd, Router, RoutesRecognized } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { filter, map, pairwise } from 'rxjs/operators';
import { NavigationService } from 'src/app/core/services/navigation.service';
import {
  ColorButtonEnum,
  TypeButtonEnum,
} from 'src/app/shared/components/button/button.component';
import { AuthService } from '../auth/services/auth.service';
@Component({
  selector: 'app-dashboard-container',
  templateUrl: './dashboard-container.component.html',
  styleUrls: ['./dashboard-container.component.css'],
})
export class DashboardContainerComponent implements OnInit {
  public form: FormGroup;
  siniestros = true;
  personas = true;
  public readonly ButtonTypes = TypeButtonEnum;
  public readonly ButtonColors = ColorButtonEnum;

  public identity;

  public myDatePicker;
  public myDatePickerFrom;
  public myDatePickerTo;

  constructor(
    private _nav: NavigationService,
    private _auth: AuthService,
    private readonly formBuilder: FormBuilder,
    private dateAdapter: DateAdapter<any>
  ) {}

  ngOnInit(): void {
    this.getPrevious();
    this.identity = this._auth.getIdentity();
    this.initForm();
  }

  setFrench() {
    // Set language of Datepicker
    this.dateAdapter.setLocale('it');
  }

  getPrevious() {
    let prevURL = this._nav.getPreviousUrl();

    if (prevURL === '/siniestros/baja') {
      this.siniestros = true;
      this.personas = false;
    }

    if (prevURL === '/personas/mantenimiento') {
      this.siniestros = false;
      this.personas = true;
    }
  }

  initForm(): void {
    this.form = this.formBuilder.group({
      dateStart: ['', Validators.required],
    });
  }

  obtener() {
    console.log(this.form.value);
  }

  getDate(data) {
    console.log(data);
  }
}
