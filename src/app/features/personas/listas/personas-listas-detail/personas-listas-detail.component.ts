import { Component, Inject, OnInit, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Persona } from 'src/app/core/models/persona.model';

@Component({
  selector: 'app-personas-listas-detail',
  templateUrl: './personas-listas-detail.component.html',
  styleUrls: ['./personas-listas-detail.component.css'],
})
export class PersonasListasDetailComponent implements OnInit {
  persona: Persona;
  constructor(
    public dialogRef: MatDialogRef<PersonasListasDetailComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: Persona
  ) {
    this.persona = data;
  }

  ngOnInit(): void {}
}
