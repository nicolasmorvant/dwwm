let rayonCercle = 50;
let resultat = rayonCercle + 10;
resultat = rayonCercle - 5;
resultat = rayonCercle * 2;
resultat = rayonCercle / 10;

let paragraphe= document.getElementById("paragraphe");
paragraphe.innerText=`La variable résultat vaut : ${resultat}`;
//alert(resultat);
console.log(resultat);

/* Portée de var et de let 
var : dans tout le script. 
let : dans le bloc d'instructions. */

let message = "Le cercle est de rayon " + rayonCercle;
console.log(message);

let age = "44";
age+=1; // age = "441"
console.log(age);
let ageEnNombre = parseInt(age);
ageEnNombre += 1;
console.log(ageEnNombre);

let newParagraphe = document.createElement("p");
newParagraphe.innerHTML = message;
document.body.append(newParagraphe);

//let test = document.createTextNode("coucou");
//document.body.append(test);