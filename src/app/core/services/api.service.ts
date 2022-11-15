import { message } from './../models/response';
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
    return this.http.get<HistoriqueG[]>(environment.baseUrl+"getHistory/");
  }
  getHistoryEtudiant() : Observable<HistoriqueG[]>{
    return this.http.post<HistoriqueG[]>(environment.baseUrl+'getHistoryEtudiant/',{RFID:1});
  }
  auth(data : any):Observable<message>{
    return this.http.post<message>(environment.baseUrl+"adminLogin/",data);
  }
  getAllMateriels () : Observable<any> {
    return this.http.get<any>(environment.baseUrl+"historiqueMateriel.json");
  }
  getAllViewMateriels (id_materiel:number) : Observable<ViewMateriels[]>{
    return this.http.post<ViewMateriels[]>(environment.baseUrl+"getHistoryMaterial/",{id:id_materiel});
  }
  emprunt(data:any):Observable<any>{
    return this.http.post(environment.baseUrl+"empruntRemise/",data);
  }
}

   

