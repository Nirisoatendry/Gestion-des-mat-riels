export interface Action {
    id:number,
    type:string,
    url:string,
    action:Function
}
export interface IMateriels{
    id: number,
    type : string,
    status : string,
    etat: string,
    action?:Action[]
}
