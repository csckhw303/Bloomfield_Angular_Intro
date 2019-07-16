import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';

import { ViewModule } from './view/view.module';
import { ConverToSpacesPipe } from './shared/convert-to-spaces.pipe';
import { FormsModule } from '@angular/forms';
import { StarComponent } from './shared/star.component';
import { HttpClientModule} from '@angular/common/http';
import { ProductDetailComponent } from './products/product-detail.component';
import {RouterModule} from '@angular/router'
import { WelcomeComponent } from './home/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ConverToSpacesPipe,
    StarComponent,
    ProductDetailComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule, FormsModule, ViewModule, HttpClientModule,
    RouterModule.forRoot([
      { path: 'products', component: ProductListComponent},
      { path: 'products/:id', component: ProductDetailComponent},
      { path: 'welcome', component: WelcomeComponent},
      { path: '', redirectTo: 'welcome', pathMatch: 'full'}
    ])
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
