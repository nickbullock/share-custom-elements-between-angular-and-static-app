import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CustomElementsModule } from '@simple-nx-workspace/custom-elements';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CustomElementsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
