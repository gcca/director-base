import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { infrastructure } from './infrastructure/resources';
import { context } from './context';
import { AppModule } from './interfaces/angular2/app.module';


infrastructure.init(context);
platformBrowserDynamic().bootstrapModule(AppModule);
