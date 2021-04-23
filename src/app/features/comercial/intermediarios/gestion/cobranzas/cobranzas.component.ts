import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TypeButtonEnum } from 'src/app/shared/components/button/button.component';

@Component({
  selector: 'app-cobranzas',
  templateUrl: './cobranzas.component.html',
  styleUrls: ['./cobranzas.component.css'],
})
export class CobranzasComponent implements OnInit {
  formCobro: FormGroup = this.fb.group({
    cobradorAlta: [false],
    cobranza: [false],
    comision: [0, Validators.min(0)],
    cobrador: [false],
    tc: [false],
    cbu: [false],
    pagoFacil: [false],
  });

  typeBtn: TypeButtonEnum = TypeButtonEnum.STROKED;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  guardar() {}
}
