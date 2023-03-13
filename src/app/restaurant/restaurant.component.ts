import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { SysSetting } from '../models/SysSetting.model';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.scss']
})
export class RestaurantComponent implements OnInit {

  public sysSetting : SysSetting[] = []; 

  public constructor (private http: DataService)
  {
  }
  ngOnInit(): void {

    this.http.GetAllListData().subscribe(
      (data)=>
      {
        this.sysSetting = data.Data;
        console.log('Data: ', data.Message);
      }
    );
    
  }
}
