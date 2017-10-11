import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatButtonModule, MatInputModule, MatMenuModule, MatSelectModule, MatExpansionModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule, 
    MatInputModule,
    MatMenuModule,
    MatSelectModule,
    MatExpansionModule
  ],
  exports: [
    MatButtonModule,
    MatInputModule,
    MatMenuModule,
    MatSelectModule,
    MatExpansionModule
  ],
  declarations: []
})
export class MaterialDesignModule { }
