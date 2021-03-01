import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { CustomElementsModule } from '@simple-nx-workspace/custom-elements';

enableProdMode();

platformBrowserDynamic()
  .bootstrapModule(CustomElementsModule)
  .catch((err) => console.error(err));
