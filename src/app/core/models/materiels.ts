export interface Action {
    id:number,
    type:string,
    url:string,
    action:Function
}
export interface IMateriels{
    id: number,
    type : string,
    statut?: string,
    etat?: string,
    date ?: Date,
    action?:Action[] | string,
}
