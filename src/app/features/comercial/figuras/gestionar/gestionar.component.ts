import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Figura } from '../interfaces/figura.interface';
import { FigurasService } from '../services/figuras.service';

@Component({
  selector: 'app-gestionar',
  templateUrl: './gestionar.component.html',
  styleUrls: ['./gestionar.component.css'],
})
export class GestionarComponent implements OnInit {
  miFormulario: FormGroup = this.fb.group({
    code: ['', Validators.required],
    description: ['', Validators.required],
  });
  loader: boolean = false;

  constructor(
    private fb: FormBuilder,
    private figurasService: FigurasService
  ) {}

  ngOnInit(): void {}

  gestionar() {
    this.loader = false;
    if (this.miFormulario.invalid) {
      this.miFormulario.markAllAsTouched();
    } else {
      this.loader = true;
      let figura: Figura = {
        code: this.miFormulario.value.code,
        description: this.miFormulario.value.description,
        state: true,
      };
      this.figurasService.createFigure(figura);
    }
  }
}
