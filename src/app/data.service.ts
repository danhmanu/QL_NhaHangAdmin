import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { SysSetting } from './models/SysSetting.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  // private REST_API_SERVER = environment.apiUrl;
  private REST_API_SERVER = 'http://localhost:7770';
  private Rest_API_Server_Random = 'https://reqres.in';
  private httpOptions = {
    headers: new HttpHeaders ({
       'Content-Type':  'application/json',
       'siterf' : '1',
      // 'Access-Control-Allow-Origin': '*',
      // 'Access-Control-Allow-Methods': 'GET,PUT',
      // 'Access-Control-Allow-Origin': 'http://localhost:4200',

    }),
  }
  constructor(private httpClient: HttpClient) {
   }
  // lấy danh sách syssetting
  public GetAllListData(): Observable<any>
  {
     const url = `${this.REST_API_SERVER}/api/EMR/v1/SysSetting`;
    //const url = 'https://randomuser.me/';
    return this.httpClient.request<any>('Get', url, this.httpOptions);
  }

  public getRandom(page: number = 2): Observable<any> {
    const url = this.Rest_API_Server_Random + '/api/users?page=' + page;
    return this.httpClient.get<any>(url, this.httpOptions);
  }


}
