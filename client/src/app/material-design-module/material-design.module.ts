import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatButtonModule, MatCheckboxModule, MatInputModule, MatNativeDateModule, MatMenuModule,
        MatSelectModule, MatExpansionModule} from '@angular/material';
import {MatDatepickerModule} from '@angular/material/datepicker';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatInputModule,
    MatMenuModule,
    MatSelectModule,
    MatExpansionModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule
  ],
  exports: [
    MatButtonModule,
    MatInputModule,
    MatMenuModule,
    MatSelectModule,
    MatExpansionModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule
  ],
  declarations: []
})
export class MaterialDesignModule { }
