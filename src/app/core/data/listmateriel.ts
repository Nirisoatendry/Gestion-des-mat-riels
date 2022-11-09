import { Materiels } from './../models/materiels';

export const list_materiels : Materiels[] = [
    {
        id:1,
        Categories:"Pc",
        Description : "azertyuiop",
        Actions : [
            {
                id:1,
                type:"Edit",
                action:()=>console.log
            }
        ]
    },
    {
        id:2,
        Categories:"Matériel reseaux",
        Description : "azertyuiop",
        Actions : [
            {
                id:1,
                type:"Edit",
                action:()=>console.log
            }
        ]
    }
]