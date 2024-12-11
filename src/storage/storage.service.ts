import { Injectable } from '@angular/core';

import { Storage } from '@ionic/storage-angular';
import { CLOCK_KEY, ClockPoints, HISTORY, HistorySnapshot, TIMES_DONE, WORD_KEY } from './storage.entities';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  readonly MAX_TIMES = 2;
  private _storage: Storage | null = null;

  constructor(private storage: Storage) {
    this.init();
  }

  async init() {
    // If using, define drivers here: await this.storage.defineDriver(/*...*/);
    const storage = await this.storage.create();
    this._storage = storage;
  }

  /***
   *  used to track how many times the user has visited the app
   * if the user has visited the app the max number of times, the counter is reset to 0
   */
  async initTimesDone() {
    let timesDone = await this.getTimesDone(); 
    //reset to 0 if max times done or not set
    if (timesDone ===  null ||   this.areMaxTimesDone(timesDone)) {
      timesDone = 0;
      this.setTimesDone(timesDone);
      return;
    } 
    timesDone++
    this.setTimesDone(timesDone);
  }

  
  private areMaxTimesDone(timesDone: number) {
    return timesDone === this.MAX_TIMES;
  }

  
  removeHistoryItem(index: number){
    this.getHistory()?.then(async (history) => {
      history.splice(index, 1);
      await this._storage?.set(HISTORY, [...history])
      
    });
  }

  clear(){
    this._storage?.clear();
  }
  getTimesDone(){
    return this._storage?.get(TIMES_DONE);
  }

  setTimesDone(timesDone: number){
    this._storage?.set(TIMES_DONE, timesDone);
  }

  getWordPoints(){
    return this._storage?.get(WORD_KEY);
  }

  setClockPoints(clockPoints:  ClockPoints){
    this._storage?.set(CLOCK_KEY, clockPoints);
  }

  getClockPoints(): Promise<ClockPoints> | undefined{
    return this._storage?.get(CLOCK_KEY);
  }
  setWordPoints(wordPoints: number){
    this._storage?.set(WORD_KEY, wordPoints);
  }

  /***
   * saves the current state of the user's points (clock and word points) and the date
   */
  async saveState(){

    const state : HistorySnapshot = {
      wordPoints: await this.getWordPoints(),
      clockPoints: await this.getClockPoints(),
      date: new Date()
    }
    this.addToArray(HISTORY, state);
  }

  async addToArray(key: string, element: HistorySnapshot) {
    let currentArray = await this._storage?.get(key) || [];
    if (!Array.isArray(currentArray)) {
      currentArray = [];
    }
    currentArray.push(element);
    await this._storage?.set(key, currentArray);
  }

  /**
   * get the history of the user's points, sorted by date
   */
  getHistory(){
    return this._storage?.get(HISTORY).then((history : HistorySnapshot[]) => {
       return history.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    });
  }
 
 

  public get(key: string) {
    return this._storage?.get(key);
  }
}
