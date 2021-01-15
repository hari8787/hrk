import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SdService {

  constructor(private hc:HttpClient) {}

    // get method
    
    getdata():Observable<any>{
      return this.hc.get("/studata")
    }
// post metnod
    fulldata(n):Observable<any>{
      return this.hc.post(`/studentdata/${n.id}`,n)
    }
}
