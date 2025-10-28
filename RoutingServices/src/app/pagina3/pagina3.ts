import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';           // serve per *ngFor
import { StudenteComponent } from '../studente/studente'; // importa il figlio
import { StudentiService } from '../services/studenti-service';

@Component({
  selector: 'app-pagina3',
  standalone: true,
  imports: [CommonModule, StudenteComponent], // 👈 fondamentale
  templateUrl: './pagina3.html'
})
export class Pagina3Component {
  studenti: any[] = [];
constructor(private studentiService: StudentiService) {}
ngOnInit() {
this.studenti = this.studentiService.getStudenti();
}
}
