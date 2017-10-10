import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialDesignModule } from '../material-design-module/material-design.module';

import { FormsModule } from '@angular/forms';

import { adminRoutingModule, adminRoutingComponent } from './admin-routing';
import { CreateNewArticleComponent } from './component/add-product/create-new-article/create-new-article.component';
import { AddNewArticlelistComponent } from './component/add-product/add-new-articlelist/add-new-articlelist.component';



@NgModule({
  imports: [
    CommonModule,
    MaterialDesignModule,
    FormsModule,
    adminRoutingModule
  ],
  declarations: [adminRoutingComponent, CreateNewArticleComponent, AddNewArticlelistComponent]
})
export class AdminModule { }
