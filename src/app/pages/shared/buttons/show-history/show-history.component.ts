import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { TranslocoRootModule } from 'src/app/transloco-root.module';

@Component({
  selector: 'app-show-history',
  templateUrl: './show-history.component.html',
  styleUrls: ['./show-history.component.scss'],
  standalone: true,
  imports: [IonicModule, TranslocoRootModule, RouterModule]
})
export class ShowHistoryComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
