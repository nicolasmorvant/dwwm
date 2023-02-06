let resultat = "";
for (let i = 0; i < 22 ; i++)
{
    if(i!=0)
    {
        if(i%2==0)
        {
            if(i != 20)
            {
                //console.log(`${i} -`);  
                resultat += `${i} - `;  
            }
            else
            {
                //console.log(i);
                resultat += `${i}`;
            }  
        }
    }
}

console.log(resultat);

let tab = [];
for (let index = 0; index < 22; index++){
    if(index !=0){
        tab.push(index);   
    }
}

let tabPair = tab.filter((e) =>{
    return e % 2 == 0;
});
console.log(tabPair);

let affichage = "";
console.log(tabPair.join("-"));
console.log(tabPair.join(" - "));