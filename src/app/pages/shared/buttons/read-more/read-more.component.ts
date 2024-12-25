import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { TranslocoRootModule } from 'src/app/transloco-root.module';
 
@Component({
  selector: 'app-read-more',
  templateUrl: './read-more.component.html',
  styleUrls: ['./read-more.component.scss'],
  standalone: true,
  imports: [IonicModule, TranslocoRootModule]
})
export class ReadMoreComponent {

  constructor() { }



}
