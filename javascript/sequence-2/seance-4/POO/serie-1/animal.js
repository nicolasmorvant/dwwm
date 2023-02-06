class Animal
{
    nom;
    espece;
    constructor(pNom,pEspece)
    {
        console.log('constructor');
        this.nom= pNom
        this.espece = pEspece;
    }
    afficher()
    {
        console.log(`Nom de l'animal : ${this.nom} | Espèce de l'animal : ${this.espece}`);
    }
}

