import { NgModule } from '@angular/core';
import { HelloWorldModule } from './hello-world/hello-world.module';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [
    BrowserModule,
    HelloWorldModule
  ],
  exports: [HelloWorldModule]
})
export class CustomElementsModule {
  ngDoBootstrap() {}
}
