function convertirMilliSecEnAnnee(pDateMilliSec)
{
    return Math.trunc(pDateMilliSec/(1000*60*60*24*365));
}
function convertirMilliSecEnMois(pDateMilliSec)
{
    return Math.trunc(pDateMilliSec/(1000*60*60*24*31));
}
function convertirMilliSecEnJours(pDateMilliSec)
{
    return Math.trunc(pDateMilliSec/(1000*60*60*24));
}

function convertirMilliSecEnAnneeMois(pDateMilliSec)
{
    let dureeMilliSec = pDateMilliSec;
    let nbAnnees = convertirMilliSecEnAnnee(dureeMilliSec);
    dureeMilliSec-= nbAnnees*1000*60*60*24*365;
    let nbMois =convertirMilliSecEnMois(dureeMilliSec);
    return `${nbAnnees} ans et ${nbMois} mois`;
}