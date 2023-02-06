class Maison
{
    /*
        Ecrivez le fichier maison.js qui contient la définition de la classe 
        Maison (numeroRue, typeVoie, nomVoie, codePostal, ville). 
        Écrire le script JavaScript dans main.js qui demande les informations et afficher l’objet créé dans le log.
    */
   numeroRue;
   typeVoie;
   nomVoie;
   codePostal;
   ville;

   constructor(pNumeroVoie,pTypeVoie,pNomVoie,pCodePostal,pVille)
   {
        this.numeroRue = pNumeroVoie;
        this.typeVoie = pTypeVoie;
        this.nomVoie = pNomVoie;
        this.codePostal = pCodePostal;
        this.ville = pVille;
   }
   afficher()
   {
    console.log(`Adresse : ${this.numeroRue}, ${this.typeVoie} ${this.nomVoie} / ${this.codePostal} - ${this.ville}`);
   }
}