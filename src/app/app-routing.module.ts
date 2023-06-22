import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { RoleComponent } from './role/role.component';
import { TransferSlipComponent } from './transfer-slip/transfer-slip.component';

const routes: Routes = [

  {path: 'restaurent', component: RestaurantComponent},
  {path: 'role', component: RoleComponent},
  {path: 'transfer-slip', component: TransferSlipComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
