import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/storage/storage.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss'],
  providers: [StorageService],
})
export class HistoryPage implements OnInit {
  data:any;
  constructor(public storage: StorageService) { }

  async ngOnInit() {
    setTimeout(() => {
      this.data = this.storage.getHistory();
    }, 1);
    
  }

  

}
