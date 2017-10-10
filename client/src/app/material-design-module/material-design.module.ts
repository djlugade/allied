import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatButtonModule, MatInputModule, MatMenuModule, MatSelectModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule, 
    MatInputModule,
    MatMenuModule,
    MatSelectModule
  ],
  exports:[
    MatButtonModule, 
    MatInputModule,
    MatMenuModule,
    MatSelectModule
  ],
  declarations: []
})
export class MaterialDesignModule { }
