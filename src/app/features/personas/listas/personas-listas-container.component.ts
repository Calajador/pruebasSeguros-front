import { Component, OnDestroy, OnInit } from '@angular/core';
import { PersonaService } from '../services/persona.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Observable, Subscription } from 'rxjs';
import { Persona } from '../../../core/models/persona.model';
import {
  ColorButtonEnum,
  TypeButtonEnum,
} from 'src/app/shared/components/button/button.component';
import { PersonasListasDialogComponent } from './personas-listas-dialog/personas-listas-dialog.component';
import Swal from 'sweetalert2';
import { AuthService } from '../../auth/services/auth.service';
import { PersonasListasDetailComponent } from './personas-listas-detail/personas-listas-detail.component';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;
@Component({
  selector: 'app-personas-listas-container',
  templateUrl: './personas-listas-container.component.html',
  styleUrls: ['./personas-listas-container.component.css'],
})
export class PersonasListasContainerComponent implements OnInit, OnDestroy {
  TITULO = 'HOLA';
  personas$: Observable<Persona>;
  personasSubs: Subscription;
  acceso = false;
  identity;
  PersonasVacias: Persona[] = [];

  public readonly ButtonTypes = TypeButtonEnum;
  public readonly ButtonColors = ColorButtonEnum;

  public personasColumns = {
    Select: 'grid.select_one',
    nombre: 'Nombre',
    apellidos: 'Apellidos',
    sex: 'Sex',
    email: 'Email',
    Detalle: 'grid.detail',
    PDF: 'grid.doc',
    Editar: 'grid.edit',
    Borrar: 'grid.delete',
  };

  public personasColumns2 = {
    Select: '',
    nombre: 'Nombre',
    apellidos: 'Apellidos',
    sex: 'Sex',
    email: 'Email',
    Detalle: 'grid.detail',
    Editar: 'grid.edit',
    Borrar: 'grid.delete',
  };

  public personaSeleccionada: Persona;

  constructor(
    private _personas: PersonaService,
    private dialog: MatDialog,
    private _auth: AuthService
  ) {
    this.identity = this._auth.getIdentity();
    console.log(this.identity.role);
  }

  ngOnInit(): void {
    this.listarPersopnas();
    if (this.identity.role === 'ADMIN') {
      this.acceso = true;
    }
  }

  ngOnDestroy() {}

  listarPersopnas() {
    this.personas$ = this._personas.getPersonas();
  }

  addPerson() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    const dialogref = this.dialog.open(
      PersonasListasDialogComponent,
      dialogConfig
    );

    dialogref.afterClosed().subscribe((result) => {
      if (result.event !== 'Cancel') {
        console.log(result);
        this._personas.postPersona(result).subscribe((res) => {
          this.listarPersopnas();
        });
      }
    });
  }

  getEditData(data: Persona) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = data;
    const dialogref = this.dialog.open(
      PersonasListasDialogComponent,
      dialogConfig
    );

    dialogref.afterClosed().subscribe((result) => {
      if (result.event !== 'Cancel') {
        console.log(result);
        this._personas.editPersona(data._id, result).subscribe((res) => {
          this.listarPersopnas();
        });
      }
    });
  }

  getDeatilData(data: Persona) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.data = data;
    const dialogref = this.dialog.open(
      PersonasListasDetailComponent,
      dialogConfig
    );
  }

  getPdfData(data: Persona) {
    console.log(data);
    let docDefinition = {
      content: [
        // Previous configuration
        {
          text: data.nombre + data.apellidos,
          fontSize: 16,
          alignment: 'center',
          color: '#047886',
        },
        {
          text: 'Detalles de la Persona',
          style: 'sectionHeader',
        },
        {
          text: 'Email',
          style: 'sectionSubHeader',
        },
        {
          text: data.email,
          style: 'text',
        },
        {
          text: 'Licencia',
          style: 'sectionSubHeader',
        },
        {
          text: data.licenciaConducir,
          style: 'text',
        },
      ],
      styles: {
        sectionHeader: {
          bold: true,
          decoration: 'underline',
          fontSize: 14,
          margin: [0, 15, 0, 15],
        },
        sectionSubHeader: {
          fontSize: 14,
          margin: [0, 15, 0, 5],
        },
        text: {
          fontSize: 11,
        },
      },
    };

    pdfMake.createPdf(docDefinition).open();
  }

  getDeleteData(data: Persona) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        this._personas.deletePersona(data._id).subscribe((res) => {
          Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
          this.listarPersopnas();
        });
      }
    });
  }

  onClick() {
    this.dialog.open(PersonasListasDialogComponent);
  }

  getSelected(data) {
    this.personaSeleccionada = data;
    console.log(this.personaSeleccionada);
  }

  goToSection1() {
    document.getElementById('section1').scrollIntoView({ behavior: 'smooth' });
  }
  goToSection2() {
    document.getElementById('section2').scrollIntoView({ behavior: 'smooth' });
  }
  goToSection3() {
    document.getElementById('section3').scrollIntoView({ behavior: 'smooth' });
  }
  goToSection4() {
    document.getElementById('section4').scrollIntoView({ behavior: 'smooth' });
  }
}
