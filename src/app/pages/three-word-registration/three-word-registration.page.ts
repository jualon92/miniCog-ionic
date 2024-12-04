import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/storage/storage.service';

@Component({
  selector: 'app-three-word-registration',
  templateUrl: './three-word-registration.page.html',
  styleUrls: ['./three-word-registration.page.scss'],
  providers: [StorageService],
})
export class ThreeWordRegistrationPage implements OnInit {
  timesVisited: number = 0;
  constructor(
    private storage: StorageService,
  ) { }

  async ngOnInit() {
    //TODO: utilizar resolvers
    setTimeout(async () => {
      this.timesVisited = await this.storage.getTimesDone();
   
    }, 1);
     
    
  }

}
