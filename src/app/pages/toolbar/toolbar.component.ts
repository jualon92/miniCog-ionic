import { Component, Input, input, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonButton, IonButtons, IonIcon } from "@ionic/angular/standalone";
import { LeaveACommentComponent } from '../shared/leave-a-comment/leave-a-comment.component';
import { TranslocoModule } from '@jsverse/transloco';
import { TranslocoRootModule } from 'src/app/transloco-root.module';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
  standalone: true,
  imports: [TranslocoRootModule, IonButtons, IonHeader, IonToolbar, IonIcon, IonTitle, IonButton, LeaveACommentComponent],
  
})
export class ToolbarComponent  implements OnInit {
  @Input() title: string = "";

  constructor(public router : Router, public navController: NavController) {
   
   }

  ngOnInit() {
   
  }

  goToHistory(){
    this.navController.navigateForward('history');
  }
}
