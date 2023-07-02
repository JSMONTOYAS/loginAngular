import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateComponent } from './create/create.component';
import { ListComponent } from './list/list.component';
import { DetailsComponent } from './details/details.component';
import { EditComponent } from './edit/edit.component';
import { LayoutRoutingModule } from './layout-routing.module';

@NgModule({
  declarations: [
    CreateComponent,
    ListComponent,
    DetailsComponent,
    EditComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule
  ]
})
export class LayoutModule {
}




