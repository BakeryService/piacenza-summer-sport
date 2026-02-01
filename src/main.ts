import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import '@angular/common/locales/global/it';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
