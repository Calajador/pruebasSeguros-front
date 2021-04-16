import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';
import { MAT_MOMENT_DATE_FORMATS } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS } from '@angular/material/core';
import {
  MatCalendarCellCssClasses,
  MatDatepicker,
  MatDatepickerInputEvent,
} from '@angular/material/datepicker';
import * as moment from 'moment';
import { Moment } from 'moment';

export interface ColorDays {
  days: Date[];
  colorCode: string;
}

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.css'],
  providers: [{ provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS }],
})
export class DatepickerComponent implements OnInit {
  public typeAppearance = 'legacy';
  private readonly defaultDayColor = 'primary';
  private readonly colorCodeVar = '--colorCode';
  private readonly colorCodeClass = 'color-day';

  // Datepicker control
  @Input() control: FormControl;
  // Input placeholder
  @Input() placeholder = '';
  // Control which disables the component
  @Input() set disabled(ds: boolean) {
    if (this.control) {
      ds
        ? this.control.disable({ onlySelf: true })
        : this.control.enable({ onlySelf: true });
    }
  }
  // Maximum date selectable
  @Input() max = null;
  // Minimum date selectable
  @Input() min = null;
  // Selectable date filters
  @Input() set filter(filter: any) {
    filter = !filter ? '' : filter;
  }
  // Input placeholder
  @Input() hintMessage = '';
  // Selectable datepicker style
  @Input() typeDropdown: boolean;
  // Higlight class
  @Input() highlight = '';
  // Input deactivation
  @Input() isReadOnly: boolean;
  // Interface to color days sent as parameters
  @Input() daysToColor: ColorDays = {
    days: [], // Format [new Date(yyyy-mm-dd),...]
    colorCode: this.defaultDayColor, // Default color value
  };

  @Input()
  required;

  @Output() formatDAte = new EventEmitter<any>();

  @ViewChild('picker', { static: false }) picker: MatDatepicker<Moment>;

  // Class to color the days sent by @Input() colorDaysArray
  dateClass = (date: Moment): MatCalendarCellCssClasses => {
    return this.daysToColor &&
      this.daysToColor.days &&
      this.daysToColor.days.find((day: Date) =>
        this.isSameDay(date, moment(day))
      )
      ? this.highlight + ' ' + this.colorCodeClass
      : '';
  };

  public ngOnInit(): void {
    this.setConfig();
  }

  public setConfig(): void {
    if (
      this.daysToColor &&
      this.daysToColor.colorCode !== this.defaultDayColor
    ) {
      document.documentElement.style.setProperty(
        this.colorCodeVar,
        this.daysToColor.colorCode
      );
    }
    this.typeAppearance = this.typeDropdown ? 'outline' : this.typeAppearance;
  }

  public openPicker(): void {
    if (this.typeDropdown) this.picker.open();
  }

  private isSameDay(d1: Moment, d2: Moment): boolean {
    return (
      d1.year() === d2.year() &&
      d1.month() === d2.month() &&
      d1.date() === d2.date()
    );
  }

  public isRequired(): boolean {
    if (this.required !== undefined && this.required !== null) {
      return this.required;
    }
    return (
      (this.required !== undefined &&
        this.required !== null &&
        this.required) ||
      (!!this.control &&
        !!this.control.validator &&
        !!this.control.validator({} as AbstractControl) &&
        !!this.control.validator({} as AbstractControl).required)
    );
  }

  formatDate(event: MatDatepickerInputEvent<Date>) {
    let convertDate = new Date(event.target.value)
      .toISOString()
      .substring(0, 10);
    this.formatDAte.emit(convertDate);
  }

  addEvent(event: MatDatepickerInputEvent<Date>) {}
}
