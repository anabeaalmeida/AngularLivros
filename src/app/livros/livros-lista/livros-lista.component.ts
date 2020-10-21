import { Component, Input, OnInit } from '@angular/core';
import { Livros } from '../livros.model';


@Component({
  selector: 'app-livros-lista',
  templateUrl: './livros-lista.component.html',
  styleUrls: ['./livros-lista.component.css']
})
export class LivrosListaComponent implements OnInit {

  @Input() livros: Livros[] = [];
  /*clientes = [{
    id: '123',
    titulo: 'Sherlok',
    autor: 'James',
    numpaginas: '222'
  },
  {
    id: '11',
    titulo: 'A volta dos que não foram',
    autor: 'Sabrina Young',
    numpaginas: '311'
  }
  ];*/
  constructor() { }

  ngOnInit(): void {
  }

}
