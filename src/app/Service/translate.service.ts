import { Injectable } from '@angular/core';
import { Language } from '../../locale/Language';

@Injectable({
  providedIn: 'root'
})
export class TranslateService {
  private CurrentLang = 'zh-Hant'; // en-US
  public get currentLang() {
    return this.CurrentLang;
  }
  public Use(lang: string): void {
    this.CurrentLang = lang;
    localStorage.setItem('CurrentLang', lang);
  }
  constructor() {
    try {
      this.CurrentLang = localStorage.getItem('CurrentLang');
    } catch (error) {
      localStorage.setItem('CurrentLang', 'en-US');
      this.CurrentLang = localStorage.getItem('CurrentLang');
    }
  }


  public Translate(key: string) {
    try {
      if (Language[this.CurrentLang][key]) {
        return Language[this.CurrentLang][key];
      } else {
        return key;
      }
    } catch {
      return key;
    }
  }
}
