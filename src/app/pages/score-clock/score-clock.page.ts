import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/storage/storage.service';
import { ClockPoints } from '../../../storage/storage.entities';
import { Router } from '@angular/router';

@Component({
  selector: 'app-score-clock',
  templateUrl: './score-clock.page.html',
  styleUrls: ['./score-clock.page.scss'],
  providers: [StorageService],
})
export class ScoreClockPage  {
 clockPoints: number = -1;
  constructor(
    public router: Router,
    public storage: StorageService) { }

 

  onValueChange(event: any){
    this.storage.setClockPoints(event.value);  
  }

  navigate(points: ClockPoints){
    this.storage.setClockPoints(points);
    this.storage.saveState();
    setTimeout(() => {
      this.router.navigate(['/results']);
    }, 1);
  
  }

}
