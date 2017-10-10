import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { AddProductComponent } from './component/add-product/add-product.component';
import { UserProdListComponent } from './component/user-prod-list/userprodlist.component';
import { AdminComponent } from './admin.component';



const adminRoutes: Routes = [
    { path:'', component: AdminComponent, children:[
      { path:'', component: UserProdListComponent},
      { path:'article-edit', component: AddProductComponent}
    ]}
];
 
@NgModule({
  imports: [
    RouterModule.forChild(adminRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class adminRoutingModule {}

export const adminRoutingComponent  = [
                                        AdminComponent,
                                        UserProdListComponent,
                                        AddProductComponent
                                      ]