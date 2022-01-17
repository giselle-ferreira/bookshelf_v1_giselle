import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-navegacao',
  templateUrl: './navegacao.component.html',
  styleUrls: ['./navegacao.component.scss']
})
export class NavegacaoComponent {

  // Itens do menu principal
  tituloNav = 'Bookshelf V1';
  usuario={userName: 'Giselle Ferreira', icone:'remember_me'};

  // Itens da barra superior
  tituloBarra = '[Sua Estante Virtual]';

  // Itens de icones e imagens de navegação
  iconeGeral = '../../assets/Imagens/ShelfBook.png';
  larguraIcone = 80;
  alturaIcone = 80;

  // Controle das rotas do menu
  itensMenu = [
    {linkMenu: '/cdd', labelMenu:'Classes Dewey', hab: true},
    {linkMenu: '/feed', labelMenu:'Feed Notícias', hab: true},
    {linkMenu: '/clube', labelMenu:'Pagina Usuário', hab: false},
    {linkMenu: '/leitura', labelMenu:'Clubes de Leitura', hab: false},
    {linkMenu: '/estante', labelMenu:'Estante Particular', hab: false}
  ]

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) {}

}
