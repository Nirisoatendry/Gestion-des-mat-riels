import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HistoriqueG } from './../models/historiqueG';
import { Injectable } from '@angular/core';
import { HistoriqueE } from '../models/historique-e';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient ) { }
  getAllHistory() : Observable<HistoriqueG[]>  {
    return this.http.get<HistoriqueG[]>(environment.baseUrl+"historyG.json");
  }
  getHistoryEtudiant() : Observable<HistoriqueE[]>{
      
    return this.http.get<HistoriqueE[]>(environment.baseUrl+'historiqueEtudiant.json');
  }
}

   

