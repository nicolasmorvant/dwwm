let etoiles = prompt("Saisissez un nombre d'étoiles : ");
if(etoiles >= 1 & etoiles < 11){
    let affichageEtoiles = "";
    for (let i = etoiles; i > 0 ; i--) {
        affichageEtoiles+="*";        
    }
    console.log(`${etoiles}`);
    console.log(`"${affichageEtoiles}"`);
}
else{
    console.log(`${etoiles}`);
    console.log(`Le nombre d’étoile n’est pas correct`);
}