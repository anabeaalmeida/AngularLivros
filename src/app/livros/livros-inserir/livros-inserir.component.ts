import { Component, EventEmitter, Output } from '@angular/core';
import { Livros } from '../livros.model';

@Component({
  selector: 'app-livros-inserir',
  templateUrl: './livros-inserir.component.html',
  styleUrls: ['./livros-inserir.component.css']
})
export class LivrosInserirComponent {
  @Output() livrosAdicionado = new EventEmitter<Livros>();
  id: string;
  titulo: string;
  autor: string;
  numpaginas: string;

  onAdicionarLivros() {
    const livros: Livros = {
      id: this.id,
      titulo: this.titulo,
      autor: this.autor,
      numpagina: this.numpaginas
    };
    this.livrosAdicionado.emit(livros);
  }
}
