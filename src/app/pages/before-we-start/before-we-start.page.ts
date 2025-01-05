import {
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { AlertController, IonAlert } from '@ionic/angular';
import { StorageService } from 'src/storage/storage.service';
import { GetUsernameService } from '../dialogs/get-username.service';

@Component({
  selector: 'app-before-we-start',
  templateUrl: './before-we-start.page.html',
  styleUrls: ['./before-we-start.page.scss'],
})
export class BeforeWeStartPage {

  constructor(
    private alertController: AlertController,
    private storage: StorageService,
    private getUsernameService: GetUsernameService,
  ) {}

  ionViewWillEnter() {
    this.initializeAlert();
  }

  async initializeAlert() {
    const alert = await this.alertController.create(this.getUsernameService.getUsernameDialog());

    await alert.present();
  }

}
