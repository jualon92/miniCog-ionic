import { Component, OnInit} from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { StorageService } from 'src/storage/storage.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.page.html',
  styleUrls: ['./results.page.scss'],
  providers: [StorageService],
})
export class ResultsPage implements OnInit {
  threeWordRecallPoints:any;
  clockDrawingPoints: any;
  total = 0;

  constructor(public storage: StorageService) { }

  async ngOnInit() {
      setTimeout(async () => {
        this.threeWordRecallPoints = await  this.storage.getWordPoints();
        this.clockDrawingPoints = await this.storage.getClockPoints() ?? 0; 
      }, 1);
  }



}
