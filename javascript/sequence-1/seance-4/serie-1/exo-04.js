function devinerNombreAleatoire()
{
    let min = 1;
    let max = 5;
    let random= Math.round(Math.random()*(max-min)+min);
    console.log(random);

    let chance = 3;
    let nombreUtilisateur = parseInt(prompt(`Quel est le nombre aléatoire compris entre ${min} ${max} inclus : `));
    chance--;

    if(nombreUtilisateur===random){
        console.log(`Victoire ! Vous avez trouvé le nombre aléatoire ${random} du premier coup`);
    }
    else{
        do {
            if(nombreUtilisateur>random)
            {
                console.log("Le nombre aléatoire est plus petit");
            }
            else
            {
                console.log("Le nombre aléatoire est plus grand");
            }
            nombreUtilisateur = parseInt(prompt(`Quel est le nombre aléatoire compris entre ${min} ${max} inclus : `));
            chance--;
        } while (nombreUtilisateur != random && chance > 0);
        if(nombreUtilisateur===random)
        {
            console.log(`Victoire ! Vous avez trouvé le nombre aléatoire ${random}`);
        }
        else
        {
            console.log(`Défaite ! Le nombre aléatoire était ${random}`);
        }
    }
}

devinerNombreAleatoire();

