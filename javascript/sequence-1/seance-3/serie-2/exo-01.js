function sommeTableau(tab) {
    let somme = 0;
    for (let index = 0; index < tab.length; index++) {
        somme+=tab[index];
    }
    return somme;
}


let tableau1 = [0,1,9,10];
console.log(sommeTableau(tableau1));