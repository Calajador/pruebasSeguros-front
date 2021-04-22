import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormGroupDirective,
  Validators,
} from '@angular/forms';
import { Figura } from '../interfaces/figura.interface';
import { FigurasService } from '../services/figuras.service';

@Component({
  selector: 'app-gestionar',
  templateUrl: './gestionar.component.html',
  styleUrls: ['./gestionar.component.css'],
})
export class GestionarComponent implements OnInit, OnChanges {
  @Input() create: boolean = true;
  @Input() figura: Figura;
  @ViewChild(FormGroupDirective) formDirective: FormGroupDirective;

  formGestion: FormGroup = this.fb.group({
    code: ['', Validators.required],
    description: ['', Validators.required],
  });
  loader: boolean = false;
  endProcess: boolean = false;

  constructor(
    private fb: FormBuilder,
    private figurasService: FigurasService
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.create?.currentValue) {
      this.formGestion.reset();
    }
    if (
      changes.figura?.currentValue !== changes.figura?.previousValue &&
      !this.create
    ) {
      this.formGestion.reset(changes.figura.currentValue);
    }
  }

  ngOnInit(): void {}

  gestionar() {
    this.loader = false;
    this.endProcess = false;
    if (this.formGestion.invalid) {
      console.log('Entra');
      this.formGestion.markAllAsTouched();
    } else {
      this.loader = true;

      if (this.create) {
        this.crear();
      } else {
        this.actualizar();
      }
      this.loader = false;
      this.endProcess = true;
      this.formGestion.reset();
      this.formDirective.resetForm();
    }
  }

  crear() {
    let figura: Figura = {
      code: this.formGestion.value.code,
      description: this.formGestion.value.description,
      state: true,
    };
    this.figurasService.createFigure(figura);
  }

  actualizar() {
    let figuraC: Figura = {
      id: this.figura.id,
      code: this.formGestion.value.code,
      description: this.formGestion.value.description,
      state: true,
    };
    this.figurasService.updateFigure(figuraC);
  }
}
