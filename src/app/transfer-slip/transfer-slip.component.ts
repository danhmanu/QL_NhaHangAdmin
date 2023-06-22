import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { transferslipmodel } from '../models/TransferSlip.model';

@Component({
  selector: 'app-transfer-slip',
  templateUrl: './transfer-slip.component.html',
  styleUrls: ['./transfer-slip.component.scss']
})
export class TransferSlipComponent implements OnInit {
  transferslip!: transferslipmodel[];

  ngOnInit(): void {
    this.http.GetMethod('api/TransferSlip/GetTransferSlipL', '1').subscribe((data)=>
    {
        this.transferslip = data;
        console.log('element: ',this.transferslip);
    });
  }
  public constructor (private http: DataService)
  {
  }

}
