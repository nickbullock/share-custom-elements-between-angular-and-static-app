import { Injector, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseWebComponentModule } from '../utils/base-web-component.module';
import { HelloWorldComponent } from './hello-world.component';

@NgModule({
  declarations: [HelloWorldComponent],
  entryComponents: [HelloWorldComponent],
  imports: [
    CommonModule
  ],
  exports: [HelloWorldComponent]
})
export class HelloWorldModule extends BaseWebComponentModule {
  constructor(injector: Injector) {
    super(injector, HelloWorldComponent, 'hello-world');
  }
}
