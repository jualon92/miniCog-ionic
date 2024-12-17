import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, Subscription } from 'rxjs';
 
@Injectable({
  providedIn: 'root'
})
export class HomeService {
  urlBase: string;
  httpOptions: any;
  constructor(private http: HttpClient) { 
      this.urlBase = "https://londrajuan-feedback.com/Comment"
      this.httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',  
        }),
        responseType: 'json', 
      };
  }

  //TODO: should be comment service
  saveFeedback(feedback: string) : Observable<any> {
     const body = JSON.stringify(feedback);
   return  this.http.post(this.urlBase, body, this.httpOptions)
  }

}
