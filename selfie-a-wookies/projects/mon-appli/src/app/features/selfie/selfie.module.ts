import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListSelfieComponent } from './list-selfie/list-selfie.component';
import { ComboBoxModule } from '../../shared/ui/combo-box/combo-box.module';
import { TableSelfieComponent } from './table-selfie/table-selfie.component';
import { EditSelfieComponent } from './edit-selfie/edit-selfie.component';



@NgModule({
  declarations: [
    ListSelfieComponent,
    TableSelfieComponent,
    EditSelfieComponent
  ],
  imports: [
    CommonModule,
    ComboBoxModule
  ],
  exports: [
    ListSelfieComponent,
    EditSelfieComponent
  ]
})
export class SelfieModule { }
