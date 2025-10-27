import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // 👈 serve per *ngIf
import { RouterOutlet } from '@angular/router';
import { Pagina3Component } from './pagina3/pagina3';
import { Pagina1 } from './pagina1/pagina1';
import { Pagina2 } from './pagina2/pagina2';
// (Opzionale) puoi tenere Pagina1 e Pagina2 se servono in futuro

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,Pagina1,Pagina2,Pagina3Component], // 👈 aggiunto CommonModule
  templateUrl: './app.html'
})
export class AppComponent {
  mostraPagina3 = false; // 👈 serve per controllare la visibilità

  mostraPagina3Handler() { // 👈 questa mancava!
    this.mostraPagina3 = !this.mostraPagina3;
  }
}
