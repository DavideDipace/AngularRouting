import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';           // serve per *ngFor
import { StudenteComponent } from '../studente/studente'; // importa il figlio

@Component({
  selector: 'app-pagina3',
  standalone: true,
  imports: [CommonModule, StudenteComponent], // 👈 fondamentale
  templateUrl: './pagina3.html'
})
export class Pagina3Component {
  studenti = [
    { id: 1, nome: 'Mario', classe: '5D', mediaVoti: 4.1 },
    { id: 2, nome: 'Luca', classe: '5D', mediaVoti: 7.3 },
    { id: 3, nome: 'Luigi', classe: '5D', mediaVoti: 3.9 },
    { id: 4, nome: 'Paolo', classe: '5D', mediaVoti: 7.0 },
    { id: 5, nome: 'Andrea', classe: '5D', mediaVoti: 5.7 },
  ];
}
