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
  private REST_API_SERVER = 'https://localhost:7192';
  private Rest_API_Server_Random = 'https://reqres.in';
  private httpOptions = {
    headers: new HttpHeaders ({
      'Content-Type':  'application/json',
      // 'siterf' : '1',
      // 'username' : 'danhhn',
      // 'token' : '2321321312',
      //'Access-Control-Allow-Methods': 'GET,PUT',
      //'Access-Control-Allow-Origin': 'http://localhost:4200',
      //'Access-Control-Allow-Origin': '*',
    }),
  }
  constructor(private httpClient: HttpClient) { }

  // lấy danh sách syssetting
  public GetAllListData(): Observable<any>
  {
     const url = `${this.REST_API_SERVER}/api/User/GetUser`;
    return this.httpClient.request<any>('Get', url, this.httpOptions);
  }

  public getRandom(page: number = 2): Observable<any> {
    const url = this.Rest_API_Server_Random + '/api/users?page=' + page;
    return this.httpClient.get<any>(url, this.httpOptions);
  }

  public GetMethod( urlexten : string, paraurl : string): Observable<any>
  {
     const url = `${this.REST_API_SERVER}/`+urlexten + '/' +paraurl;
    return this.httpClient.request<any>('Get', url, this.httpOptions);
  }
}
