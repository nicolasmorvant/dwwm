class Personne
{
    nom;
    prenom;
    age;
    /**
     * ce construction construit la personne avec les infos
     * @param {*} pNom nom de la personne
     * @param {*} pPrenom prenom de la personne
     * @param {*} pAge age de la personne
     */
    constructor(pNom,pPrenom,pAge)
    {
        console.log('constructor');
        this.age=pAge;
        this.nom= pNom
        this.prenom = pPrenom;
    }
    afficher()
    {
        console.log(`Bonjour je s'appelerions ${this.prenom} et j'aurions ${this.age} ans`);
    }
}

let personne = new Personne("BRU","Thierry",45);
// personne.prenom="thierry";
// personne.age = 45;
// personne.nom="BRU"
console.log(personne);
console.log(personne.prenom);

let stagiaire = new Personne("MICHEL","Bryan",25);
let tableau = new Array();
tableau.push(stagiaire)
tableau.push(personne)
console.log(tableau);
console.log(tableau[1].prenom);
tableau[0].afficher();