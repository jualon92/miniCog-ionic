import { Injectable } from '@angular/core';

import { Storage } from '@ionic/storage-angular';
import { CLOCK_KEY, ClockPoints, HISTORY, TIMES_DONE, WORD_KEY } from './storage.entities';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
 
  private _storage: Storage | null = null;

  constructor(private storage: Storage) {
    this.init();
  }

  async init() {
    // If using, define drivers here: await this.storage.defineDriver(/*...*/);
    const storage = await this.storage.create();
    this._storage = storage;
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

  async saveState(){

    const state = {
      wordPoints: await this.getWordPoints(),
      clockPoints: await this.getClockPoints(),
      date: new Date()
    }
    this.addToArray(HISTORY, state);
  }

  async addToArray(key: string, element: any) {
    let currentArray = await this._storage?.get(key) || [];
    if (!Array.isArray(currentArray)) {
      currentArray = [];
    }
    currentArray.push(element);
    await this._storage?.set(key, currentArray);
  }

  //TODO: refactor
  getHistory(){
    return this._storage?.get(HISTORY).then((history) => {
       return history.sort((a:any, b:any) => new Date(b.date).getTime() - new Date(a.date).getTime());
    });
  }
  // Create and expose methods that users of this service can
  // call, for example:
  public set(key: string, value: any) {
    this._storage?.set(key, value);
  }

  public get(key: string) {
    return this._storage?.get(key);
  }
}
