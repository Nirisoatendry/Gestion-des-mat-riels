import { Injectable } from '@angular/core';
import { Action, IMateriels } from './../models/materiels';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
export var list : Action[] = [
    {
      id:1,
      type:"edit",
      url:"assets/images/pen.svg",
      action:(type:string,row:IMateriels)=>{console.log(type)}
    },
    {
      id:2,
      type:"../view",
      url:"assets/images/eye.svg",
      action:(type:string,row:IMateriels)=>{console.log(type)}
    },
    {
      id:3,
      type:"delete",
      url:"assets/images/delete.svg",
      action:(type:string,row:IMateriels)=>{console.log(type)}
    }
  ]
@Injectable({
  providedIn: 'root'
})
export class MaterielService {
 #listAction = new BehaviorSubject<Action[]>(list);
  constructor( private materielApi : HttpClient ) {
    list.map((act,i)=>{
      act.action = this.allAction()[i];
      return act
    })
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
    return this.materielApi.get<IMateriels[]>(environment.baseUrl+"materiel.json");
  }
  getAllMaterielsHistoriques () : Observable<IMateriels[]>{
    return this.materielApi.get<IMateriels[]>(environment.baseUrl+"historiqueMateriel.json");
  }
}
