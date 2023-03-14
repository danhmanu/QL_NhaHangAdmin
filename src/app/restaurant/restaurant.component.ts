import { Component, OnInit } from '@angular/core';
import { Table } from 'primeng/table';
import { DataService } from '../data.service';
import { ServiceItemModel } from '../models/ServiceItem.model';
import { SysSetting } from '../models/SysSetting.model';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.scss']
})
export class RestaurantComponent implements OnInit {

  public sysSetting : ServiceItemModel[] = []; 
  public sysSettingTemp : ServiceItemModel[] = []; 
  loading: boolean = true;

  public constructor (private http: DataService)
  {
  }
  ngOnInit(): void {
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
        this.sysSettingTemp = data.Data;
        // Kiểm tra và add
    if(this.sysSettingTemp.length !=  0)
    {
      this.sysSettingTemp.forEach(element => { this.sysSetting.push(element); });
      
      console.log('element: ', this.sysSettingTemp);
      this.loading = false;
    }
      });
  }

  clear(table: Table) {table.clear();}

}
