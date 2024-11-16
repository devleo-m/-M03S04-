import { DatePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ComentarioInterface } from '../../intefaces/sugestao.interface';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  @Input() elemento:
    | {
        id: number;
        titulo: string;
        descricao: string;
        dataEnvio: Date;
        dataAtualizacao: Date;
        comentarios: ComentarioInterface[];
      }
    | undefined;
}
