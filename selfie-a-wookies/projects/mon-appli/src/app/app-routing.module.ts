import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListPersonComponent } from './features/person/list-person/list-person.component';

const routes: Routes = [
  // {
  //   path: 'personnes',
  //   component: ListPersonComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
