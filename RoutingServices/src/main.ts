import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app';
import { Pagina1 } from './app/pagina1/pagina1';
import { Pagina2 } from './app/pagina2/pagina2';
import { Pagina3Component } from './app/pagina3/pagina3';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter([
      { path: '', redirectTo: 'pagina1', pathMatch: 'full' },
      { path: 'pagina1', component: Pagina1 },
      { path: 'pagina2', component: Pagina2 },
      { path: 'pagina3', component: Pagina3Component },
    ])
  ]
});
