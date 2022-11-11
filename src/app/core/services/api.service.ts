import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HistoriqueG } from './../models/historiqueG';
import { Injectable } from '@angular/core';
import { HistoriqueE } from '../models/historique-e';
import { ViewMateriels } from '../models/view-materiels';

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
  auth(data : any):Observable<any>{
    console.log(data);
    return this.http.post<any>(environment.baseUrl,data);
  }
  getAllMateriels () : Observable<any> {
    return this.http.get<any>(environment.baseUrl+"/historiqueMateriel.json");
  }
  getAllViewMateriels () : Observable<ViewMateriels[]>{
    return this.http.get<ViewMateriels[]>(environment.baseUrl+"viewMateriel.json");
  }
}

   

