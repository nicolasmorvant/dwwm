let etoiles = prompt("Saisissez un nombre d'étoiles : ");

while(etoiles < 1 || etoiles > 10)
{
    console.log(`${etoiles}`);
    console.log(`Le nombre d’étoile n’est pas correct`);
    etoiles = prompt("Saisissez un nombre d'étoiles : ");
}

let affichageEtoiles = "";
for (let i = etoiles; i > 0 ; i--) {
    affichageEtoiles+="*";        
}
console.log(`${etoiles}`);
console.log(`"${affichageEtoiles}"`);