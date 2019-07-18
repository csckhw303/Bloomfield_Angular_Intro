import { NgModule } from '@angular/core';
import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';
import { ConverToSpacesPipe } from '../shared/convert-to-spaces.pipe';
import { RouterModule } from '@angular/router';
import { ProductDetailGuard } from './product-detail.guard';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    //CommonModule,
    //FormsModule,
    RouterModule.forChild(
      [
        { path: 'products', component: ProductListComponent},
        { path: 'products/:id', 
          canActivate: [ProductDetailGuard],
          component: ProductDetailComponent},
      ]
    ),
    SharedModule
  ],
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ConverToSpacesPipe,
    //StarComponent
  ]
})
export class ProductModule { }
