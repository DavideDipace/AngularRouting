import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pagina2',
  imports: [FormsModule],
  templateUrl: './pagina2.html',
  styleUrl: './pagina2.css',
})
export class Pagina2 {
    studenti: any[] = [];
  nextId: number = 1; // per assegnare ID automatici

  nuovoStudente = {
    nome: '',
    classe: '',
    mediaVoti: null
  };

  aggiungiStudente() {
    if (!this.nuovoStudente.nome || !this.nuovoStudente.classe || this.nuovoStudente.mediaVoti === null) {
      alert('Compila tutti i campi!');
      return;
    }

    const studente = {
      id: this.nextId++,
      nome: this.nuovoStudente.nome,
      classe: this.nuovoStudente.classe,
      mediaVoti: this.nuovoStudente.mediaVoti
    };

    this.studenti.push(studente);

    // Svuoto il form dopo l’inserimento
    this.nuovoStudente = {
      nome: '',
      classe: '',
      mediaVoti: null
    };
  }
}
