import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { DetailsComponent } from './details/details.component';


const routes: Routes = [
  {path: 'Home', component: ListComponent},
  {path: 'Create', component: CreateComponent},
  {path: 'Edit/id', component: EditComponent},
  {path: 'Details/id', component: DetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
