import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MinicartComponent } from './minicart.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [MinicartComponent],
  imports: [
    CommonModule,
    MatMenuModule,
    MatButtonModule
  ],
  exports: [MinicartComponent]
})
export class MinicartModule { }
