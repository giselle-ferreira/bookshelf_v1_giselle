import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, tap } from 'rxjs';

import { Dashboard } from './../modelosInterface/dashboard';

@Injectable()
export class DashboardService {

  private readonly uriAPI = '../../assets/dashboard.json';

  constructor(private cardsDashBoard: HttpClient) { }

  listagemFeed(){
    return this.cardsDashBoard.get<Dashboard[]>(this.uriAPI)
    .pipe(
      first(),
      tap(apiDashboard => console.log(apiDashboard))
    )
  }
}
