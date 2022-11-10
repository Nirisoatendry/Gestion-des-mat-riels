import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {ViewMateriels} from "../models/view-materiels";
import {HttpClient} from "@angular/common/http";
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ViewMaterielsService {

  constructor(private materielApi: HttpClient) { }

  getAllViewMateriels () : Observable<ViewMateriels[]>{
    return this.materielApi.get<ViewMateriels[]>(environment.baseUrl+"viewMateriel.json");
  }
}

