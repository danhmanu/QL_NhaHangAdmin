import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { transferslipmodel } from '../models/TransferSlip.model';

@Component({
  selector: 'app-transfer-slip',
  templateUrl: './transfer-slip.component.html',
  styleUrls: ['./transfer-slip.component.scss']
})
export class TransferSlipComponent implements OnInit 
{
  transferslip!: transferslipmodel[];

  cities: City[] | undefined;

    selectedCity !: City;

    visible: boolean = false;

    public valuecobo = "Danh";
    
  ngOnInit(): void {
    
    this.http.GetMethod('api/TransferSlip/GetTransferSlipL', '1').subscribe((data)=>
    {
        this.transferslip = data;
        console.log('element: ',this.transferslip);
    });
  }
  public constructor (private http: DataService)
  {
    this.cities = [
      {name: 'New York', code: 'NY'},
      {name: 'Rome', code: 'RM'},
      {name: 'London', code: 'LDN'},
      {name: 'Istanbul', code: 'IST'},
      {name: 'Paris', code: 'PRS'}
  ];
  }


  // Event

  // tạo phiếu chuyển
  public showDialog()
  {
    this.visible = true;

  }

  public changvaluuee()
  { 
    console.log('element: ',this.selectedCity.name);
    this.valuecobo = this.selectedCity.name;
  }

}

interface City {
  name: string;
  code: string;
}
