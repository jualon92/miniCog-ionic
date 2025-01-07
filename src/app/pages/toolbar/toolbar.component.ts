import { TextToSpeech } from '@capacitor-community/text-to-speech';
import { Component, Input, input, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonButton, IonButtons, IonIcon, IonToast } from "@ionic/angular/standalone";
import { LeaveACommentComponent } from '../shared/leave-a-comment/leave-a-comment.component';
import { TranslocoModule } from '@jsverse/transloco';
import { TranslocoRootModule } from 'src/app/transloco-root.module';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { StorageService } from 'src/storage/storage.service';
import { TtsService } from 'src/app/components/about/tts.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
  standalone: true,
  imports: [IonToast, AsyncPipe,  TranslocoRootModule, IonButtons, IonHeader, IonToolbar, IonIcon, IonTitle, IonButton, LeaveACommentComponent],

})
export class ToolbarComponent  implements OnInit {
  @Input() title: string = "";
  loudspeakerColor = "unset";
  loudspeakerIsActive$ = this.tts.enabled$;
  isTtsDisabled = false;
  isTtsEnabled = false;
  timesVisited: any = 0;
  constructor(public tts: TtsService, public storage: StorageService, public router : Router, public navController: NavController) {

   }

  async ngOnInit() {
    setTimeout(async () => {
       const data =  await this.storage.getHistory();
       this.timesVisited =  data?.length;

    }, 100);


  }

  useTts(){
    this.tts.trigger();
    if (!this.tts.getState()){
      this.isTtsDisabled = true;
    }else{
      this.isTtsEnabled =  true;
    }
   



  }
  goToHistory(){
    this.navController.navigateForward('history');
  }
}
