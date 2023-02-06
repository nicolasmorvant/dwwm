function dollarVersEuro(pMontant)
{
    return pMontant/1.06;
}
function couronneVersEuro(pMontant)
{
    return pMontant/151.69;
}
function euroVersDollar(pMontant)
{
    return pMontant*1.06;
}
function euroVersCouronne(pMontant)
{
    return pMontant*151.69;
}

function convertir(event)
{
    // récupération du montant de départ depuis le champ de saisie
    let montantCouronne= document.querySelector('#montantDepart');
    // le montant est passé de couronne a euro
    let montantEuro = couronneVersEuro(montantCouronne.value)
    // récupération du mchamp ou va être mis le résulat
    let montantDollars = document.querySelector('#montantArrivee');
    // le montant est passé d'euro a dollar
    montantDollars.value = euroVersDollar(montantEuro);
}

