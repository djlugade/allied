import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { MaterialDesignModule } from './material-design-module/material-design.module';
import 'hammerjs';

// custom Module 3rd party
import { FlashMessagesModule } from 'angular2-flash-messages';
import { CustomFormsModule } from 'ng2-validation';
import { SlimScrollModule } from 'ng2-slimscroll';
import { Ng2FilterPipeModule } from 'ng2-filter-pipe';

// Routing Module
import { AppRoutingModule, appRoutingComponent } from './app-routing.module';

// Component
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';

// Services
import { AdminAuthGuardService } from './services/guards/admin-auth-guard.service';
import { NotAuthGuard } from './services/guards/not-auth.guard';
import { AdminAuthService } from './services/admin-auth.service';
import { ArticlesService } from './services/articles.service';
import { AddCustomProdComponent } from './component/user-packaging-product-list/product-list/add-custom-prod/add-custom-prod.component';
import { UpdateProductCountComponent } from './component/user-packaging-product-list/update-product-count/update-product-count.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    appRoutingComponent,
    AddCustomProdComponent,
    UpdateProductCountComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialDesignModule,
    HttpModule,
    FormsModule,
    CustomFormsModule,
    FlashMessagesModule,
    SlimScrollModule,
    Ng2FilterPipeModule,
    AppRoutingModule
  ],
  providers: [AdminAuthService, AdminAuthGuardService, NotAuthGuard, ArticlesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
