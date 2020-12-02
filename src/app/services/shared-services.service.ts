import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Email } from '../model/mail';

@Injectable({
  providedIn: 'root'
})
export class SharedServices {

  translate: Subject<boolean> = new Subject();

  url = 'http://localhost:3001/';

  constructor(private http: HttpClient) { }

  public sendEmail(email: Email) {
     return this.http.post<any>(`${this.url}sendEmail`, email);
  }

}
