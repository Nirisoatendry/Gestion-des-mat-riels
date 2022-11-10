import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HistoriqueE } from '../models/historique-e';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private Http : HttpClient) { }
    getHistoryEtudiant() : Observable<HistoriqueE[]>{
      
      return this.Http.get<HistoriqueE[]>(environment.baseUrl+'historiqueEtudiant.json');
    }
}
