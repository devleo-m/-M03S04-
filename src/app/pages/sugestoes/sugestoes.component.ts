import { Component, inject } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { CardComponent } from '../../components/card/card.component';
import { ModalComponent } from '../../components/modal/modal.component';
import { ToastrService } from 'ngx-toastr';
import { FormsModule } from '@angular/forms';
import { SugestaoInterface } from '../../intefaces/sugestao.interface';
import { SugestaoService } from '../../service/sugestao.service';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-sugestoes',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    CardComponent,
    MatIconModule,
    FormsModule,
    MatButtonModule,
    MatDialogModule,
  ],
  templateUrl: './sugestoes.component.html',
  styleUrl: './sugestoes.component.scss',
})
export class SugestoesComponent {
  sugestaoService = inject(SugestaoService);
  modal = inject(MatDialog);

  textoPesquisa!: string;
  listaSugestoes: SugestaoInterface[] = [];

  constructor(private toastr: ToastrService) {}

  ngOnInit() {
    this.sugestaoService.get().subscribe({
      next: (sugestoes: SugestaoInterface[]) => {
        this.listaSugestoes = sugestoes;
        this.toastr.success('Sugestões carregadas com sucesso!');
      },
      error: (erro: any) => {
        this.toastr.error('Nenhuma sugestão encontrada!');
        console.error('Erro: ', erro);
      },
    });
  }

  search() {
    this.toastr.info('Buscando sugestões!');
    if (this.textoPesquisa) {
      this.sugestaoService.get().subscribe((retorno) => {
        this.listaSugestoes = retorno.filter((sugestao) => {
          return sugestao.titulo
            .toLowerCase()
            .includes(this.textoPesquisa.toLowerCase());
        });
      });
    } else {
      this.sugestaoService.get().subscribe((retorno) => {
        this.listaSugestoes = retorno;
      });
    }
  }

  openModal(sugestaoId: number): void {
    this.sugestaoService.getSugestaoById(sugestaoId).subscribe({
      next: (sugestao: SugestaoInterface) => {
        const dialogRef = this.modal.open(ModalComponent, {
          width: '600px',
          data: sugestao,
        });

        this.toastr.info('Abrindo sugestão!');

        dialogRef
          .afterClosed()
          .subscribe((result: SugestaoInterface | undefined) => {
            if (result) {
              const index = this.listaSugestoes.findIndex(
                (s) => s.id === result.id
              );
              if (index !== -1) {
                this.listaSugestoes[index] = result;
              }
            }
          });
      },
      error: (error) => {
        this.toastr.error('Falha ao carregar sugestão');
        console.error('Erro ao carregar a sugestão:', error);
      },
    });
  }
}
