import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideHttpClient()]
};

// before angular 17 we need to import HttpClientModule in appModule
// but in angular 17 we need to add provideHttpClient in appconfig to use HttpClient