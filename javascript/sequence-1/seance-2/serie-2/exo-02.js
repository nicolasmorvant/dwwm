let x = prompt("Saisir un premier nombre « x » : ");
let n = prompt("Saisir un premier nombre « n » : ");
let resultat = x;

for (let index = 1; index < n; index++) {
     resultat*=x;    
}
console.log(`${x}^${n} = ${resultat}`);