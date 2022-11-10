import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HistoriqueG } from './../models/historiqueG';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient ) { }
  getAllHistory() : Observable<HistoriqueG[]>  {
    return this.http.get<HistoriqueG[]>(environment.baseUrl+"historyG.json");
  }
}