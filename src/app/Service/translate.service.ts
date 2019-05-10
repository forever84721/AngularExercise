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
  }
  constructor() { }


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
