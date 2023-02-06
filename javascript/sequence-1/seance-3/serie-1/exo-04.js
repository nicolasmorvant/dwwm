let min=1; 
let max=5;  
let random = Math.round(Math.random() * (max - min)) + min; 

let coupsRestants = 3;
console.log(random);

let nombreUtilisateur = prompt(`Quel est le chiffre mystère  : `);

do {
    coupsRestants--;
    if(nombreUtilisateur>random)
        {
            nombreUtilisateur = prompt(`Coups restants : ${coupsRestants} . Le chiffre mystère est plus petit que ${nombreUtilisateur}`);
        }
        else if(nombreUtilisateur<random)
        {
            nombreUtilisateur = prompt(`Coups restants : ${coupsRestants} . Le chiffre mystère est plus grand que ${nombreUtilisateur}`);
        }
    }while (nombreUtilisateur != random && coupsRestants > 1);    

if(nombreUtilisateur==random)
{
    alert(`Félicitations, vous avez trouvé le chiffre mystère : ${nombreUtilisateur}`); 
}
if(coupsRestants===0)
{
    alert("Vous avez perdu !");
}

/*
CORRECTION DE THIERRY

//tirage aléatoire
let nombreCherche = Math.round(Math.random() * (5-1) + 1);
console.log(nombreCherche);
let nombre = 0;
let nbEssais = 0;
do {
    // saisie du nombre
    nombre = parseInt(prompt('proposez un nombre entre 1 et 5'));
    nbEssais+=1;
    // donner les indices <> si pas égal
    if (nombre != nombreCherche) {
        if (nombre > nombreCherche)
            alert('trop grand');
        else
            alert('trop petit');
    }
}
while ((nombre != nombreCherche)&&(nbEssais<3))
if (nombre == nombreCherche)
    alert('BRAVO tu as trouvé! en '+nbEssais+' tentatives');
else
    alert('BOOOUHHH TU ES NUL');
// recommancer si pas égal 5
5

*/