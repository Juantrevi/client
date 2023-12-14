import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

/**
 * MAIN.TS
 * The main.ts file is the entry point of your Angular application.
 */
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
