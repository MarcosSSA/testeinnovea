import { LivrosService } from './services/livros.service';
import { Component } from '@angular/core';
import { Livro } from './model/livro';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  livros: Livro[] = [];
  displayedColumns = ['source','author'];
  
  constructor(private livroService:LivrosService){

  }

  ngOnInit(): void {

  }

  buscarLivros(){
    this.livroService.buscarLivros().subscribe((items) => {
      this.livros = items.resultado;
    })
  }

  limpar(){
    
  }

}
