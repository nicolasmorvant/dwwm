function moyenneTableau(tab){
    let somme = 0;
    for (let index = 0; index < tab.length; index++) {
        somme+=tab[index];
    }
    return somme/tab.length;
}


let tableau1 = [0,1,9,10];
console.log(moyenneTableau(tableau1));

/* 
---------------------
CORRECTION DE THIERRY
---------------------

let notes = new Array();
let somme =0;
let moyenne = 0.0;
for (let i = 0; i <2; i++) {
     notes[i]=parseInt(prompt('note n°'+i+"=?"));
}
// for (let i = 0; i <12; i++) {
//     somme+=notes[i];
// }
notes.forEach(note => {
    console.log(note); 
});
moyenne = somme/notes.length;
alert(`la moyenne de la classe est de :${moyenne.toFixed(1)}`);
*/