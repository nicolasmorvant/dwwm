function afficherEtoilesConsole(e)
{   
    let etoiles=null;
    do
    {
        let etoiles = parseInt(prompt("Donnez un nombre d'étoiles : "));
        if(etoiles < 1 || etoiles > 10){
            console.log(`${etoiles} Le nombre d'étoiles n'est pas correct`);
            etoiles = parseInt(prompt("Donnez un nombre d'étoiles : "));
        }
        else
        {   
            let chaine="";
            console.log(`${etoiles} a été saisi`);
            for(let i = 0;i<etoiles;i++)
            {
                chaine+="*";
                console.log(`${chaine}`);
            }
            }
    }while (etoiles < 1 || etoiles > 10);
}

console.log(afficherEtoilesConsole(5));