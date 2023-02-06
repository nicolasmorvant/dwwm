class Stagiaire
{
    nom;
    prenom;
    constructor(pPrenom, pNom)
    {
        this.prenom = pPrenom;
        this.nom = pNom;
    }
    salutation()
    {
        return `${this.prenom} ${this.nom}`;
    }
}