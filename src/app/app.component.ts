import {NgIf} from '@angular/common';
import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {TranslateModule, TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NgIf,
    TranslateModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Gestion Asesoria Unas';
  protected openLanguage: boolean = false;
  protected language: string = 'en';

  constructor(private translate: TranslateService) {
    translate.setDefaultLang(this.language);
  }

  public switchLanguage(language: string): void {
    this.language = language;
    this.translate.use(language);
    this.openLanguage = false;
  }
}
