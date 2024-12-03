import { Injectable } from '@angular/core';

import { Storage } from '@ionic/storage-angular';
import { TIMES_DONE } from './storage.entities';

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
  // Create and expose methods that users of this service can
  // call, for example:
  public set(key: string, value: any) {
    this._storage?.set(key, value);
  }

  public get(key: string) {
    return this._storage?.get(key);
  }
}