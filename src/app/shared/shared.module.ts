import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';

//Components
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SidenavComponent } from './sidenav/sidenav.component';

//Traducciones
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';

import { SideNavItemComponent } from './sidenav/side-nav-item/side-nav-item.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { HomeComponent } from './pages/home/home.component';
import { MatModule } from './mat.module';
import { GridComponent } from './components/grid/grid.component';
import { HeaderComponent } from './components/header/header.component';
import { MapComponent } from './components/map/map.component';

import { AgmCoreModule } from '@agm/core';
import { ButtonComponent } from './components/button/button.component';
import { AlertDialogComponent } from './components/alert-dialog/alert-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule, IConfig } from 'ngx-mask';
import { FormTableComponent } from './components/form-table/form-table.component';
import { TableComponent } from './components/table/table.component';
import { TreeComponent } from './components/tree/tree.component';
import { DatepickerComponent } from './components/datepicker/datepicker.component';

export const options: Partial<IConfig> | (() => Partial<IConfig>) = null;
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, '/assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    NavBarComponent,
    SidenavComponent,
    SideNavItemComponent,
    ToolbarComponent,
    HomeComponent,
    GridComponent,
    FormTableComponent,
    HeaderComponent,
    MapComponent,
    ButtonComponent,
    AlertDialogComponent,
    TableComponent,
    TreeComponent,
    DatepickerComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MatModule,
    NgxMaskModule.forRoot(),
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
      isolate: false,
    }),
    AgmCoreModule.forRoot({
      apiKey: '',
      libraries: ['places'],
    }),
  ],
  exports: [
    NavBarComponent,
    TranslateModule,
    AgmCoreModule,
    FormsModule,
    ReactiveFormsModule,
    SidenavComponent,
    SideNavItemComponent,
    MatModule,
    HeaderComponent,
    GridComponent,
    FormTableComponent,
    NgxMaskModule,
    MapComponent,
    ButtonComponent,
    AlertDialogComponent,
    TableComponent,
    TreeComponent,
    DatepickerComponent,
  ],
})
export class SharedModule {
  static forRoot() {
    return {
      ngModule: SharedModule,
    };
  }
}
