import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { Observable } from 'rxjs';
import { HistorySnapshot } from 'src/storage/storage.entities';
import { StorageService } from 'src/storage/storage.service';

export const historyResolver: ResolveFn<any> =  (route, state)  => {
  const storageService = inject(StorageService);
 
    const data =  storageService.getHistory()

    
    return data
 
  
};
