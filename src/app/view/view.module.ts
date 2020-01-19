import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewFirstComponent } from './view-first/view-first.component';



@NgModule({
  declarations: [ViewFirstComponent],
  imports: [
    CommonModule
  ],
  exports: [ViewFirstComponent]
})
export class ViewModule { }
