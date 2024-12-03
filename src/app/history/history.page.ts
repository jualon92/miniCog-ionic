import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/storage/storage.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss'],
  providers: [StorageService],
})
export class HistoryPage {
  data:any;
  constructor(public storage: StorageService) { }

 

  async ionViewWillEnter() {
    setTimeout(async () => {
      this.data = await this.storage.getHistory()
 
    }, 1);
  }

}
