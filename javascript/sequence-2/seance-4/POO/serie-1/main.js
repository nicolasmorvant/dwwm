//PERSONNE
/*let nom = prompt("Bonjour, quel est votre nom ?");
let prenom = prompt("Quel est votre prénom ?");
let p1 = new Personne(nom,prenom);
p1.afficher();*/

//ANIMAL
/*let nom = prompt("Bonjour, quel est le nom de l'animal ?");
let espece = prompt("Quelle est l'espèce de l'animal ?");
let animal1 = new Animal(nom,espece);
animal1.afficher();*/

//VEHICULE
/*let marque = prompt("Bonjour, quelle est la marque du véhicule ?");
let modele = prompt("Quelle est le modèle du véhicule ?");
let nombrePlaces = prompt("Combien y a t-il de places disponibles dans le véhicule ?");
let vehicule1 = new Vehicule(marque,modele,nombrePlaces);
vehicule1.afficher();*/

//MAISON
/*let numero = prompt("Quel est le numéro de la rue ? "); 
let type = prompt("Quel est le type de voie ?"); 
let nom = prompt("Quel est le nom de la rue ?"); 
let code = prompt("Quel est le code postal ?"); 
let ville = prompt("Quelle est la ville ?"); 
let maison1 = new Maison(numero,type,nom,code,ville);
maison1.afficher();*/

/*
let formateur = new Personne('BRU','Thierry');
let chatFormateur = new Animal ('Arwen','chat');
let vehiculeFormateur = new Vehicule('ninebot','NavBOT G30MAX','1');
let domicileFormateur = new Maison(1,'rue','du paradis','18999','Las Angelos');*/


//EXERCICE 2

/*let rectangle1 = new Rectangle(10,2);
rectangle1.afficherRectangle();
console.log("Le périmètre du rectangle est : " + rectangle1.calculPerimetre());
console.log("La surface du rectangle est : " + rectangle1.calculSurface());*/

let cercle = new Cercle(Math.abs(parseInt(prompt("Quel est le rayon du cercle ?"))));
cercle.afficherCercle();

let r = document.createElement("p");
document.body.appendChild(r);
r.textContent = "Le cercle a pour rayon : " + cercle.rayon + "cm";
let br = document.createElement("br");
document.body.appendChild(br);
let per = document.createElement("p");
document.body.appendChild(per);
per.textContent+=`Périmètre = ${cercle.calculPerimetre()}cm`;
let ai = document.createElement("p");
document.body.appendChild(ai);
ai.textContent=`Aire = ${cercle.calculSurface()} cm²`;