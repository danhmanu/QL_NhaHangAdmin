import { Component, OnInit } from '@angular/core';
import { Table } from 'primeng/table';
import { DataService } from '../data.service';
import { ServiceItemModel } from '../models/ServiceItem.model';
import { SysSetting } from '../models/SysSetting.model';
import { UserModel } from '../models/UserModel.model';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.scss']
})
export class RestaurantComponent implements OnInit {

  public sysSetting : ServiceItemModel[] = []; 
  public sysSettingTemp : ServiceItemModel[] = []; 
  public UserData : UserModel[] = [];
  loading: boolean = true;

  public constructor (private http: DataService)
  {
  }
  ngOnInit(): void {
    this.loading = false;
    // this.http.GetAllListData().subscribe(
    //   (data)=>
    //   {
    //     this.sysSetting = data.Data;
    //     console.log('Data: ', this.sysSetting);
    //   }
    // );
  }

  public GetSysSetting () : void
  {
    this.loading = true;
    // Get data
    this.http.GetAllListData().subscribe(
      (data)=>
      {
        this.UserData = data;
        console.log('element: ',this.UserData);
        // Kiểm tra và add
        if(this.UserData.length !=  0)
        {
          //this.UserData.forEach(element => { this.sysSetting.push(element); });
        }
        this.loading = false;
      });
  }

  clear(table: Table) {table.clear();}

}
