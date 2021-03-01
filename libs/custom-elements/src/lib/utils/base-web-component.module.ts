import { Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

const MY_PREFIX = 'shared'

export abstract class BaseWebComponentModule {
  constructor(injector: Injector, component: InstanceType<any>, name: string) {
    const ngElement = createCustomElement(component, {
      injector,
    });

    customElements.define(`${MY_PREFIX}-${name}`, ngElement);
  }

  ngDoBootstrap() {}
}
