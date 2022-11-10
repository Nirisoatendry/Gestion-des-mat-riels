export interface Action {
    id:number,
    type:string,
    url:string,
    action:Function
}
export interface IMateriels{
    id: number,
    type : string,
    status?: string,
    etat?: string,
    date ?: Date,
    action?:Action[] | string,
}
