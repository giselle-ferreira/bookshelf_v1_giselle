import { Dashboard } from './../modelosInterface/dashboard';
import { DashboardService } from './../servicosInterface/dashboard.service';
import { Component, Pipe } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Observable, catchError, of } from 'rxjs';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent {
  usuario={userName: 'Giselle Ferreira', icone:'remember_me'};


  cards$: Observable<Dashboard[]>;

  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return this.cards$;
      }
      return this.cards$;
    })
  );

  constructor(private breakpointObserver: BreakpointObserver,
    private dashboardService: DashboardService) {
    this.cards$ = dashboardService.listagemFeed()
      .pipe(
        catchError(error => {
          return of([])
        })
      )
    }

  }
// }
