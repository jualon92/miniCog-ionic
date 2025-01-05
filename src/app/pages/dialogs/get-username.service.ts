import { Injectable } from '@angular/core';
import { TranslocoService } from '@jsverse/transloco';
import { StorageService } from 'src/storage/storage.service';

@Injectable({
  providedIn: 'root',
})
export class GetUsernameService {
  constructor(
    public storage: StorageService,
    public translocoService: TranslocoService
  ) {}

  /*** 
   * initializes  the dialog box for the user to enter their name 
  ***/
  getUsernameDialog() {
    return {
      header: this.translocoService.translate('DIALOGS.USERNAME.HEADER'),
      message: this.translocoService.translate('DIALOGS.USERNAME.MESSAGE'),
      buttons: this.alertButton,
      inputs: this.alertInputs,
    };
  }

  private readonly alertButton = [
    {
      text: this.translocoService.translate('DIALOGS.USERNAME.CONTINUE'),
      handler: (data: any) => this.handleContinueClick(data[0]),
    },
    {
      text: this.translocoService.translate('DIALOGS.USERNAME.CANCEL'),
      handler: () => this.handleContinueClick(this.translocoService.translate('DIALOGS.USERNAME.PLACEHOLDER')),
    },
  ];

  private readonly alertInputs = [
    {
      placeholder: this.translocoService.translate('DIALOGS.USERNAME.NAME_INPUT'),
      attributes: {
        maxlength: 8,
      },
    },
  ];

  private handleContinueClick(data: any) {
    if (data === '') {
      data = this.translocoService.translate('DIALOGS.USERNAME.PLACEHOLDER');
    }
    this.storage.setName(data);
  }
}
