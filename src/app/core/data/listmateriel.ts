import { Action, IMateriels } from './../models/materiels';

export const Listactions : Action[] = [
    {
      id:1,
      type:"edit",
      url:"assets/images/pen.svg",
      action:(type:string,row:IMateriels)=>{console.log(type)}
    },
    {
      id:2,
      type:"view",
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