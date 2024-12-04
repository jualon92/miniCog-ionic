import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from 'src/storage/storage.service';

@Component({
  selector: 'app-scoring',
  templateUrl: './scoring.page.html',
  styleUrls: ['./scoring.page.scss'], 
  providers: [StorageService],
})
export class ScoringPage implements OnInit  {
  timesVisited: number = -1;
  value1: number = 0;
  constructor(
    private storage: StorageService,
    private router: Router
  ) { }

 

  async ngOnInit() {
    //TODO: replace in favor of resolvers
    setTimeout(async () => {
      this.timesVisited = await this.storage.getTimesDone();
 
    }, 1);
      
 
     
    
  }
//TODO: consider saving points when navigating to next page
  onValueChange(event: any){
    setTimeout(() => {
      this.storage.setWordPoints(event);  
    }, 1);
    
 
  }

  navigate(points: number){
    this.storage.setWordPoints(points);
    /* this.storage.saveState(); */
    setTimeout(() => {
      this.router.navigate(['/score-clock']);
    }, 1);
  
  }

 
}
