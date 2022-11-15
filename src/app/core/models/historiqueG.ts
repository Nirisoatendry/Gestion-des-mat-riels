export interface etudiant{
    nom ?: string
    prenom ?: string
}
export interface HistoriqueG extends etudiant {
    id_materiel : string,
    type : string,
    statut : string,
    date : Date 
} 