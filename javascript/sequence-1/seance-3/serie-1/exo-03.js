

let etoiles = prompt("Saisissez un nombre d'étoiles : ");

while(etoiles < 1 || etoiles >= 11){
    etoiles = prompt("Le nombre d'étoiles n'est pas correct, saisissez un nouveau nombre : ");
}

console.log(`n = ${etoiles}`);
let affichageEtoiles = "*"
for (let index = 0; index < etoiles; index++) {
    console.log(affichageEtoiles);    
    affichageEtoiles+="*";
}