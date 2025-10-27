import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app';   // 👈 cambia da App → AppComponent

bootstrapApplication(AppComponent)
  .catch(err => console.error(err));
