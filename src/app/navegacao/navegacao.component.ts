import { AppLoginComponent } from './../app-login/app-login.component';
import { MatDialog } from '@angular/material/dialog';
import { MenuNavegador } from './../modelosInterface/menuNavegador';
import { NavegacaoService } from './../servicosInterface/navegacao.service';
import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable, catchError, of } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-navegacao',
  templateUrl: './navegacao.component.html',
  styleUrls: ['./navegacao.component.scss']
})
export class NavegacaoComponent {

   // Itens do menu principal
  tituloNav = 'Bookshelf V1';
  // usuario={userName: 'Giselle Ferreira', icone:'remember_me'};


  // Itens da barra superior
  // tituloBarra = '[Sua Estante Virtual]';

  // Itens de icones e imagens de navegação
  iconeGeral = '../../assets/Imagens/ShelfBook.png';
  larguraIcone = 80;
  alturaIcone = 80;

  itensMenu$: Observable<MenuNavegador[]>;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver,
    private telaLogin: MatDialog,
    private navegadorService: NavegacaoService) {
      this.itensMenu$ = navegadorService.listagemMenu()
      .pipe(
        catchError(error => {
          return of([])
        })
      )
    }

    abrirLogin(erroMsg: string){
      this.telaLogin.open(AppLoginComponent,{
        data:erroMsg
      })
    }
}
