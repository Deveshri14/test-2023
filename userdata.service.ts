import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  constructor(private http : HttpClient) { }

  getUserData():Observable<any[]>{
   let apiurl="https://jsonplaceholder.typicode.com/photos";
   return this.http.get<any[]>(apiurl);

  
  }
}
