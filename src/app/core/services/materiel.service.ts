import { Injectable } from '@angular/core';
import { Action, IMateriels } from './../models/materiels';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MaterielService {
  list : Action[] = [
    {
      id:1,
      type:"edit",
      url:"assets/images/pen.svg",
      action:(type:string,row:IMateriels)=>{
        this.route.navigate([`/pages/materiels/edit/${row.id}`])
      }
    },
    {
      id:2,
      type:"../view",
      url:"assets/images/eye.svg",
      action:(type:string,row:IMateriels)=>{
        this.route.navigate([`/pages/materiels/listes/${row.id}`])
      }
    },
    {
      id:3,
      type:"delete",
      url:"assets/images/delete.svg",
      action:(type:string,row:IMateriels)=>{console.log(type)}
    }
  ]
 #listAction = new BehaviorSubject<Action[]>(this.list);
  constructor( private materielApi : HttpClient , private route: Router) {
    // list.map((act,i)=>{
    //   act.action = this.allAction()[i];
    //   return act
    // })
  }
  getListAction () : Observable<Action[]> {
    return this.#listAction;
  }
  viewMateriel(type:string,row:IMateriels){
    console.log(type)
  }
  editMateriel(type:string,row:IMateriels){
    console.log(type)
  }
  deleteMateriel(type:string,row:IMateriels){
    console.log(type)
  }
  allAction () : any[] {
    return [
      (type:string,row:IMateriels)=>this.viewMateriel(type,row),
      (type:string,row:IMateriels)=>this.editMateriel(type,row),
      (type:string,row:IMateriels)=>this.deleteMateriel(type,row)
    ]
  }
  getAllMateriels () : Observable<IMateriels[]>{
    // return this.materielApi.get<IMateriels[]>(environment.baseUrl+"getAllMaterials/");
    return this.materielApi.get<IMateriels[]>(environment.baseUrl+"getAllMaterials/");
  }
  getAllMaterielsDisponible () : Observable<IMateriels[]>{
    return this.materielApi.get<IMateriels[]>(environment.baseUrl+"getMaterialDisponible/");
  }
  getAllMaterielsHistoriques () : Observable<IMateriels[]>{
    return this.materielApi.get<IMateriels[]>(environment.baseUrl+"historiqueMateriel.json");
  }
  
  addMaterial (data:IMateriels) : Observable<IMateriels> {
    return this.materielApi.post<IMateriels>(environment.baseUrl+"materielCreate/",data);
  }
}
