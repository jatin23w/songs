import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BCPcomponent } from './BCP/BCP.component';
import { FlexmonsterPivotModule } from 'ng-flexmonster';
import { Peoplecomponent } from './People/People.component';
import { Customer_Experiencecomponent } from './Customer_Experience/Customer_Experience.component';
import { OHcomponent } from './operational_health/OH.component';
import { ProfitLcomponent } from './ProfitL/ProfitL.component';
const routes: Routes = [ 
 
   {path:"",component: BCPcomponent},
   {path:"People",component:Peoplecomponent},
   {path:"Customer Experience",component:Customer_Experiencecomponent},
   {path:"Operational Health",component:OHcomponent},
   {path:"Profit LOSS", component:ProfitLcomponent}
   
  
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule,FlexmonsterPivotModule]
})
export class AppRoutingModule { }
