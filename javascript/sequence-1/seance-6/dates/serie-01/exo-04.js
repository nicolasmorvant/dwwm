function getDateAgo(pDate,pNombreJours)
{
    // on enleve le nombre de jours converti en milli seconde
    let resultat = pDate-(24*60*60*1000)*pNombreJours;
    // resultat contient la date cherchée sous forme de 
    // milli secondes
    console.log(pDate.getTime());
    console.log(resultat);
    // a partir des milli secondes depuis 1/1/1970 on crée la date
    return new Date(resultat);
}

let date = new Date();
console.log(date);
console.log(getDateAgo(date,1));
console.log(getDateAgo(date,2));
console.log(getDateAgo(date,365));
