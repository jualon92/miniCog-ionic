import { Injectable } from '@angular/core';
import { TranslocoService } from '@jsverse/transloco';
import { TextToSpeech } from '@capacitor-community/text-to-speech';
import { BehaviorSubject, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TtsService {
  private enabledSubject = new BehaviorSubject<boolean>(true);
  enabled$ = this.enabledSubject.asObservable();
  isTtsDisabled = false;
  constructor(private transloco: TranslocoService) {}

  async readTranslatedKey(key: string) {
    const currentLang = this.transloco.getActiveLang();
    const text = this.transloco.translate(key);
    const voiceLang = currentLang === 'es' ? 'es-ES' : 'en-US';

    await TextToSpeech.speak({
      text,
      lang: voiceLang,
      rate: 0.9,
      pitch: 1.0
    });
  }

  cancel(){
    TextToSpeech.stop();
  }

  async readText(text: string) {
    const currentLang = this.transloco.getActiveLang();

    const voiceLang = currentLang === 'es' ? 'es-ES' : 'en-US';

    await TextToSpeech.speak({
      text,
      lang: voiceLang,
      rate: 0.9,
      pitch: 1.0
    });
  }

  enable(){
    this.enabledSubject.next(true);
  }
  // flip the value of enabled
  trigger(){
    this.enabledSubject.next(!this.enabledSubject.value);
    if (!this.enabledSubject.value) {
      TextToSpeech.stop();
      
    }
  }

  getState(){
    return this.enabledSubject.value;
  }
  disable(){
    this.enabledSubject.next(false);
  }
  async readKeys(keys: string[]) {
    for (const key of keys) {
      await this.readTranslatedKey(key);
    }
  }

  async stop() {
    await TextToSpeech.stop();
  }
}
