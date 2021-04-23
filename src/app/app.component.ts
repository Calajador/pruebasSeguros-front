import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public activeLang = 'es';
  public langs: string[];

  constructor(private translate: TranslateService) {
    this.translate.addLangs(['en', 'es']);
    this.translate.setDefaultLang(this.activeLang);
    this.translate.use(this.activeLang);
    this.langs = this.translate.langs;
    console.log(this.langs);
  }

  title = 'pruebas-itaca';
}
