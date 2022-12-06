import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListSelfieComponent } from './list-selfie/list-selfie.component';
import { ComboBoxModule } from '../../shared/ui/combo-box/combo-box.module';
import { TableSelfieComponent } from './table-selfie/table-selfie.component';



@NgModule({
  declarations: [
    ListSelfieComponent,
    TableSelfieComponent
  ],
  imports: [
    CommonModule,
    ComboBoxModule
  ],
  exports: [
    ListSelfieComponent
  ]
})
export class SelfieModule { }
