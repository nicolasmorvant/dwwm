function trierOrdreCroissant(tab)
{
    let min = tab[0];
    for (let i = 0; i < tab.length; i++) {
        if(min>tab[i]){
            return false;
        }
        min = tab[i];
    }
    return true;
}

console.log(triOrdreCroissant([0,1,2,3,4,5,6,7,8,9,10]));
console.log(triOrdreCroissant([0,1,2,3,44,7,8,10]));
console.log(triOrdreCroissant([0,1,2,3,4,5,6,7,8,9,10]));