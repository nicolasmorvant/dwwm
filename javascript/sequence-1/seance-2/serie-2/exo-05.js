//exercice 1

let index = 0;
while(index<11)
{
    if(index%2==0)
    {
        console.log(`Le nombre ${index} est pair`);
    }
    else
    {
        console.log(`Le nombre ${index} est impair`);
    }  
    index++;
}

//exercice 2

let x = prompt("Saisir un premier nombre « x » : ");
let n = prompt("Saisir un premier nombre « n » : ");
let resultat = x;
index = 1

while (index < n) {
     resultat*=x;
     index++
}
console.log(`${x}^${n} = ${resultat}`);

//exercice 3

resultat = 1;
n = 3;
let i = 1;

while(i<n+1)
{
	//console.log(resultat);
	resultat *=i;
    i++;
}
console.log(`${n} ! = ${resultat}`);

/*
resultat = 1;
n = 5;

for(let i = 1;i<n+1;i++)
{
	//console.log(resultat);
	resultat *=i;
}
console.log(`${n} ! = ${resultat}`);*/

//exercice 4

x = prompt("Saisissez une valeur pour x : ");
n = 1;

while( n<11){
    let resultat = x*n;
    console.log(`${x}x${n} = ${resultat}`);
    n++;
}

