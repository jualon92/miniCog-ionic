import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { StorageService } from 'src/storage/storage.service';

@Component({
  selector: 'app-scoring',
  templateUrl: './scoring.page.html',
  styleUrls: ['./scoring.page.scss'], 
  providers: [StorageService],
})
export class ScoringPage implements OnInit  {
  timesVisited: number = 0;
  constructor(
    private storage: StorageService,
  ) { }

 

  async ngOnInit() {
    //TODO: replace in favor of resolvers
    setTimeout(async () => {
      this.timesVisited = await this.storage.getTimesDone();
 
    }, 100);
      
 
     
    
  }

 
}
