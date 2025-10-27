import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-studente',
  standalone: true, // 👈 necessario per usarlo in altri componenti standalone
  templateUrl: './studente.component.html'
})
export class StudenteComponent {
  @Input() nome: string = '';
  @Input() classe: string = '';
}
