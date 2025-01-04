import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs';
import { StorageService } from 'src/storage/storage.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss'],
  providers: [StorageService],
})
export class HistoryPage {
  data:any;
  constructor(public storage: StorageService, public route: ActivatedRoute) { 
     this.route.data.subscribe((  {data }) => {
        this.data = [...data];
      });
    
     
  }

 
 
  async removeItem(index: number){ ;
    setTimeout(async () => {
       this.storage.removeHistoryItem(index);
       this.data.splice(index, 1);
    }, 1);
    
    
  }

}
