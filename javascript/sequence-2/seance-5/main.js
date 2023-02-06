/*let stagiaire1 = ['Martin','DUPONT'];
let stagiaire2 = ['Vincent','MARTIN'];*/

/*console.log(stagiaires);
console.log(stagiaires[1][0]);

let stagiaireA = new Stagiaire();
stagiaireA.nom = "DUPONT";
stagiaireA.prenom = "Martin";

let stagiaireB = new Stagiaire();
stagiaireB.nom = "MARTIN";
stagiaireB.prenom = "Vincent";

let stagiaires = [stagiaireA,stagiaireB];

console.log(stagiaires[1].prenom);
console.log(stagiaires[0].salutation());

let anotherStagiaire = new Stagiaire("Lucette","Anderson");
stagiaires.push(anotherStagiaire);
console.log(anotherStagiaire.salutation());

/*let classe = new Classe("Chimie"); //Deuxième paramètre est une liste vide
console.log(classe);
let eleve1 = classe.ajouterStagiaire();
let eleve2 = new Stagiaire("Marie","Cachet");
classe.listeStagiaire.push(eleve2);

console.log(classe.afficherClasse());*/



//EXERCICE 2

var stage;

let creer = document.querySelector("#creer");
let afficher = document.querySelector("#afficherstage");

function creerStage(event) //récupère les valeurs des inputs et crée un stage, stocké dans la variable stage
{
    let nomClasse = document.querySelector("#nomClasse").value;
    let listeStagiaire=[];
    let date1 = new Date(document.querySelector("#dateDebut").value).toLocaleDateString();
    let date2 = new Date(document.querySelector("#dateFin").value).toLocaleDateString();
    
    stage = new Classe(nomClasse,listeStagiaire,date1,date2);
    
    let paragrapheCreation = document.createElement("h1");
    paragrapheCreation.textContent="stage créé";
    paragrapheCreation.style.fontVariant="small-caps";
    paragrapheCreation.style.textAlign="center";
    document.body.appendChild(paragrapheCreation);
}

/*function verifStagiaire(p,n)
{
    let dejaPresent = false;
    let i = 0;
    while(i < stage.listeStagiaire.length && dejaPresent === false)
    { 
        if(p == stage.listeStagiaire[i] && n == stage.listeStagiaire[i+1])
        {
            dejaPresent = true;       
        }
        else if(p == "" || n == "")
        {
            dejaPresent = true;
        }
        i+=2; //On incrémente de 2 pour récupérer le prochain prénom
    }
    return dejaPresent;
}*/

function afficherStage() //affiche le contenu de la variable stage
{
    //FORMULAIRE D'AJOUT D'UN STAGIAIRE
    let formulaireAjoutStagiaire = document.createElement("fieldset");
    formulaireAjoutStagiaire.setAttribute("id","ajout");
    formulaireAjoutStagiaire.style.width = "500px";
    formulaireAjoutStagiaire.style.margin = "0 auto";
    document.body.appendChild(formulaireAjoutStagiaire);
    //Ajout d'un label
    let legendFormulaire = document.createElement("legend");
    legendFormulaire.textContent="Ajout d'un stagiaire";
    formulaireAjoutStagiaire.appendChild(legendFormulaire);
    //label prénom
    let labelPrenom = document.createElement('label');
    labelPrenom.setAttribute("for","prenomNouveauStagiaire");
    labelPrenom.textContent="Prénom : ";
    formulaireAjoutStagiaire.appendChild(labelPrenom);
    //Input prénom
    let prenomInput = document.createElement("input");
    prenomInput.setAttribute("type","text");
    prenomInput.setAttribute("id","prenomNouveauStagiaire");
    formulaireAjoutStagiaire.appendChild(prenomInput);
    //label nom
    let labelNom = document.createElement('label');
    labelNom.setAttribute("for","nomNouveauStagiaire");
    labelNom.textContent="Nom : ";
    formulaireAjoutStagiaire.appendChild(labelNom);
    //Input nom
    let nomInput = document.createElement("input");
    nomInput.setAttribute("type","text");
    nomInput.setAttribute("id","nomNouveauStagiaire");
    formulaireAjoutStagiaire.appendChild(nomInput);
    //Bouton d'envoi
    let ajouterStagiaire = document.createElement('input');
    ajouterStagiaire.setAttribute("type","submit");
    ajouterStagiaire.textContent="Valider";
    formulaireAjoutStagiaire.appendChild(ajouterStagiaire);

    //AJOUT STAGIAIRE
    ajouterStagiaire.addEventListener("click",(e)=>
    {
        e.preventDefault();

        let nom=nomInput.value;
        let prenom=prenomInput.value;

        //Création d'un paragraphe pour l'affichage du nouveau stagiaire
        //let paragrapheListeStagiaire = document.createElement("p");
       
        /*if(verifStagiaire(prenom,nom)==false)
        {*/
        stage.ajouterStagiaire(prenom,nom);
        /*}
        else
        {
            paragrapheListeStagiaire.textContent="Erreur dans l'ajout";
        }*/

        //Affichage de la classe
        let paragrapheStage = document.createElement("p");
        paragrapheStage.textContent=stage.afficherClasse();                                                      
        paragrapheStage.style.marginLeft="50px";
        document.body.appendChild(paragrapheStage); 
        });
}


//EXECUTION
creer.addEventListener("click",(e)=>{
    e.preventDefault();
    creerStage();
});

afficher.addEventListener("click",(e)=>{
    e.preventDefault();
    afficherStage();
});




