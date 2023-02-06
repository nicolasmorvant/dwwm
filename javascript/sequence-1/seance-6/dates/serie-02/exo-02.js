let birth = new Date(1756,0,27)
let death = new Date(1791,11,5)
let lifeTimeEnMilliSec = death-birth;
//let ageAnnee = death.getFullYear()-birth.getFullYear() 
// ce calcul peut être en erreur de 1 an la date de mort est avant la date d'anniversaire
console.log(`Mozart a vécu ${convertirMilliSecEnAnnee(lifeTimeEnMilliSec)} années.`);

let nbAnnees = convertirMilliSecEnAnnee(lifeTimeEnMilliSec);
lifeTimeEnMilliSec-= nbAnnees*1000*60*60*24*365;
let nbMois =convertirMilliSecEnMois(lifeTimeEnMilliSec);
lifeTimeEnMilliSec-= nbMois*1000*60*60*24*31;
let nbJours = convertirMilliSecEnJours(lifeTimeEnMilliSec);
console.log(`Mozart a vécu ${nbAnnees} années,${nbMois} mois et ${nbJours}jours.`);
console.log(convertirMilliSecEnAnneeMois(death-birth));


