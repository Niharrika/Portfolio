import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http : HttpClient) { }

  // postSer(data):Observable<any>{
  //   console.log(data)
  //   return this.http.post("http://localhost:3000/email",data)

  // }
}
