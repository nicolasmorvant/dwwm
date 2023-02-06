function afficherEtoilesConsole(e){
    let etoiles=null;
    do
    {
        
        let etoiles = parseInt(prompt("Donnez un nombre d'étoiles : "));
        if(etoiles < 1 || etoiles > 10){
            console.log(`${etoiles} Le nombre d'étoiles n'est pas correct`);
        }
        else{
            let ee=etoiles;
            let chaine = "";
            while(etoiles>0){
                chaine+="*";
                etoiles --;
            }
            console.log(`${ee} a été saisi ${chaine}`);   
        }
    } while (etoiles < 1 || etoiles > 10);
}

console.log(afficherEtoilesConsole(5));