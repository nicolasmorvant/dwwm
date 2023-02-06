function getLocalDay(pDate)
{
    let resultat = 0 ;
    if (pDate.getDay()!=0)
        resultat = pDate.getDay()
    else
    resultat = 7;
    return resultat;
}

let date = new Date(2012,0,3);
console.log(date);
console.log(getLocalDay(date));