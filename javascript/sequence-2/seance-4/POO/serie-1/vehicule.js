class Vehicule
{

    /*
        Ecrivez le fichier vehicule.js qui contient la définition de la classe Vehicule (marque, modèle, nombrePlaces). 
        Écrire le script javascript dans main.js qui demande la marque, le modèle et le nombre de place du véhicule (prompt) 
        et instancie un objet de la classe Animal. Affichez ensuite ce véhicule dans le log.
    */
    marque;
    modele;
    nombrePlaces;
    constructor(pMarque,pModele,pNombrePlaces)
    {
        console.log('constructor');
        this.marque=pMarque;
        this.modele= pModele;
        this.nombrePlaces = pNombrePlaces;
    }
    afficher()
    {
        console.log(`Marque : ${this.marque} | Modèle : ${this.modele} | Nombre de places : ${this.nombrePlaces}`);
    }
}

