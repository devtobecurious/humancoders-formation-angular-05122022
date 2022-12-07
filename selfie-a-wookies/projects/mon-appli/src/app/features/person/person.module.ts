import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPersonComponent } from './list-person/list-person.component';
import { CardPersonComponent } from './card-person/card-person.component';



@NgModule({
  declarations: [
    ListPersonComponent,
    CardPersonComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ListPersonComponent
  ]
})
export class PersonModule { }
