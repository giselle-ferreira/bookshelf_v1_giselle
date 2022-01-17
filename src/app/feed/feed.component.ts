import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent {
  usuario={userName: 'Giselle Ferreira', icone:'remember_me'};

  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'O melhor livro de Janeiro', img: '../../assets/imagems/1.png', cols: 1, rows: 1 },
          { title: 'Dica dos Leitores', img: '../../assets/imagems/2.png', cols: 1, rows: 1 },
          { title: 'O mais comentado da semana', img: '../../assets/imagems/3.png', cols: 1, rows: 1 },
          { title: 'Indicação do Time Bookshelf', img: '../../assets/imagems/4.png', cols: 1, rows: 1 }
        ];
      }

      return [
        { title: 'O melhor livro de Janeiro', img: '../../assets/imagems/1.png', cols: 2, rows: 1 },
        { title: 'Dica dos Leitores', img: '../../assets/imagems/2.png', cols: 1, rows: 1 },
        { title: 'O mais comentado da semana', img: '../../assets/imagems/3.png', cols: 1, rows: 2 },
        { title: 'Indicação do Time Bookshelf', img: '../../assets/imagems/4.png', cols: 1, rows: 1 }
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {}
}
