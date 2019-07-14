import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';

import { ViewModule } from './view/view.module';
import { ConverToSpacesPipe } from './shared/convert-to-spaces.pipe';
import { FormsModule } from '@angular/forms';
import { StarComponent } from './shared/star.component';
import { HttpClientModule} from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ConverToSpacesPipe,
    StarComponent
  ],
  imports: [
    BrowserModule, FormsModule, ViewModule, HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
