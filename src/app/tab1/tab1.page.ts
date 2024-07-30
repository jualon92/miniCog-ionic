import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  value1: number = 0
  stateOptions: any[] = [{ label: '2 Points', value: '2' },{ label: '0 Points', value: '0' }];
  //
   firstWordGuest: string = "";
    secondWordGuest: string = "";
    thirdWordGuest: string = "";
    
  value: string = 'off';;
  constructor() {}

}
