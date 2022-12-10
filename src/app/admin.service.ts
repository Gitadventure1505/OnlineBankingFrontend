import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Updatestatus } from './classes/updatestatus';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class AdminService {


  url: string = "http://localhost:8082/user/get";
  URLgetnewusers: string = "http://localhost:8082/user/getNewUsers"
  urlChangestat: string = "http://localhost:8082/update";
  urlgetExistingUsers: string = "http://localhost:8082/user/getExistingUsers"

  constructor(private httpClient: HttpClient) { }

  public getAllUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.url)


  }

  public getNewUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.URLgetnewusers);


  }

  public getExistingUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.urlgetExistingUsers);


  }


  public updateStatus(statUpd: Updatestatus): Observable<any> {
    return this.httpClient.post<any>("http://localhost:8082/user/update", statUpd)
  }


}
