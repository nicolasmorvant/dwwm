class Personne
{
    nom;
    prenom;
    /**
     * ce construction construit la personne avec les infos
     * @param {*} pNom nom de la personne
     * @param {*} pPrenom prenom de la personne
     */
    constructor(pNom,pPrenom)
    {
        this.nom= pNom
        this.prenom = pPrenom;
    }
    afficher()
    {
        console.log(`Bonjour ${this.prenom} ${this.nom}`);
    }
}

